import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Model() {
    const { nodes } = useGLTF('/medias/torrus.glb');
    const { viewport } = useThree();
    const torus = useRef(null);

    useFrame(() => {
        torus.current.rotation.x += 0.02;
    });

    // Fixed material properties based on the provided values
    const materialProps = {
        thickness: 0.2,
        roughness: 0.0,
        transmission: 1.0,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };

    return (
        <group scale={viewport.width / 3.75}>
            <Text
                font={'/fonts/PPNeueMontreal-Bold.otf'}
                position={[0, 0, -1]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                hello world!
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}