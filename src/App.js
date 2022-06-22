import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import ArmchairYellow from "./ArmchairYellow"

export default function App() {
  const Cube = () => {
    const meshRef = useRef(null)

    useFrame(() => {
      if (!meshRef.current) {
        return
      }

      meshRef.current.rotation.y += 0.01
    })

    return (
      <>
        <mesh ref={meshRef}>
          <ArmchairYellow />
        </mesh>
      </>
    )
  }
  return (
    <div className="App">
      <div className="text-container">
        <div className="text">Nono.</div>
      </div>
      <Canvas
        camera={{ position: [20, 60, 50], fov: 50 }}
        colorManagement
        style={{ height: "100vh" }}
      >
        <directionalLight intensity={0.5} />
        <pointLight position={[10, 10, 120]} />
        <Suspense>
          <Cube />
        </Suspense>
      </Canvas>
    </div>
  )
}
