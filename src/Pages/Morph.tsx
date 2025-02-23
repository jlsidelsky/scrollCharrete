import React, { useEffect, useState } from "react";
import "./Morph.css";
import General from "./General";
import { getScrollPercentage } from "../utils";

const Morph: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={200} svgHeight={150} svgWidth={150}>
      <div className="morph-scene">
        <div className="morph">
          <div
            className="face"
            style={{
              width: `${150}px`,
              height: `${150}px`,
              transform: `translateZ(${75 * (1 + scrollPercent)}px)`,
            }}
          ></div>
          <div
            className="face"
            style={{
              width: `${150}px`,
              height: `${150}px`,
              transform: `translateZ(${-75 * (1 + scrollPercent)}px)`,
            }}
          ></div>
          <div
            className="face"
            style={{
              height: `${150 * (1 + scrollPercent)}px`,
              width: `${150}px`,
              transform: `rotateX(90deg) translateZ(${
                75 * (1 + scrollPercent)
              }px)`,
            }}
          ></div>
          <div
            className="face"
            style={{
              width: `${150 * (1 + scrollPercent)}px`,

              height: `${150}px`,
              transform: `rotateY(90deg) translateZ(${
                75 * (1 - scrollPercent)
              }px)`,
            }}
          ></div>
          <div
            className="face"
            style={{
              width: `${150 * (1 + scrollPercent)}px`,
              height: `${150}px`,
              transform: `rotateY(90deg) translateZ(${
                -75 * (1 + scrollPercent)
              }px)`,
            }}
          ></div>

          <div
            className="face"
            style={{
              height: `${150 * (1 + scrollPercent)}px`,
              width: `${150}px`,
              transform: `rotateX(90deg) translateZ(${
                75 * (-1 + scrollPercent)
              }px)`,
            }}
          ></div>
        </div>
      </div>
    </General>
  );
};

export default Morph;
