import React, { useRef } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import { createShape } from './components/JointShapeFactory';
import './components/styles.css';

function App() {
  const graphRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('shape'));
    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const shape = createShape(data.type, graphRef.current.paper, x, y, data.imageUrl);
    if (data.type === 'arrow') {
      graphRef.current.graph.addCell(shape); // Link
    } else {
      shape.addTo(graphRef.current.graph);
    }
  };

  return (
    <div className="app-container">
      <Toolbar />
      <div
        className="canvas-wrapper"
        id="canvas"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <Canvas graphRef={graphRef} />
      </div>
    </div>
  );
}

export default App;
