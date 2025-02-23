import { useState, useEffect } from "react";
import { getScrollPercentage } from "../utils";
import General from "./General";
const size = 200;
const Square = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <General scrollHeight={150} svgHeight={size * 2} svgWidth={size * 2}>
      <CurvedSquare curveAmount={scrollPercent} size={size} />
    </General>
  );
};

interface CurvedSquareProps {
  curveAmount?: number;
  size?: number;
}
const CurvedSquare: React.FC<CurvedSquareProps> = ({
  curveAmount = 0,
  size = 100,
}) => {
  const control = size * curveAmount * 0.5;
  const halfSize = size / 2;

  const pathData = `
     M ${-halfSize},0 
     C ${-halfSize},${-control} ${-control},${-halfSize} 0,${-halfSize} 
     C ${control},${-halfSize} ${halfSize},${-control} ${halfSize},0 
     C ${halfSize},${control} ${control},${halfSize} 0,${halfSize} 
     C ${-control},${halfSize} ${-halfSize},${control} ${-halfSize},0 
     Z
   `;

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`-${size} -${size} ${size * 2} ${size * 2}`}
    >
      <path
        d={pathData}
        fill="none"
        stroke="var(--primary)"
        stroke-width="4"
        className="glow"
      />
    </svg>
  );
};

export default Square;
