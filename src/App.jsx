import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { AccumulativeShadows, Box, Environment, OrbitControls, Plane, RandomizedLight, SoftShadows } from '@react-three/drei'
import BoxGeo from './Box'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import Meta from './camera'
function App() {
  return (
    <>
    <Canvas  shadows camera={{position:[2,25,50]}}>
      <Perf position="top-left" />
      <AccumulativeShadows
         position={[0,0,0]} 
      >
        <RandomizedLight
         
         ambient={0.5}
         intensity={1}
         amount={8}
         position={[1,2,3]}
         radius={1}
         bias={0.001}
         /> 
      </AccumulativeShadows>
      <ambientLight intensity={0.2} castShadow />
      <directionalLight position={[5,5,5]} intensity={0.9} castShadow/>
      <Environment preset='night' background blur={0.2} />      <Physics >
      <BoxGeo />
      </Physics>
      <OrbitControls />
    </Canvas>
    <Meta />
    </>
  )
}

export default App
