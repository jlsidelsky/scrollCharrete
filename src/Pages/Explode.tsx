import React, { useEffect, useState } from "react";
import "./Explode.css";
import General from "./General";

const Explode: React.FC = () => {
  const [explode, setExplode] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const explosionFactor = Math.min(scrollY * 0.2, 100);
      setExplode(explosionFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={150} svgHeight={150} svgWidth={150}>
      <div className="explode">
        <div
          className="face front"
          style={{ transform: `translateZ(${75 + explode}px)` }}
        ></div>
        <div
          className="face back"
          style={{
            transform: `rotateY(180deg) translateZ(${75 + explode}px)`,
          }}
        ></div>
        <div
          className="face right"
          style={{
            transform: `rotateY(90deg) translateZ(${75 + explode}px)`,
          }}
        ></div>
        <div
          className="face left"
          style={{
            transform: `rotateY(-90deg) translateZ(${75 + explode}px)`,
          }}
        ></div>
        <div
          className="face top"
          style={{
            transform: `rotateX(90deg) translateZ(${75 + explode}px)`,
          }}
        ></div>
        <div
          className="face bottom"
          style={{
            transform: `rotateX(-90deg) translateZ(${75 + explode}px)`,
          }}
        ></div>
      </div>
    </General>
  );
};

export default Explode;
