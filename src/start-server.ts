import { IPC_CONFIG } from './config';
import { VServer } from './services/ipc/v-server';

async function startServer(): Promise<void> {
  console.log(`\nConfig server: ${JSON.stringify(IPC_CONFIG)}`);
  const vServer = new VServer(
    IPC_CONFIG.serverId,
    IPC_CONFIG.encoding,
    IPC_CONFIG.rawBuffer,
    IPC_CONFIG.sync,
    IPC_CONFIG.maxConnections,
    IPC_CONFIG.retry,
    IPC_CONFIG.maxRetries,
  );
  vServer.startServer();
}

startServer();
