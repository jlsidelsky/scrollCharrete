interface NavProps {
  increment: () => void;
  decrement: () => void;
}

const Nav: React.FC<NavProps> = ({ increment, decrement }) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        width: "100vw",
        top: "50%",
        left: "0%",
        transform: "translate(0%, -50%)",
        zIndex: 1,
      }}
    >
      <button
        style={{
          backgroundColor: "transparent",
          color: "var(--primary)",
          fontSize: "24px",
        }}
        onClick={decrement}
      >
        {"<"}
      </button>
      <button
        style={{
          backgroundColor: "transparent",
          color: "var(--primary)",
          fontSize: "24px",
        }}
        onClick={increment}
      >
        {">"}
      </button>
    </div>
  );
};
export default Nav;
