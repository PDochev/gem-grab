// import "./App.css";
import HomePage from "./HomePage";
import Intro from "./Intro";
import Team from "./Team";
import "./Container.css";
import "./Team.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [mousePostion, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePostion.x - 16,
      y: mousePostion.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePostion.x - 75,
      y: mousePostion.y - 75,
      backgroundColor: "blue",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <HomePage>
        <Intro textEnter={textEnter} textLeave={textLeave} />
      </HomePage>
      <Team />
    </div>
  );
}


export default App;
