import { Canvas, useLoader } from "@react-three/fiber";
import Amy from "./AmyProject";
import { AccumulativeShadows, ContactShadows, Environment, RandomizedLight, SoftShadows, Stage, useTexture } from "@react-three/drei";
import Meta from "./camera";
import { useState } from "react";
import ZContext from "./pointZContext";



const Ground = ()=>{
    const textures = useTexture({
        map:'/textures/patterned_concrete_pavers_diff_1k.png',
        displacementMap:"/textures/patterned_concrete_pavers_disp_1k.png",
        aoMap:"/textures/patterned_concrete_pavers_ao_1k.png",
        roughnessMap:"/textures/patterned_concrete_pavers_rough_1k.png",
        metalness:"/textures/patterned_concrete_pavers_arm_1k.png",
        normalMap:"/textures/patterned_concrete_pavers_nor_gl_1k.png"
         

    })
    return <>
            <mesh rotation-x={-Math.PI/2} receiveShadow >
            <planeGeometry args={[200,200]} />
            <meshStandardMaterial  {...textures} transparent receiveShadow   metalness={0.1} roughness={1} />
        </mesh>
        </>
}
const Experience = () => {
    const [z,setZ] = useState(0)
    const zValue = (e)=>{
        setZ(e)
    }
    return (
        <>
        <ZContext.Provider value={{z,zValue}}>
        <Canvas shadows camera={{position:[0,2,5]}}>
        <fog attach="fog" args={['#202020', 1, 50]} />
            <ambientLight intensity={0.5}  />
        <directionalLight position={[1,2,3]} castShadow />
        <Amy />
        <Ground />
        </Canvas>
        {/* <Meta /> */}
        </ZContext.Provider>
        </>
    );
}
 
export default Experience;