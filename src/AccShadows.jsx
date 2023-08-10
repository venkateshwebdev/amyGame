import { AccumulativeShadows, BakeShadows, ContactShadows, Environment, Gltf, Lightformer, OrbitControls, RandomizedLight, Sky, SoftShadows, Stage } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
const Cube = ()=>{
    const cuberef = useRef()
    // useFrame(()=>{
    //     cuberef.current.rotation.z+=0.01
    // })
    return(
        <mesh ref={cuberef} position={[0,1,0]} castShadow>  
        <boxGeometry/>
        <meshStandardMaterial color={0xff0000} />
        </mesh>
    )
}



const AccShadows = () => {

    const gltf = useLoader(GLTFLoader,"./3d/me.glb")

    return (
        <Canvas shadows>
            <Perf />
            <Sky Position={[3,2,15]} distance={10000}   />
            <ambientLight intensity={0.2} />
            <directionalLight position={[3,2,15]} />
            <Stage
        intensity={0}
        shadows={{ type: 'accumulative', color: '#202020', colorBlend: 2, opacity: 1 }}
        // adjustCamera={1}
        >
                <Gltf castShadow receiveShadow src="/3d/me.glb" />
                {/* <Gltf castShadow receiveShadow src="/3d/car.glb" position={[-2,0,0]} /> */}
        
            </Stage>
            <OrbitControls />
        </Canvas>
    );
}
 
export default AccShadows;