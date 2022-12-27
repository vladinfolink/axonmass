import { ForceGraph3D } from 'react-force-graph';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const SingleAtomRender = ({ filteredElement: { atomic_mass, number, shells }, panelSizes }: any) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const fgRef: React.MutableRefObject<any> = useRef();
  const protons = new Array(number).fill(null).map((proton, idx) => {
    return { id: `proton-${idx}`, type: 'proton', color: '#D14836' }
  });
  const protonLinks = protons.map((p, idx) => { return { source: 'proton-0', target: p.id } });
  const neutrons = new Array(Math.floor(atomic_mass - number)).fill(null).map((neutron, idx) => { return { id: `neutron-${idx}`, type: 'neutron', color: '#11312D' } });
  const neutronLinks = neutrons.map((l, idx) => { return { source: 'proton-0', target: l.id } });
  const electrons = shells.reduce((ini: any, shell: any, idx: any) => {
    const electronsForShell = new Array(shell).fill(null).map((electron) => { return { type: 'electron', color: 'blue', electronInShell: idx + 1, nrOfElectronsInShell: shell }; });
    return [...ini, ...electronsForShell];
  }, []).map((electron: any, idx: any) => {
    return { ...electron, id: `electron-${idx}` }
  });
  const electronsLinks = electrons.map((electron: any) => {
    return {
      source: 'proton-0', target: electron.id, electronInShell: electron.electronInShell, nrOfElectronsInShell: electron.nrOfElectronsInShell
    }
  });
  const displayElectrons = false;
  const data = {
    nodes: [...protons, ...neutrons, ...(displayElectrons ? electrons : [])],
    links: [...protonLinks, ...neutronLinks, ...displayElectrons ? electronsLinks : []]
  };

  useEffect(() => {
    fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell * 88 : 11
    });
    function handleResize() { setWindowDimensions(getWindowDimensions()); }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>
    <ForceGraph3D
      ref={fgRef}
      width={panelSizes.D.width / 5.2} height={windowDimensions.height * 0.18}
      backgroundColor={'#5A5A5A'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={{ ...data }}
      showNavInfo={false} nodeVal={16} nodeResolution={32} nodeOpacity={1} linkVisibility={false} cooldownTicks={100}
      onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
    />
  </>
};

function mapStateToProps(state: any) {
  return {
    panelSizes: { ...state.panelSizes }
  };
};

const mapDispatchToProps = { };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAtomRender);
