import "./Intro.css";

export default function Intro({ textEnter, textLeave, lightMode }) {
  return (
    <div className="Intro">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Gem Grab
      </h1>
      <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Immersive Physical experience
      </h2>

      <div style={{ borderColor: lightMode ? "#000" : "#fff" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </div>
      {/* <img
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="glowingGem"
        src="./src/assets/GlowingGem.png"
      /> */}
    </div>
  );
}
