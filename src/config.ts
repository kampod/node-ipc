import * as dotenv from 'dotenv';
import env = require('env-var');
import { IPC_ENCODING, ipcEncodingValues } from './constants';

dotenv.config();

export const IPC_CONFIG = {
  serverId: env.get('IPC_SERVER_ID').required(false).default('ipc-server').asString(),
  clientCount: env.get('IPC_CLIENT_COUNT').required(false).default('2').asIntPositive(),
  encoding: env.get('IPC_ENCODING').required(false).default(IPC_ENCODING.UTF8).asEnum(ipcEncodingValues),
  rawBuffer: env.get('IPC_RAW_BUFFER').required(false).default('false').asBool(),
  sync: env.get('IPC_SYNC').required(false).default('false').asBool(),
  maxConnections: env.get('IPC_MAX_CONNECTIONS').required(false).default('100').asIntPositive(),
  retry: env.get('IPC_RETRY').required(false).default('1000').asIntPositive(),
  maxRetries: env.get('IPC_MAX_RETRIES').required(false).default('10').asIntPositive(),
};
