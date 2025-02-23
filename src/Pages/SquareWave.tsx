import { useEffect, useState } from "react";

import { getScrollPercentage } from "../utils";

const SquareWave = () => {
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
        <SquareWaveSVG offset={scrollPercent * 1000} />
      </div>
    </>
  );
};

const SquareWaveSVG = ({
  height = 400,
  amplitude = 150,
  frequency = 0.005,
  offset = 0,
}) => {
  const width = window.innerWidth;
  const period = 1 / frequency;

  const points = [];
  for (let x = 0; x <= width; x++) {
    const isHigh = Math.floor((x + offset) / period) % 2 === 0;
    const y = isHigh ? height / 2 - amplitude : height / 2 + amplitude;
    points.push(`${x},${y}`);
  }

  const pathData = `M${points.join(" L")}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="glow"
    >
      <path d={pathData} stroke="var(--primary)" fill="none" strokeWidth="4" />
    </svg>
  );
};

export default SquareWave;
