import React, { useContext, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act, useFrame } from "@react-three/fiber";
import ZContext from "./pointZContext";

export function Model(props) {
  const {z} = useContext(ZContext)
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/3d/all.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    actions.idle.play()
  },[])
  useFrame(()=>{
    console.log(z)
    if(z<0){
      actions.jump.play()
    }
    else{
      actions.jump.stop()
      actions.idle.play()
    }
  })
  return (
    <group ref={group} {...props} dispose={null} position-y={0.07} >
      <group name="Scene" >
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01} >
          <skinnedMesh
            castShadow
            name="Ch46"
            geometry={nodes.Ch46.geometry}
            material={materials.Ch46_body}
            skeleton={nodes.Ch46.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}