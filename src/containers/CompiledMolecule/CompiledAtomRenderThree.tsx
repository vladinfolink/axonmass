import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

const _CompiledAtomRenderThree: React.FC = ({width, height, elementsInChart}: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x7E7E7E); // Set background color to #7E7E7E
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Red color
    const atom = new THREE.Mesh(geometry, material);
    scene.add(atom);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      atom.rotation.x += 0.01;
      atom.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [width, height]);

  useEffect(() => {
    console.log(width, height);
    
  
   
  }, [width, height])
  

  return <div ref={containerRef}></div>;
};

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.E.width,
    height: state.panelSizes.E.height ,
    elementsInChart: [...state.compiledMolecule.elementsInChart]
  };
};

export const CompiledAtomRenderThree = connect(mapStateToProps, {})(_CompiledAtomRenderThree);
