import { useEffect, useState } from "react";
import General from "./General";
import "./Pyramid.css";

const baseSize = 300;
const numRings = 75;
const height = 400;
const Pyramid3 = () => {
  const getScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return scrollTop / docHeight;
  };

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={200} svgHeight={height} svgWidth={100}>
      <div
        className="pyramid"
        style={{
          height: "100%",
          width: "100%",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: `rotateX(${160}deg) rotateY(35deg)`,
        }}
      >
        {[...Array(Math.floor(numRings * scrollPercent))].map((_, index) => {
          const scaleFactor = 1 - index / Math.floor(numRings * scrollPercent);
          const size = baseSize * scaleFactor;
          const yOffset =
            (height / Math.floor(numRings * scrollPercent)) * index;

          return (
            <div
              key={index}
              className="pyramid3-layer"
              style={{
                position: "absolute",
                height: `${size}px`,
                width: `${size}px`,
                transform: `rotateX(-90deg) translateZ(${yOffset}px) translateX(${
                  -size / 2
                }px)`,
                border: "2px solid var(--primary)",
              }}
            ></div>
          );
        })}
      </div>
    </General>
  );
};

export default Pyramid3;
