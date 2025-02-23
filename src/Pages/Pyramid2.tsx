import React, { useEffect, useState } from "react";
import General from "./General";
import { getScrollPercentage } from "../utils";

const Pyramid2: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const interpolate = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  return (
    <General scrollHeight={150} svgHeight={300} svgWidth={300}>
      <div className="pyramid2-container">
        <svg
          className="pyramid2 glow"
          viewBox="0 0 200 200"
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={interpolate(50, 112.5, scrollPercent)}
            y1={interpolate(50, 62.5, scrollPercent)}
            x2={interpolate(150, 112.5, scrollPercent)}
            y2={interpolate(50, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={interpolate(150, 112.5, scrollPercent)}
            y1={interpolate(50, 62.5, scrollPercent)}
            x2={150}
            y2={150}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={interpolate(150, 112.5, scrollPercent)}
            y1={interpolate(50, 62.5, scrollPercent)}
            x2={interpolate(175, 112.5, scrollPercent)}
            y2={interpolate(75, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={interpolate(50, 112.5, scrollPercent)}
            y1={interpolate(50, 62.5, scrollPercent)}
            x2={interpolate(75, 112.5, scrollPercent)}
            y2={interpolate(75, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={interpolate(75, 112.5, scrollPercent)}
            y1={interpolate(75, 62.5, scrollPercent)}
            x2={interpolate(175, 112.5, scrollPercent)}
            y2={interpolate(75, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={150}
            y1={150}
            x2={50}
            y2={150}
            strokeWidth="2"
            stroke="var(--primary)"
          />
          <line
            x1={50}
            y1={150}
            x2={interpolate(50, 112.5, scrollPercent)}
            y2={interpolate(50, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={interpolate(175, 112.5, scrollPercent)}
            y1={interpolate(75, 62.5, scrollPercent)}
            stroke="var(--primary)"
            x2={175}
            y2={175}
            strokeWidth="2"
          />
          <line
            x1={175}
            y1={175}
            x2={75}
            y2={175}
            strokeWidth="2"
            stroke="var(--primary)"
          />
          <line
            x1={75}
            y1={175}
            x2={interpolate(75, 112.5, scrollPercent)}
            y2={interpolate(75, 62.5, scrollPercent)}
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <line
            x1={150}
            y1={150}
            x2={175}
            y2={175}
            strokeWidth="2"
            stroke="var(--primary)"
          />
          <line
            x1={50}
            y1={150}
            x2={75}
            y2={175}
            strokeWidth="2"
            stroke="var(--primary)"
          />
        </svg>
      </div>
    </General>
  );
};

export default Pyramid2;
