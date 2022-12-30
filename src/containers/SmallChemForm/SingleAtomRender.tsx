import { ForceGraph3D } from 'react-force-graph';
import { useEffect, useRef } from 'react';

import { connect } from 'react-redux';

const calculateHeight = (percent: number, total: number) => percent / 100 * total;

const SingleAtomRender = ({ filteredElement: { atomic_mass, number, shells }, panelSizes }: any) => {
  const fgRef: React.MutableRefObject<any> = useRef();
  const protons = new Array(number).fill(null).map((proton, idx) => {
    return { id: `proton-${idx}`, type: 'proton', color: '#E43A43' }
  });
  const protonLinks = protons.map((p, idx) => { return { source: 'proton-0', target: p.id } });
  const neutrons = new Array(Math.floor(atomic_mass - number)).fill(null).map((neutron, idx) => { return { id: `neutron-${idx}`, type: 'neutron', color: '#1B703D' } });
  const neutronLinks = neutrons.map((l, idx) => { return { source: 'proton-0', target: l.id } });
  const electrons = shells.reduce((ini: any, shell: any, idx: number) => {
    const electronsForShell = new Array(shell).fill(null).map((electron) => { return { type: 'electron', color: 'blue', electronInShell: idx + 1, nrOfElectronsInShell: shell }; });
    return [...ini, ...electronsForShell];
  }, []).map((electron: any, idx: number) => {
    return { ...electron, id: `electron-${idx}` }
  });
  const electronsLinks = electrons.map((electron: any) => {
    return {
      source: 'proton-0', target: electron.id, electronInShell: electron.electronInShell, nrOfElectronsInShell: electron.nrOfElectronsInShell
    }
  });
  const displayElectrons = false;
  const data = {
    nodes: [...neutrons, ...protons, ...(displayElectrons ? electrons : [])],
    links: [...neutronLinks, ...protonLinks, ...displayElectrons ? electronsLinks : []]
  };

  useEffect(() => {
    fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell * 88 : 11
    });
  }, []);

  return <>
    <ForceGraph3D
      ref={fgRef}
      width={panelSizes.D.width / 5.1}
      height={calculateHeight(45, panelSizes.D.height)}
      backgroundColor={'#7E7E7E'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={{ ...data }}
      showNavInfo={false} nodeVal={16} nodeResolution={32} nodeOpacity={1} linkVisibility={false} cooldownTicks={40}
      onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
    />
  </>
};

function mapStateToProps(state: any) {
  return {
    panelSizes: { ...state.panelSizes }
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAtomRender);
