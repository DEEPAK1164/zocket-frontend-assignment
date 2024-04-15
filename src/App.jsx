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

  
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Insert image
    const image = new Image();
    image.src = img_url; // Example online image URL
    image.onload = () => {
      const x = (canvas.width - image.width) / 2;
      const y = (canvas.height - image.height) / 2; // Adjust y-coordinate
      ctx.drawImage(image, x, y);

      // Draw text
      const text = `Coffee Shop`;
      ctx.fillStyle = textColor;
      ctx.font = "30px Arial";
      const textWidth = ctx.measureText(text).width;
      const textX = (canvas.width - textWidth) / 2;
      const textY = 50; // Position text at the top
      ctx.fillText(text, textX, textY);
    };
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div className="flex items-center justify-center mr-6">
      <div className="rounded-lg shadow-lg p-6 mr-20 bg-white">
        <div className="mb-6">
          <label className="block mb-2">Background Color:</label>
          <ChromePicker
            color={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <div className="mb-6 ">
          <label className="block mb-2">Text Color:</label>
          <ChromePicker
            color={textColor}
            onChange={handleTextColorChange}
          />
        </div>
      </div>
      <canvas ref={canvasRef} width={400} height={400} className="rounded-lg shadow-lg border-2 border-white" />
    </div>
  );
};

export default CanvaEditor;
