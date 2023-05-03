import { IPCModule } from 'node-ipc';

import { IPC_ENCODING } from '../../constants';
import { StringUtil } from '../../utils/string-util';

export class VClient {
  private readonly serverId: string;
  private readonly clientId: string;
  private readonly clientPid: number;
  private readonly ipcClient: IPCModule;

  constructor(serverId: string,
              encoding: IPC_ENCODING,
              rawBuffer: boolean,
              sync: boolean,
              maxConnections: number,
              retry: number,
              maxRetries: number) {
    this.serverId = serverId;
    this.clientId = `client-${StringUtil.getRandomAlphabetCode()}`;
    this.clientPid = process.pid;
    this.ipcClient = new IPCModule();
    this.ipcClient.config = Object.assign({}, this.ipcClient.config, {
      id: this.clientId,
      encoding,
      rawBuffer,
      sync,
      maxConnections,
      retry,
      maxRetries,
    });
    console.log(`Client ${this.clientId} (pid: ${this.clientPid}) config: ${JSON.stringify(this.ipcClient.config, null, 2)}`);
  }

  connectToServer(): void {
    this.ipcClient.connectToNet(this.serverId, () => {
      this.ipcClient.of[this.serverId].on(
        'connect',
        () => this.connectServerHandler(),
      );
      this.ipcClient.of[this.serverId].on(
        'disconnect',
        () => this.disconnectServerHandler(),
      );
      this.ipcClient.of[this.serverId].on(
        'payload',
        (data) => this.payloadHandler(data),
      );
    });
    console.log(`Client ${this.clientId} (pid: ${this.clientPid}) connected to server: ${this.serverId}`);
  }

  private connectServerHandler(): void {
    console.log(`## Connected to ${this.serverId} ##`);
    this.ipcClient.of[this.serverId].emit(
      'payload',
      {
        id: this.ipcClient.config.id,
        message: 'hello',
      },
    );
  }

  private disconnectServerHandler(): void {
    console.log(`## Disconnected from ${this.serverId} ## `);
  }

  private payloadHandler(data: any): void {
    console.log(`## Got a message from ${data.id}: ${data.id} ##`);
  }
}
