import "./Navigation.css";
import "./Container.css";
import { useState } from "react";

import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";

export default function HomePage({ children, setLightMode, lightMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div>
      <Navigation
        lightMode={lightMode}
        setLightMode={setLightMode}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <div className="Container">{children}</div>
    </div>
  );
}

function Navigation({ isOpen, toggleMenu, setLightMode, lightMode }) {
  const handleLightMode = () => {
    setLightMode((light) => !light);
  };

  return (
    <div className="Navigation">
      <div>
        <a>
          <img src="./src/assets/diamond.png" />
          <span>Gem Grab</span>
        </a>
      </div>
      <nav>
        <ul className={isOpen ? "isOpen" : ""}>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Details</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="trigger">
        {isOpen ? (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width="32"
            height="32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width="32"
            height="32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        <img src={lightMode ? moon : sun} onClick={handleLightMode} />
      </div>
    </div>
  );
}
