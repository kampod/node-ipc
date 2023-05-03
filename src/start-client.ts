import { IPC_CONFIG } from './config';
import { VClient } from './services/ipc/v-client';

async function startClient(): Promise<void> {
  console.log(`\nConfig client: ${JSON.stringify(IPC_CONFIG)}`);
  const vClient = new VClient(
    IPC_CONFIG.serverId,
    IPC_CONFIG.encoding,
    IPC_CONFIG.rawBuffer,
    IPC_CONFIG.sync,
    IPC_CONFIG.maxConnections,
    IPC_CONFIG.retry,
    IPC_CONFIG.maxRetries,
  );
  vClient.connectToServer();
}

startClient();
