import { DPSer } from './DPSer';
import { Weapon } from './Weapon';
import { Artifacts } from './Artifacts';

const dpser = new DPSer('Ganyu');
const weapon = new Weapon('R5Amos');
const artifacts = new Artifacts(
  '4sr',
  ['em', 'cd', 'ele', 'atk'],
  ['em', 'atk', 'cd', 'flatAtk']
);

artifacts.printData();
