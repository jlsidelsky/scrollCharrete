import { useEffect, useState } from "react";

import { getScrollPercentage } from "../utils";

const Sine4 = () => {
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
        <SineWave offset={scrollPercent * 1000} />
      </div>
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
        <SineWave offset={(1 - scrollPercent) * 1000} />
      </div>
    </>
  );
};

const SineWave = ({
  height = 400,
  amplitude = 150,
  frequency = 0.0015,
  offset = 0,
}) => {
  const width = window.innerWidth;
  const points = [];
  for (let x = 0; x <= width; x++) {
    const y =
      height / 2 + amplitude * Math.sin(frequency * (x + offset) * 2 * Math.PI);
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

export default Sine4;
