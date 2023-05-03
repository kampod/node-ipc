import Big from 'big.js';

export class NumberUtil {
  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static roundValue(value: number | string, precision: number): string {
    return Big(value).toFixed(precision);
  }

  static roundUpValue(value: number | string, precision: number): string {
    return Big(value).toFixed(precision, Big.roundUp);
  }

  static fixedValue(value: number | string): string {
    return Big(value).toFixed();
  }

  static eqValue(value1: number | string, value2: number | string): boolean {
    let result: boolean;
    try {
      result = Big(value1).eq(value2);
    } catch (e) {
      result = false;
    }
    return result;
  }

  static gtThanValue(value1: number | string, value2: number | string): boolean {
    let result: boolean;
    try {
      result = Big(value1).gt(value2);
    } catch (e) {
      result = false;
    }
    return result;
  }

  static ltThanValue(value1: number | string, value2: number | string): boolean {
    let result: boolean;
    try {
      result = Big(value1).lt(value2);
    } catch (e) {
      result = false;
    }
    return result;
  }

  static gtOrEqualThanValue(value1: number | string, value2: number | string): boolean {
    let result: boolean;
    try {
      result = Big(value1).gte(value2);
    } catch (e) {
      result = false;
    }
    return result;
  }

  static ltOrEqualThanValue(value1: number | string, value2: number | string): boolean {
    let result: boolean;
    try {
      result = Big(value1).lte(value2);
    } catch (e) {
      result = false;
    }
    return result;
  }

  static addValues(value1: number | string, value2: number | string): string {
    return Big(value1).add(value2).toFixed();
  }

  static subValues(value1: number | string, value2: number | string): string {
    return Big(value1).sub(value2).toFixed();
  }

  static mulValues(value1: number | string, value2: number | string): string {
    return Big(value1).mul(value2).toFixed();
  }

  static divValues(value1: number | string, value2: number | string): string {
    if (NumberUtil.eqValue(value2, '0')) {
      throw new Error('Division by 0 error');
    }
    return Big(value1).div(value2).toFixed();
  }

  static roundUpToIntNumber(value: number | string): number {
    return Big(value).round(0, Big.roundUp).toNumber();
  }
}
