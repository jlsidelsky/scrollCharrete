import React, { useEffect, useState } from "react";
import "./Cube.css";
import General from "./General";

const Cube: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      setRotation({
        x: scrollY * 0.2,
        y: scrollX * 0.2,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General
      scrollHeight={200}
      scrollWidth={200}
      svgHeight={150}
      svgWidth={150}
    >
      <div className="cube-scene">
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            position: "fixed",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="cube-face cube-front"></div>
          <div className="cube-face cube-back"></div>
          <div className="cube-face cube-right"></div>
          <div className="cube-face cube-left"></div>
          <div className="cube-face cube-top"></div>
          <div className="cube-face cube-bottom"></div>
        </div>
      </div>
    </General>
  );
};

export default Cube;
