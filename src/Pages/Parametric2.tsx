import React, { useEffect, useState } from "react";
import General from "./General";
import { getScrollPercentage } from "../utils";
const max = 12;
const Parametric = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setNum(Math.floor(getScrollPercentage() * max));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <General scrollHeight={200} svgHeight={500} svgWidth={500}>
      <ParametricShape num={num} />
    </General>
  );
};

interface ParametricShapeProps {
  num?: number;
  s?: number;
  resolution?: number;
  width?: number;
  height?: number;
}

const ParametricShape: React.FC<ParametricShapeProps> = ({
  num = 1,
  resolution = 100,
  width = 500,
  height = 500,
}) => {
  const generatePath = (s: number): string => {
    const points = [];
    for (let i = 0; i <= resolution; i++) {
      const x = -1 + (2 * i) / resolution;
      const y = Math.pow(1 - Math.abs(x) ** s, 1 / s);
      points.push(`${(x + 1) * (width / 2)},${(1 - y) * (height / 2)}`);
    }

    const mirroredPoints = points.map((p) => {
      const [x, y] = p.split(",").map(Number);
      return `${x},${height - y}`;
    });

    return `M${points.join(" L")} L${mirroredPoints.reverse().join(" L")} Z`;
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
      className="glow2"
    >
      {[...Array(num)].map((_, index) => {
        const min = 0.2;
        const max = 0.9;
        return (
          <path
            d={generatePath(((max - min) / num) * index + min)}
            stroke="var(--primary)"
            fill="none"
            strokeWidth="4"
          />
        );
      })}
    </svg>
  );
};

export default Parametric;
