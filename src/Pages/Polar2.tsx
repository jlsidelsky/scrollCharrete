import { useEffect, useState } from "react";
import General from "./General";
import { getScrollPercentage } from "../utils";

const Polar2 = () => {
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
      <PolarGraph limit={10 * scrollPercent} />
    </General>
  );
};

const PolarGraph = ({ c = 4, b = 1.6, points = 500, limit = 12 }) => {
  const generatePolarPoints = (multiplier: number, factor: number) => {
    let pathData = "";
    for (let i = 0; i <= points; i++) {
      const theta = (i / points) * limit * Math.PI;
      const r = multiplier * Math.cos(factor * theta);
      const x = r * Math.cos(theta) * 50;
      const y = r * Math.sin(theta) * 50;
      pathData += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return pathData;
  };

  return (
    <svg width="500" height="500" viewBox="-250 -250 500 500" className="glow">
      <path
        d={generatePolarPoints(c, b)}
        stroke="var(--primary)"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Polar2;
