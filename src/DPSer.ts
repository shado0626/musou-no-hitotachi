import charJson from './data/characters.json';
export interface IDPSer {
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

export class DPSer {
  private data: IDPSer[] = charJson;
  private character: IDPSer = this.data.find(
    (i: IDPSer) => i.id === 'RaidenShogun'
  ) as IDPSer;

  constructor(charId: string) {
    const char: IDPSer | undefined = this.data.find(
      (item: IDPSer) => item.id === charId
    );
    if (char) this.character = char;
    else throw new Error('character doesnt exist');
  }

  get char(): IDPSer {
    return this.character;
  }
}
