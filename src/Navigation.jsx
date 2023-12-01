import "./Navigation.css";
import "./Container.css";

import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";

// export default function HomePage({
//   children,
//   setLightMode,
//   lightMode,
//   isOpen,
//   setIsOpen,
// }) {
//   return (
//     <div>
//       <Navigation
//         lightMode={lightMode}
//         setLightMode={setLightMode}
//         isOpen={isOpen}
//         toggleMenu={toggleMenu}
//       />
//       <div>{children}</div>
//     </div>
//   );
// }

export default function Navigation({
  isOpen,
  setIsOpen,
  setLightMode,
  lightMode,
}) {
  const handleLightMode = () => {
    setLightMode((light) => !light);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="Navigation">
      <div>
        <a>
          <img src="./src/assets/diamond.png" />
          <a style={{ color: lightMode ? "#000" : "#fff" }} href="#intro">
            Gem Grab
          </a>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a style={{ color: lightMode ? "#000" : "#fff" }} href="#team">
              Team
            </a>
          </li>
          <li>
            <a style={{ color: lightMode ? "#000" : "#fff" }} href="#details">
              Details
            </a>
          </li>
          <li>
            <a style={{ color: lightMode ? "#000" : "#fff" }} href="#download">
              Download
            </a>
          </li>
          <li>
            <a style={{ color: lightMode ? "#000" : "#fff" }} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="trigger">
        {!isOpen && (
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
