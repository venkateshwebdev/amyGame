import { OrbitControls, SoftShadows } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
const ThreeD = () => {
    return (
        <div className='threeD'>
        <Canvas shadows> 
        <OrbitControls />
        </Canvas>
        </div>
    );
}
 
export default ThreeD;