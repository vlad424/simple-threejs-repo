import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/fiber/cube/Cube";

function App() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}

export default App;
