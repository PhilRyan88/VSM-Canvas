import * as joint from 'jointjs';

export const createShape = (shapeType, paper, x, y, imageUrl = '') => {
  let shape;

  if (shapeType === 'rect') {
    shape = new joint.shapes.standard.Rectangle();
    shape.position(x, y);
    shape.resize(100, 40);
    shape.attr({
      body: { fill: '#e0f7fa' },
      label: { text: 'Process', fill: '#000' },
    });
  } else if (shapeType === 'circle') {
    shape = new joint.shapes.standard.Circle();
    shape.position(x, y);
    shape.resize(60, 60);
    shape.attr({
      body: { fill: '#ffecb3' },
      label: { text: 'Inventory', fill: '#000' },
    });
  } else if (shapeType === 'image' && imageUrl) {
    shape = new joint.shapes.standard.Image();
    shape.position(x, y);
    shape.resize(60, 60);
    shape.attr({
      image: { 'xlink:href': imageUrl },
      label: { text: 'vsm', fill: '#000' },
    });
  } else if (shapeType === 'arrow') {
    shape = new joint.dia.Link({
      source: { x, y },
      target: { x: x + 100, y: y + 50 },
      attrs: {
        line: {
          stroke: '#000',
          strokeWidth: 2,
          targetMarker: {
            type: 'path',
            d: 'M 10 0 L 0 5 L 10 10 z',
          },
        },
      },
    });
  }

  return shape;
};
