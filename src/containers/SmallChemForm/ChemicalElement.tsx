import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { ForceGraph3D } from 'react-force-graph';

const ChemElementCollectionBox = styled.div`
  height: 31.4vh;
  flex-basis: 19.6%;
  background-color: #5A5A5A;
  border-radius: 6px;
  
  p {
    font-family: f-medium;
    font-size: 16px;
    color: #B4B4B4;
    padding-left: 0.2vw;
    padding-top: 0.2vw;
  }

  * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 49%;
  height: 96vh;

  border-radius: 1%;

  :nth-child(1) {
    background-color: #5A5A5A;
  }

  :nth-child(2) {
    background-color: #5A5A5A;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const SmallChemSchema = ({ filteredElement: {
  atomic_mass,
  number,
  shells
} }: any) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const fgRef: React.MutableRefObject<any> = useRef();

  const protons = new Array(number).fill(null).map((proton, idx) => {
    return { id: `proton-${idx}`, type: 'proton', color: '#D14836' }
  });

  const protonLinks = protons.map((p, idx) => {
    return { source: 'proton-0', target: p.id }
  });

  const neutrons = new Array(
    Math.floor(atomic_mass - number)
  ).fill(null).map((neutron, idx) => {
    return { id: `neutron-${idx}`, type: 'neutron', color: '#11312D' }
  });

  const neutronLinks = neutrons.map((l, idx) => {
    return { source: 'proton-0', target: l.id }
  });

  const electrons = shells.reduce((ini: any, shell: any, idx: any) => {
    const electronsForShell = new Array(shell).fill(null).map((electron) => {
      return {
        type: 'electron',
        color: 'blue',
        electronInShell: idx + 1,
        nrOfElectronsInShell: shell
      };
    });

    return [...ini, ...electronsForShell]
  }, []).map((electron: any, idx: any) => {
    return { ...electron, id: `electron-${idx}` }
  });

  const electronsLinks = electrons.map((electron: any) => {
    return {
      source: 'proton-0',
      target: electron.id,
      electronInShell: electron.electronInShell,
      nrOfElectronsInShell: electron.nrOfElectronsInShell
    }
  });

  const data = {
    nodes: [...protons, ...neutrons, ...electrons],
    links: [...protonLinks, ...neutronLinks, ...electronsLinks]
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell*88 : 11
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>
    <ForceGraph3D
      ref={fgRef}
      width={windowDimensions.height * 0.18}
      height={windowDimensions.height * 0.18}
      backgroundColor={'#5A5A5A'}
      graphData={{ ...data }}
      nodeLabel="type"
      nodeAutoColorBy="type"
      showNavInfo={false}
      nodeVal={16}
      nodeResolution={32}
      nodeOpacity={1}
      linkVisibility={false}

      cooldownTicks={100}
      onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
    />
  </>
};

export function ChemicalElement(props: any) {
  const { filteredElement } = props;
  return (
    <ChemElementCollectionBox>
      <p>{filteredElement.name.toUpperCase()}</p>
      <SmallChemSchema filteredElement={filteredElement} />
      asdasd
    </ChemElementCollectionBox>
  )
}
