import { useEffect, useState } from "react";
import General from "./General";
import "./Sphere.css";

const radius = 150;
const numRings = 9;
const Sphere = () => {
  const getScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return scrollTop / docHeight;
  };

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <General scrollHeight={150} svgHeight={150} svgWidth={150}>
      <div className="sphere-container">
        <div
          className="sphere"
          style={{
            height: "100%",
            width: "100%",
            transformOrigin: "center",
            transform: ` rotateX(${120 + scrollPercent * 180}deg)`,
          }}
        >
          {[...Array(numRings)].map((_, index) => {
            let i = index;
            if (index === 0) {
              i = 0.1;
            } else if (index === numRings - 1) {
              i = numRings - 1 - 0.1;
            }
            const y = radius - ((2 * radius) / (numRings - 1)) * i;

            const x = Math.sqrt(radius ** 2 - y ** 2);
            return (
              <>
                <div
                  key={`${index}-a`}
                  className="sphere-ring"
                  style={{
                    height: `${2 * x}px`,
                    width: `${2 * x}px`,
                    transform: `translateZ(${y}px) translateX(${-x}px) translateY(${-x}px)`,
                  }}
                ></div>
              </>
            );
          })}
        </div>
        <div
          className="sphere"
          style={{
            height: "100%",
            width: "100%",
            transformOrigin: "center",
            transform: ` rotateX(${
              120 + scrollPercent * 180
            }deg) rotateY(90deg)`,
          }}
        >
          {[...Array(numRings)].map((_, index) => {
            let i = index;
            if (index === 0) {
              i = 0.1;
            } else if (index === numRings - 1) {
              i = numRings - 1 - 0.1;
            }
            const y = radius - ((2 * radius) / (numRings - 1)) * i;

            const x = Math.sqrt(radius ** 2 - y ** 2);
            return (
              <>
                <div
                  key={`${index}-`}
                  className="sphere-ring"
                  style={{
                    height: `${2 * x}px`,
                    width: `${2 * x}px`,
                    transform: `translateZ(${y}px) translateX(${-x}px) translateY(${-x}px)`,
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </General>
  );
};
export default Sphere;
