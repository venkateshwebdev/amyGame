import { useLoader } from "@react-three/fiber";
import Webcam from "react-webcam";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const WebcamC = () => {
    const gltf = useLoader(GLTFLoader,'./3d/me.glb')
    return (
        <>
        </>
    );
}
 
export default WebcamC;