import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="cursor w-6 h-6 rounded-full border-2 fixed -translate-x-1/2 -translate-y-1/2 border-black bg-black z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
