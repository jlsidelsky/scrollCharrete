import React, { useEffect, useState } from "react";
import "./Pyramid2.css";
import General from "./General";

const triangle = (size: number, className: string) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon
      points="100,20 180,180 20,180"
      strokeWidth="3"
      stroke="var(--primary)"
      fill="transparent"
    />
  </svg>
);

const Pyramid: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newR = 1 + scrollY * 1;
      setRotation(newR);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const size = 219;
  return (
    <General scrollHeight={150} svgHeight={500} svgWidth={500}>
      <div className="pyramid-scene">
        <div
          className="pyramid"
          style={{
            transform: `rotateX(-20deg) rotateY(${rotation}deg) `,
          }}
        >
          {triangle(size, "face back")}
          {triangle(size, "face front")}
          {triangle(size, "face left")}
          {triangle(size, "face right")}
        </div>
      </div>
    </General>
  );
};

export default Pyramid;
