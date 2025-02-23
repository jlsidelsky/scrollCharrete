import React, { useEffect, useState } from "react";
import General from "./General";
import { getScrollPercentage } from "../utils";

const Lisa = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={150} svgHeight={500} svgWidth={500}>
      <LissajousCurve tMax={scrollPercent * 6.3} />
    </General>
  );
};

interface LissajousProps {
  a?: number;
  b?: number;
  scale?: number;
  tMax?: number;
  points?: number;
}

const LissajousCurve: React.FC<LissajousProps> = ({
  a = 4,
  b = 5,
  scale = 50,
  tMax = 6.3,
  points = 500,
}) => {
  const generatePath = (): string => {
    let pathData = "";
    for (let i = 0; i <= points; i++) {
      const t = (i / points) * tMax;
      const x = scale * Math.sin(a * t);
      const y = scale * Math.sin(b * t);
      pathData += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return pathData;
  };

  return (
    <svg width="500" height="500" viewBox="-100 -100 200 200">
      <path
        d={generatePath()}
        stroke="var(--primary)"
        fill="none"
        strokeWidth="2"
        className="glow"
      />
    </svg>
  );
};

export default Lisa;
