import React, { useEffect, useRef } from 'react';
import * as joint from 'jointjs';
import './styles.css';

const Canvas = ({ graphRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
      el: canvasRef.current,
      model: graph,
      width: 1200,
      height: 800,
      gridSize: 10,
      drawGrid: true,
      background: { color: '#f9f9f9' },
      defaultLink: () => {
        return new joint.dia.Link({
          attrs: {
            '.marker-target': {
              d: 'M 10 0 L 0 5 L 10 10 z',
              fill: 'black',
            },
            line: { stroke: 'black', strokeWidth: 2 },
          },
        });
      },
    });

    
    paper.on('element:pointerdblclick', (elementView) => {
      console.log('Double-clicked element:', elementView.model);
      elementView.model.remove();
    });

    graphRef.current = { graph, paper };
  }, []);

  return <div id="canvas" ref={canvasRef} className="canvas-container" />;
};

export default Canvas;
