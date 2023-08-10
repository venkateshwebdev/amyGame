import { OrbitControls, Sky, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { Model } from "./Amy";

const Amy = () => {
    const gltf =useGLTF('/3d/amy.glb')
    console.log(gltf)
    return (
        <>
            {/* <ambientLight castShadow intensity={0.5} /> */}
            {/* <directionalLight position={[1,2,3]} castShadow  /> */}
            <Model />
            <OrbitControls enableZoom={false} enablePan={false}  enableDamping={true}  />
        </>
    );
}
 
export default Amy;