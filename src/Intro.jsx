import "./Intro.css";

import videoClip from "./assets/gem-grab-video.mp4";

export default function Intro({ lightMode }) {
  return (
    <div id="intro" className="Intro">
      <video autoPlay loop muted playsInline className="bg-clip">
        <source src={videoClip} type="video/mp4" />
      </video>

      <h1>Gem Grab</h1>
      <h2>Immersive Physical experience</h2>

      <a
        href="#team"
        style={{
          borderColor: lightMode ? "#000" : "#fff",
          color: lightMode ? "#000" : "#fff",
        }}
      >
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
      </a>
      {/* <img
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="glowingGem"
        src="./src/assets/GlowingGem.png"
      /> */}
    </div>
  );
}
