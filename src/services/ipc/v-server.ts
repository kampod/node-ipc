import { IPCModule } from 'node-ipc';

import { IPC_ENCODING } from '../../constants';
import { TimeUtil } from '../../utils/time-util';

export class VServer {
  private readonly serverId: string;
  private readonly serverPid: number;
  private readonly ipcServer: IPCModule;

  constructor(serverId: string,
              encoding: IPC_ENCODING,
              rawBuffer: boolean,
              sync: boolean,
              maxConnections: number,
              retry: number,
              maxRetries: number) {
    this.serverId = serverId; // prefix-pid-randomAlphaCode
    this.serverPid = process.pid;
    this.ipcServer = new IPCModule();
    this.ipcServer.config = Object.assign({}, this.ipcServer.config, {
      id: this.serverId,
      encoding,
      rawBuffer,
      sync,
      maxConnections,
      retry,
      maxRetries,
    });
    console.log(`Server ${this.serverId} (pid: ${this.serverPid}) config: ${JSON.stringify(this.ipcServer.config, null, 2)}`);
    this.ipcServer.serveNet(
      () => {
        this.ipcServer.server.on(
          'connect',
          (socket: any) => this.socketConnectHandler(socket),
        );
        this.ipcServer.server.on(
          'socket.disconnected',
          (socket: any) => this.socketDisconnectHandler(socket),
        );
        this.ipcServer.server.on(
          'payload',
          (data: any, socket: any) => this.payloadHandler(data, socket),
        );
      },
    );
    this.ipcServer.server.on(
      'error',
      this.errorHandler,
    );
    console.log(`Server ${this.serverId} (pid: ${this.serverPid}) configured`);
  }

  startServer(): void {
    this.ipcServer.server.start();
    console.log(`Server ${this.serverId} (pid: ${this.serverPid}) started`);
  }

  private errorHandler(err: Error): void {
    console.log(`Got an ERROR: ${err}`);
  }

  private socketConnectHandler(socket: any): void {
    socket.stats = {
      connectedAt: TimeUtil.getUnixTime(),
      lastTaskReceivedAt: null,
      lastHeartbeatAt: null,
      taskReceived: 0,
      taskProcessed: 0,
    };
    console.log(`Client ${socket.id} connected. All client count: ${this.getClientCount()}`);
  }

  private socketDisconnectHandler(socket: any): void {
    console.log(`Client ${(socket as any).id} disconnected. All client count: ${this.getClientCount()}`);
  }

  private payloadHandler(data: any, socket: any): void {
    console.log('Got a message from', (data.id), (data.message));
    this.ipcServer.server.emit(
      socket,
      'payload',
      {
        id: this.ipcServer.config.id,
        message: data.message + ' world!',
      },
    );
  }

  private getClientCount(): number {
    return this.ipcServer.server.sockets.length;
  }
}
