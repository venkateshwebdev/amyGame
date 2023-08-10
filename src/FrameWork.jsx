import { Center, Cloud, ContactShadows, Environment, Gltf, OrbitControls, Plane, Sky, Stage, Text3D, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";


const Framwork = () => {
    return (
        <Canvas orthographic camera={{ position: [-30, 10, 100], zoom: 100 }} >
            
            <ContactShadows/>
            <ambientLight intensity={0.5} castShadow />
            <directionalLight position={[1,2,3]}   castShadow/>
            <directionalLight position={[1,1,1]} intensity={0.3} color={0xff0000}  castShadow/>
            <Sky />
            <Gltf src="/3d/me.glb" castShadow position={[4,-2,-1]} scale={2} />
            <Center position={[-3,-1,0]}>
            <Text3D rotation-x={-0.2}
            castShadow
            font={'/fonts/pop.json'}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1}
             >
                {`I'm\nVenkatesh`}
                <meshNormalMaterial  />
            </Text3D>
            </Center>
            {/* <Plane args={[1,1,1]} scale={10} material-color={0xff0000} position={[0,-2,0]} rotation-x={Math.PI/2} receiveShadow /> */}
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </Canvas>
    );
}
 
export default Framwork;