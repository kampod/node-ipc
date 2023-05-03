'use strict';

export class StringUtil {
  static FULL_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  static HALF_ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static DIGITS = '0123456789';

  static getRandomSting(symbols: string,
                        length: number): string {
    let text = '';
    for (let i = 0; i < length; i++) {
      text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return text;
  }

  static getRandomAlphabetCode(length: number = 8): string {
    return StringUtil.getRandomSting(StringUtil.HALF_ALPHABET, length);
  }

  static isJsonString(string: string): boolean {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  }

  static isNumberString(string: string): boolean {
    if (typeof string != 'string') {
      return false;
    }
    return !isNaN(string as any) && !isNaN(parseFloat(string));
  }

  static parseJsonString(jsonString: string): any {
    let result: any = null;
    try {
      result = JSON.parse(jsonString);
    } catch (e) {
    }
    return result;
  }
}
