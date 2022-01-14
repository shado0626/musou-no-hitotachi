import artiJson from './data/artifacts.json';

export interface IArtifactsSet {
  id: string;
}

export interface IArtifact {
  main: string;
  subs: string[];
  rolls: number[];
}

const mainStats = {
  er: 0.518,
  atk: 0.466,
  ele: 0.466,
  cd: 0.622,
};

const subStats = {
  cd: 0.0777,
  er: 0.0648,
  atk: 0.0583,
  em: 23.31,
};

export class Artifacts {
  private data: IArtifactsSet[] = artiJson.sets;
  private artifactSet: IArtifactsSet;
  private flower: IArtifact;
  private feather: IArtifact;
  private sands: IArtifact[];
  private goblet: IArtifact[];
  private circlet: IArtifact[];

  constructor(setId: string, mains: string[], subs: string[]) {
    const arti: IArtifactsSet = this.data.find(
      (item: IArtifactsSet) => item.id === setId
    ) as IArtifactsSet;
    this.artifactSet = arti;

    const flowerSubs = subs.filter((i) => i !== 'flatHp');
    const featherSubs = subs.filter((i) => i !== 'flatAtk');

    this.flower = {
      main: 'flatHp',
      subs: flowerSubs,
      rolls: new Array(flowerSubs.length).fill(0),
    };
    this.feather = {
      main: 'flatAtk',
      subs: featherSubs,
      rolls: new Array(featherSubs.length).fill(0),
    };
    this.sands = mains
      .filter((i) => artiJson.sands.includes(i))
      .map((i) => {
        const s = subs.filter((j) => j !== i);
        return {
          main: i,
          subs: s,
          rolls: new Array(s.length).fill(0) as number[],
        };
      });
    this.goblet = mains
      .filter((i) => artiJson.goblet.includes(i))
      .map((i) => {
        const s = subs.filter((j) => j !== i);
        return {
          main: i,
          subs: s,
          rolls: new Array(s.length).fill(0) as number[],
        };
      });
    this.circlet = mains
      .filter((i) => artiJson.circlet.includes(i))
      .map((i) => {
        const s = subs.filter((j) => j !== i);
        return {
          main: i,
          subs: s,
          rolls: new Array(s.length).fill(0) as number[],
        };
      });
  }

  printData(): void {
    console.log(this.flower);
    console.log(this.feather);
    console.log(this.sands);
    console.log(this.goblet);
    console.log(this.circlet);
  }
}
