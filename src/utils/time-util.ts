export class TimeUtil {
  static getNow(): number {
    return Date.now();
  }

  static getUnixTime(): number {
    return Math.floor(Date.now() / 1000);
  }

  static secFromMillis(timeMillis: number): number {
    return Math.floor(timeMillis / 1000);
  }

  static millisFromSec(timeSec: number): number {
    return timeSec * 1000;
  }

  static sleep(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
}
