export interface IWeapon {
  id: string;
  baseAtk: number;
  atkPer: number;
  hpPer: number;
  defPer: number;
  cr: number;
  cd: number;
  er: number;
  em: number;
  dmgBonus: number;
  phyBonus: number;
  eleBonus: number;
  normalBonus: number;
  chargedBonus: number;
  skillBonus: number;
  burstBonus: number;
  atk: number;
}

export abstract class Weapon {
  private static data: IWeapon[] = [
    {
      id: 'R5Grasscutter',
      baseAtk: 608,
      atkPer: 1.2,
      hpPer: 0,
      defPer: 0,
      cr: 0,
      cd: 0,
      er: 1.051,
      em: 0,
      dmgBonus: 0,
      phyBonus: 0,
      eleBonus: 0,
      normalBonus: 0,
      chargedBonus: 0,
      skillBonus: 0,
      burstBonus: 0,
      atk: 0,
    },
  ];
  private static weapon: IWeapon = this.data.find(
    (i: IWeapon) => i.id === 'R5Grasscutter'
  ) as IWeapon;

  static setWeapon(weaponId: string): void {
    const weapon: IWeapon | undefined = this.data.find(
      (i: IWeapon) => i.id === weaponId
    );
    if (weapon) this.weapon = weapon;
    throw new Error('weapon doesnt exist');
  }

  static getWeapon(): IWeapon {
    return this.weapon;
  }
}
