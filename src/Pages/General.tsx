interface GeneralProps {
  scrollHeight: number;
  scrollWidth?: number;
  children: React.ReactNode;
  svgHeight: number;
  svgWidth: number;
}
const General = ({
  scrollHeight,
  scrollWidth = 100,
  svgHeight,
  svgWidth,
  children,
}: GeneralProps) => {
  return (
    <>
      <div
        className="scroll-container"
        style={{
          left: 0,
          width: `${scrollWidth}vw`,
          height: `${scrollHeight}vh`,
          transform: ` translate(${(scrollWidth - 100) / 2}vw, -${
            scrollHeight - 100
          }vh)`,
        }}
      ></div>
      <div
        className="svg-container"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: `${svgHeight}px`,
          width: ` ${svgWidth}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default General;
