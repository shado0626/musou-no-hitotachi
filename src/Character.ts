export interface ICharacter {
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

export abstract class Character {
  private static data: ICharacter[] = [
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
  private static character: ICharacter = this.data.find(
    (i: ICharacter) => i.id === 'RaidenShogun'
  ) as ICharacter;

  static setChar(charId: string): void {
    const char: ICharacter | undefined = this.data.find(
      (item: ICharacter) => item.id === charId
    );
    if (char) this.character = char;
    throw new Error('character doesnt exist');
  }

  static getChar(): ICharacter {
    return this.character;
  }
}
