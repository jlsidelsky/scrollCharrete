import React, { useEffect, useState } from "react";
import "./Depth.css";
import General from "./General";

const Depth: React.FC = () => {
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
    <General scrollHeight={150} svgHeight={150} svgWidth={150}>
      <div className="depth-container">
        <div
          className="depth"
          style={{
            height: "100%",
            width: "100%",
            transformOrigin: "center",
            transform: `rotateY(${scrollPercent * 180}deg) rotateX(${
              scrollPercent * 180
            }deg)`,
          }}
        >
          {[...Array(7)].map((_, index) => {
            return (
              <div
                key={index}
                className="depth-face"
                style={{
                  transform: `translateZ(${index * 50}px) `,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </General>
  );
};

export default Depth;
