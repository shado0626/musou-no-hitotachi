import weaponJson from './data/weapons.json';

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

export class Weapon {
  private data: IWeapon[] = weaponJson;
  private weapon: IWeapon = this.data.find(
    (i: IWeapon) => i.id === 'R5Grasscutter'
  ) as IWeapon;

  setWeapon(weaponId: string): void {
    const weapon: IWeapon | undefined = this.data.find(
      (i: IWeapon) => i.id === weaponId
    );
    if (weapon) this.weapon = weapon;
    else throw new Error('weapon doesnt exist');
  }

  get weap(): IWeapon {
    return this.weapon;
  }
}
