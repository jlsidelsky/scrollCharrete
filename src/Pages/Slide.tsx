const Slide = () => {
  return (
    <>
      <div
        className="scroll-container"
        style={{
          left: 0,
          width: "100vw",
          height: "200vh",
          transform: "translate(0, -50vh)",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Front />
      </div>
      <div
        className={`svg-container`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: 300,
          width: 300,
        }}
      >
        <div className="pyramid2-container">
          <svg
            viewBox="0 0 200 200"
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            className="glow"
          >
            <line
              x1="50"
              y1="50"
              x2="150"
              y2="50"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="150"
              y1="50"
              x2="150"
              y2="150"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="150"
              y1="150"
              x2="50"
              y2="150"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="50"
              y1="150"
              x2="50"
              y2="50"
              stroke="var(--primary)"
              stroke-width="2"
            />

            <line
              x1="50"
              y1="50"
              x2="75"
              y2="75"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="150"
              y1="50"
              x2="175"
              y2="75"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="150"
              y1="150"
              x2="175"
              y2="175"
              stroke="var(--primary)"
              stroke-width="2"
            />
            <line
              x1="50"
              y1="150"
              x2="75"
              y2="175"
              stroke="var(--primary)"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const Front = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "translate(0, 150px)" }}
      className="glow"
    >
      <line
        x1="75"
        y1="75"
        x2="175"
        y2="75"
        stroke="var(--primary)"
        stroke-width="2"
      />
      <line
        x1="175"
        y1="75"
        x2="175"
        y2="175"
        stroke="var(--primary)"
        stroke-width="2"
      />
      <line
        x1="175"
        y1="175"
        x2="75"
        y2="175"
        stroke="var(--primary)"
        stroke-width="2"
      />
      <line
        x1="75"
        y1="175"
        x2="75"
        y2="75"
        stroke="var(--primary)"
        stroke-width="2"
      />
    </svg>
  );
};

export default Slide;
