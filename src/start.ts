import { IPC_CONFIG } from './config';
import { VServer } from './services/ipc/v-server';

async function start(): Promise<void> {
  console.log(`\nConfig: ${JSON.stringify(IPC_CONFIG)}`);
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

start();
