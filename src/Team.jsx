import { useState } from "react";
import "./Container.css";
import "./Team.css";
import { motion } from "framer-motion";

import portrait1 from "./assets/Plamen.png";
import portrait2 from "./assets/Karahan.png";
import portrait3 from "./assets/portrait3.jpg";
import portrait4 from "./assets/Radu.png";
import portrait5 from "./assets/Jay.png";

export default function Team({ textEnter, textLeave }) {
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
    "Web Developer , Sound Designer",
    "Technical Artist",
    "Programmer",
    "3D Artist",
    "Programmer",
  ];
  return (
    <div>
      <div className="Team">
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Team
        </h1>
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
            >
              <div className="card-content">
                <div className="card-footer">
                  {index === 0 && <h2>Plamen Dochev</h2>}
                  {index === 1 && <h2>Karahan Karatay</h2>}
                  {index === 2 && <h2>Vitalie Barbacari</h2>}
                  {index === 3 && <h2>Radu Budeci</h2>}
                  {index === 4 && <h2>Jagunmolu Oke</h2>}
                  {index === expandedIndex && (
                    <p className="card-desc">{cardDescriptions[index]}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
