import { useState, useEffect } from "react";
import { getScrollPercentage } from "../utils";

import "./Grid.css";
const n = 24;

const Grid = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-container"
        style={{
          left: 0,
          width: `${100}vw`,
          height: `${200}vh`,
          transform: ` translate(-${100 - 100}vw, -${200 - 100}vh)`,
        }}
      ></div>
      <div
        className="grid"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: `100vh`,
          width: ` 100vw`,
        }}
      >
        {[...Array(n)].map((_, index) => {
          const y = (100 / (n + 1)) * (index + 1);
          return (
            <>
              <div
                key={`${index}-x`}
                className="grid-line"
                style={{
                  position: "absolute",
                  top: `${y}vh`,
                  left: 0,
                  width: `${100 * scrollPercent}vw`,
                  height: 0,
                }}
              ></div>
              <div
                key={`${index}-y`}
                className="grid-line"
                style={{
                  position: "absolute",
                  left: `${y}vw`,
                  top: 0,
                  height: `${100 * scrollPercent}vh`,
                  width: 0,
                }}
              ></div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Grid;
