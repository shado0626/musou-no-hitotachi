import artiJson from './data/artifacts.json';

export interface IArtifactsSet {
  id: string;
}

export interface IArtifact {
  main: string;
  subs: string[];
  rolls: number[];
}

export class Artifacts {
  private data: IArtifactsSet[] = artiJson.sets;
  private artifactSet: IArtifactsSet = this.data.find(
    (i: IArtifactsSet) => i.id === '4eosf'
  ) as IArtifactsSet;
  private sands: IArtifact = {
    main: 'er',
    subs: ['atk', 'flatAtk', 'cd'],
    rolls: [0, 0, 0],
  };
  private goblet: IArtifact = {
    main: 'ele',
    subs: ['atk', 'flatAtk', 'cd', 'er'],
    rolls: [0, 0, 0, 0],
  };
  private circlet: IArtifact = {
    main: 'cd',
    subs: ['atk', 'flatAtk', 'er'],
    rolls: [0, 0, 0],
  };

  setArtifactsSet(artiId: string): void {
    const arti: IArtifactsSet | undefined = this.data.find(
      (item: IArtifactsSet) => item.id === artiId
    );
    if (arti) this.artifactSet = arti;
    else throw new Error('artifacts set doesnt exist');
  }

  setArtifacts(sands: IArtifact, goblet: IArtifact, circlet: IArtifact): void {
    this.sands = sands;
    this.goblet = goblet;
    this.circlet = circlet;
  }
}
