import { Box, Plane, Sphere, Wireframe } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import * as THREE from "three"
import { useControls } from "leva";
const BoxGeo = () => {
    const {position} = useControls({
        position:{
            value:{x:0,y:5},
            step:0.1,
            joystick:'invert'
        }
    })
    const cubeRef = useRef()
    useEffect(() => {
        if (cubeRef.current) {

        window.addEventListener('keydown',(event)=>{
            switch (event.keyCode) {
                case 38: // up arrow
                cubeRef.current.applyImpulse({ x: 0, y: 0, z:-3 }, true);
                  break;
                case 40: // down arrow
                cubeRef.current.applyImpulse({ x: 0, y: 0, z: 3 }, true);
                  break;
                case 37: // left arrow
                cubeRef.current.applyImpulse({ x: -3, y: 0, z: 0 }, true);
                  break;
                case 39: // right arrow
                cubeRef.current.applyImpulse({ x: 3, y: 0, z: 0 }, true);
                  break;
              }
        })}
      }, []);
    return (
        <>
        <RigidBody ref={cubeRef} colliders="ball" restitution={0.5} friction={1} mass={100} position={[position.x,position.y,0]}><Sphere scale={2} /></RigidBody>
        {/* <RigidBody type="fixed"><Box args={[1,10,100]} material-color="mediumpurple" /></RigidBody> */}
        <RigidBody type="fixed" opacity={0}>
            <Box args={[1,20,100]} position={[50,0,0]}   material-color="mediumpurple" />
            <Box args={[1,20,100]} position={[-50,0,0]}  material-color="mediumpurple" />
            <Box args={[100,20,1]} position={[0,0,50]} material-color="mediumpurple" />
            <Box args={[100,20,1]} position={[0,0,-50]}  material-color="mediumpurple" />
        </RigidBody>
      <RigidBody type="fixed" friction={1}><Plane args={[100,100]} material-color="lime" rotation-x={-Math.PI/2} /></RigidBody>
      </>
    );
}
 
export default BoxGeo;