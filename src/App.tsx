import { useState } from "react";

import "./App.css";

import Cube from "./Pages/Cube";
import Zoom from "./Pages/Zoom";
import Explode from "./Pages/Explode";
import "./Colors.css";
import Depth from "./Pages/Depth";
import Morph from "./Pages/Morph";

import Morph4 from "./Pages/Morph4";
import Pyramid from "./Pages/Pyramid";
import Nav from "./Nav";
import Sphere from "./Pages/Sphere";
import Pyramid2 from "./Pages/Pyramid2";
import Grid from "./Pages/Grid";
import Slide from "./Pages/Slide";
import Sine from "./Pages/Sine";
import Sine2 from "./Pages/Sine2";
import Sine3 from "./Pages/Sine3";
import Sine4 from "./Pages/Sine4";
import Polar from "./Pages/Polar";
import Polar2 from "./Pages/Polar2";
import Lisa from "./Pages/Lisa";
import Square from "./Pages/Square";
import Sphere2 from "./Pages/Sphere2";
import Pyramid3 from "./Pages/Pyramid3";

import SquareWave from "./Pages/SquareWave";
import Trail from "./Pages/Trail";
import Parametric from "./Pages/Parametric";
import Parametric2 from "./Pages/Parametric2";

const pages = [
  <Cube />,
  <Zoom />,
  <Explode />,
  <Depth />,
  <Morph />,
  <Morph4 />,
  <Pyramid />,
  <Sphere />,
  <Pyramid2 />,
  <Grid />,
  <Slide />,
  <Sine />,
  <Sine2 />,
  <Sine3 />,
  <Sine4 />,
  <Polar />,
  <Polar2 />,
  <Lisa />,
  <Square />,
  <Sphere2 />,
  <Pyramid3 />,
  <SquareWave />,
  <Trail />,
  <Parametric />,
  <Parametric2 />,
];

const formatPage = (a: number, b: number): string => {
  const formatNumber = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;
  return `${formatNumber(a)}/${formatNumber(b)}`;
};

function App() {
  const [page, setPage] = useState(0);

  const increment = () => {
    window.scrollTo(0, 0);

    setPage((page + 1) % pages.length);
  };
  const decrement = () => {
    window.scrollTo(0, 0);

    setPage((page - 1 + pages.length) % pages.length);
  };
  return (
    <>
      <Nav increment={increment} decrement={decrement}></Nav>
      <p
        style={{
          position: "fixed",
          left: 24,
          bottom: 12,
          margin: 0,
          color: "var(--primary)",
          fontFamily: "monospace",
        }}
      >
        {formatPage(page + 1, pages.length)}
      </p>
      {pages[page]}
    </>
  );
}

export default App;
