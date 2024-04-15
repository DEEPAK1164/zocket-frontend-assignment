import React, { useRef, useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { img_url } from './assets/ImageUrl';

const CanvaEditor = () => {
  const canvasRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("#0369A1");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    drawCanvas();
  }, [backgroundColor, textColor]);

  

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mr-20">
        <div className="mb-6">
          <label className="block mb-2">Background Color:</label>
          <ChromePicker
            color={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Text Color:</label>
          <ChromePicker
            color={textColor}
            onChange={handleTextColorChange}
          />
        </div>
      </div>
      <canvas ref={canvasRef} width={400} height={400} className="border-2 border-black" />
    </div>
  );
};

export default CanvaEditor;
