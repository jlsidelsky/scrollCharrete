import React, { useEffect, useState } from "react";
import "./Zoom.css";
import General from "./General";

const Zoom: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [perspective, setPerspective] = useState(500);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.002;
      const newPerspective = 1000 - scrollY * 1.5;
      setScale(newScale > 3 ? 3 : newScale);
      setPerspective(newPerspective < 275 ? 275 : newPerspective);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={150} svgHeight={150} svgWidth={150}>
      <div className="zoom">
        <div
          className="zoom-cube"
          style={{
            transform: `scale(${scale})`,
            perspective: `${perspective}px`,
          }}
        >
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <div
        className="zoom-scene"
        style={{ perspective: `${perspective}px`, height: "150vh" }}
      ></div>
    </General>
  );
};

export default Zoom;
