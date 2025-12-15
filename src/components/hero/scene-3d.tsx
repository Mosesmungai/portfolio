"use client"

import { Canvas, useFrame, ThreeElements } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh } from "three"

function RotatingBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => (meshRef.current.rotation.x += delta * 0.5))

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={hovered ? 1.5 : 1}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <icosahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color={hovered ? "#4ade80" : "#3b82f6"} wireframe />
        </mesh>
    )
}

export function Scene3D() {
    return (
        <div className="h-full w-full cursor-grab active:cursor-grabbing">
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <RotatingBox position={[0, 0, 0]} />
            </Canvas>
        </div>
    )
}
