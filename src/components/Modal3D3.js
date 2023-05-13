import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span className="canvas-load"></span>
            <p style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }}>{progress.toFixed(2)}%</p>
        </Html>
    );
};

const Model3D = () => {
    const modal = useGLTF('./smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive object={modal.scene} scale={3} position={[0, -3, 0]} rotation={[0, 0, 0]} />
        </mesh>
    );
};
const ModalCanvas2 = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Model3D />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ModalCanvas2;
