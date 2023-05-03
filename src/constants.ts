export enum IPC_ENCODING {
  ASCII = 'ascii',
  UTF8 = 'utf8',
  UTF16LE = 'utf16le',
  UCS2 = 'ucs2',
  BASE64 = 'base64',
  HEX = 'hex',
}

export const ipcEncodingValues = [
  IPC_ENCODING.ASCII,
  IPC_ENCODING.UTF8,
  IPC_ENCODING.UTF16LE,
  IPC_ENCODING.UCS2,
  IPC_ENCODING.BASE64,
  IPC_ENCODING.HEX,
];
