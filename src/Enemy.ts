export abstract class Enemy {
  private static level: number = 93;
  private static currentRes: number = 0.1;
  private static currentDef: number = 1;

  static addResShred(debuff: number): void {
    this.currentRes = this.currentRes - debuff;
  }

  static addDefShred(debuff: number): void {
    this.currentDef = this.currentDef - debuff;
  }

  static getRes(): number {
    return this.currentRes;
  }

  static getDef(): number {
    return this.currentDef;
  }
}
