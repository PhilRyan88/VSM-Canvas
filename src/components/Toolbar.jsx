import React from 'react';
import ShapeItem from './ShapeItem';
import image from "../assets/icons/images.png"
import vsm2 from "../assets/icons/vsm2.jpg"
import vsm1 from "../assets/icons/vsm1.jpg"
import './styles.css';

const shapes = [
  { type: 'rect', label: 'Process' },
  { type: 'circle', label: '' },
  { type: 'image', label: 'User', imageUrl: image }, 
  { type: 'image', label: 'User', imageUrl: vsm2 }, 
  { type: 'image', label: 'User', imageUrl: vsm1 },  
  { type: 'arrow', label: 'Arrow' }
];

const Toolbar = () => {
  return (
    <div className="toolbar">
      {shapes.map((shape, idx) => (
        <ShapeItem key={idx} shape={shape} />
      ))}
    </div>
  );
};

export default Toolbar;
