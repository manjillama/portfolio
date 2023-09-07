import React from 'react';

const BrushStroke = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 170,
        backgroundRepeat: 'repeat',
        backgroundSize: 'initial',
        marginBottom: 55,
        backgroundImage: 'url(/images/brush_stroke.png)',
        zIndex: 20
      }}
    />
  );
};

export default BrushStroke;
