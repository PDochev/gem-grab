import "./NavResponsive.css";

const light = {
  backgrloundColor: "white",
  color: "black",
};

const dark = {
  backgrloundColor: "black",
  color: "white",
};

export default function NavResponsive({
  isOpen,
  setIsOpen,
  lightMode,
  setLightMode,
}) {
  const toggle = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="container">
      <svg
        className="x"
        onClick={toggle}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        // className="w-6 h-6"
        width="32"
        height="32"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <nav className="navigation">
        <ul style={{ backgroundColor: lightMode ? "#fff" : "#000" }}>
          <li>
            <a
              style={{ color: lightMode ? "#000" : "#fff" }}
              onClick={toggle}
              href="/#team"
            >
              Team
            </a>
          </li>
          <li>
            <a
              style={{ color: lightMode ? "#000" : "#fff" }}
              onClick={toggle}
              href="/#details"
            >
              Details
            </a>
          </li>
          <li>
            <a
              style={{ color: lightMode ? "#000" : "#fff" }}
              onClick={toggle}
              href="/#download"
            >
              Download
            </a>
          </li>
          <li>
            <a
              style={{ color: lightMode ? "#000" : "#fff" }}
              onClick={toggle}
              href="/#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
