import { v4 as uuid } from 'uuid';

export const calculateHeightAsString = (percent: number, total: number): string => `${percent / 100 * total}px`;

export const calculateWidthAsString = (percent: number, total: number): string => `${percent / 100 * total}px`;

export const calculateHeightAsNumber = (percent: number, total: number): number => percent / 100 * total;

export function generateElementData(el: any): {
  nodes: any[];
  links: any[];
} {
  const { name, number, atomic_mass, shells } = el;
  const uniqueId = `${name.toLowerCase()}-${uuid()}`;

  const protons = new Array(number).fill(null).map((proton, idx) => {
    return { id: `${uniqueId}-proton-${idx}`, type: 'proton', color: '#333333' }
  });
  const protonLinks = protons.map((p, idx) => { return { source: `${uniqueId}-proton-0`, target: p.id } });
  const neutrons = new Array(Math.floor(atomic_mass - number)).fill(null).map((neutron, idx) => { return { id: `${uniqueId}-neutron-${idx}`, type: 'neutron', color: '#777777' } });
  const neutronLinks = neutrons.map((l, idx) => { return { source: `${uniqueId}-proton-0`, target: l.id } });
  const electrons = shells.reduce((ini: any, shell: any, idx: number) => {
    const electronsForShell = new Array(shell).fill(null).map((electron) => { return { type: 'electron', color: 'blue', electronInShell: idx + 1, nrOfElectronsInShell: shell }; });
    return [...ini, ...electronsForShell];
  }, []).map((electron: any, idx: number) => {
    return { ...electron, id: `electron-${idx}` }
  });
  const electronsLinks = electrons.map((electron: any) => {
    return {
      source:  `${uniqueId}-proton-0`, target: electron.id, electronInShell: electron.electronInShell, nrOfElectronsInShell: electron.nrOfElectronsInShell
    }
  });
  const displayElectrons = false;
  const data = {
    nodes: [...neutrons, ...protons, ...(displayElectrons ? electrons : [])],
    links: [...neutronLinks, ...protonLinks, ...displayElectrons ? electronsLinks : []]
  };

  return { ...data }
}