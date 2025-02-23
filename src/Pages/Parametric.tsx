import React, { useEffect, useState } from "react";
import General from "./General";
import { getScrollPercentage } from "../utils";

const Parametric = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <General scrollHeight={200} svgHeight={500} svgWidth={500}>
      <ParametricShape s={scrollPercent * 5} />
    </General>
  );
};

interface ParametricShapeProps {
  s?: number;
  resolution?: number;
  width?: number;
  height?: number;
}

const ParametricShape: React.FC<ParametricShapeProps> = ({
  s = 0.2,
  resolution = 100,
  width = 500,
  height = 500,
}) => {
  const generatePath = (): string => {
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
      className="glow"
    >
      <path
        d={generatePath()}
        stroke="var(--primary)"
        fill="none"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Parametric;
