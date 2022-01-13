export interface IBase {
  id: string;
  hp: number;
  atk: number;
  def: number;
  atkPer: number;
  cRate: number;
  cDmg: number;
  phyDmg: number;
  eleDmg: number;
  er: number;
  defPer: number;
  hpPer: number;
  em: number;
  healing: number;
  level: number;
}

export abstract class Base {
  private static data: IBase[] = [
    {
      id: 'RaidenShogun',
      hp: 12907,
      atk: 337,
      def: 789,
      atkPer: 0,
      cRate: 0,
      cDmg: 0,
      phyDmg: 0,
      eleDmg: 0,
      er: 0.32,
      defPer: 0,
      hpPer: 0,
      em: 0,
      healing: 0,
      level: 90,
    },
  ];
  private static character: IBase = this.data.find(
    (i: IBase) => i.id === 'RaidenShogun'
  ) as IBase;

  static setChar(charId: string): void {
    const char: IBase | undefined = this.data.find(
      (item: IBase) => item.id === charId
    );
    if (char) this.character = char;
    throw new Error('id doesnt exist');
  }

  static getChar(): IBase {
    return this.character;
  }
}
