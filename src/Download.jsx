import "./Container.css";
import "./Download.css";

import steamPic from "./assets/steam-mob.png";
import megaPic from "./assets/mega.png";

const darkModeStyle = {
  backgroundColor: "black",
  border: "0.2rem solid #282c30",
  color: "white",
};

const lightModeStyle = {
  backgroundColor: "white",
  border: "0.2rem solid black",
};

export default function Download({ lightMode }) {
  return (
    <div className="Container">
      <div className="Download">
        <h1 id="download">Download</h1>
        <div className="downloads">
          <div className="steam">
            <img loading="lazy" src={steamPic} alt="steam logo image" />
            <div className="descDownload">
              <p>
                You can buy the game from the link below. The game is available
                for Meta Quest 2 on Steam.
              </p>
              <a
                aria-label="Download"
                href="https://store.steampowered.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button style={lightMode ? lightModeStyle : darkModeStyle}>
                  Download
                </button>
              </a>
            </div>
          </div>
          <div className="mega">
            <img loading="lazy" src={megaPic} alt="mega logo image" />
            <div className="descDownload">
              <p>
                You can download a demo of the game from the link below. The
                game is available on MEGA.
              </p>
              <a
                aria-label="Download"
                href="https://mega.nz/"
                target="_blank"
                rel="noreferrer"
              >
                <button style={lightMode ? lightModeStyle : darkModeStyle}>
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
