import { useEffect, useState } from "react";

import { getScrollPercentage } from "../utils";

const Trail: React.FC = () => {
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
          width: "100vw",
          height: "300vh",
          transform: "translate(0, -100vh)",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      ></div>
      <div
        className="svg-container"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: 500,
          width: "100vw",
        }}
      >
        <SineWaveTrail offset={scrollPercent * 1000} />
      </div>
    </>
  );
};

interface SineWaveTrailProps {
  height?: number;
  amplitude?: number;
  frequency?: number;
  offset?: number;
}

const SineWaveTrail: React.FC<SineWaveTrailProps> = ({
  height = 400,
  amplitude = 150,
  frequency = 0.0025,
  offset = 0,
}) => {
  const width = window.innerWidth;
  const trailLength = 100;

  const points: string[] = [];
  const opacities: number[] = [];
  for (let i = 0; i < trailLength; i++) {
    const x = width / 2 - (trailLength - i) * 5;
    const y =
      height / 2 + amplitude * Math.sin(frequency * (x + offset) * 2 * Math.PI);
    points.push(`${x},${y}`);
    opacities.push(i / trailLength);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="glow"
    >
      {points.map((point, index) => {
        if (index === 0) return null;
        const [x1, y1] = points[index - 1].split(",").map(Number);
        const [x2, y2] = point.split(",").map(Number);
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity={opacities[index]}
          />
        );
      })}
    </svg>
  );
};

export default Trail;
