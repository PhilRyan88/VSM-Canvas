import React from 'react';

const ShapeItem = ({ shape }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('shape', JSON.stringify(shape));
  };

  return (
    <div
      className="shape-item"
      draggable
      onDragStart={handleDragStart}
    >
      {shape.imageUrl ? (
        <img src={shape.imageUrl} alt={shape.label} width={70} />
      ) : (
        <div className={`shape-preview ${shape.type}`}>
          {shape.label}
        </div>
      )}
    </div>
  );
};

export default ShapeItem;
