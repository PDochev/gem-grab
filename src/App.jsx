// import "./App.css";

import Intro from "./Intro";
import Team from "./Team";
import Details from "./Details";
import "./Container.css";
import "./Team.css";
// import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Download from "./Download";
import Contact from "./Contact";
import NavResponsive from "./NavResponsive";
import Navigation from "./Navigation";

function App() {
  // const [mousePostion, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // const [cursorVariant, setCursorVariant] = useState("default");
  const [lightMode, setLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lightModeStyle = {
    background: lightMode ? "#fff" : "#000",
    color: lightMode ? "#000" : "#fff",
  };

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePostion.x - 16,
  //     y: mousePostion.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePostion.x - 75,
  //     y: mousePostion.y - 75,
  //     backgroundColor: "white",
  //     mixBlendMode: "difference",
  //   },
  // };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <div style={lightModeStyle}>
      <motion.div
        style={{ backgroundColor: lightMode ? "#000" : "#fff" }}
        className="cursor"
        // variants={variants}
        // animate={cursorVariant}
      />
      {isOpen ? (
        <NavResponsive key="foo" isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <Navigation
            key="foo2"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <Intro lightMode={lightMode} />
          <Team />
          {/* <Details /> */}
          <Download lightMode={lightMode} />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
