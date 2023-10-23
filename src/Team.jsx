import { useState } from "react";
import "./Container.css";
import "./Team.css";
import { motion } from "framer-motion";

import portrait1 from "./assets/portrait1.jpg";
import portrait2 from "./assets/portrait2.jpg";
import portrait3 from "./assets/portrait3.jpg";
import portrait4 from "./assets/portrait4.jpg";
import portrait5 from "./assets/portrait5.jpg";

export default function Team() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "40rem",
    },
    collapsed: {
      width: "20rem",
    },
  };

  const cardImages = [portrait1, portrait2, portrait3, portrait4, portrait5];
  const cardDescriptions = [
    "This is a Description",
    "This is a Description",
    "This is a Description",
    "This is a Description",
    "This is a Description",
  ];
  return (
    <div className="Container">
      <div className="Team">
        <h1>Team</h1>
        <div className="Cards">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`cards ${index === expandedIndex ? "expanded" : ""}`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
