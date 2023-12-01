import "./Container.css";
import "./Download.css";

const darkModeStyle = {
  backgroundColor: "black",
  border: "0.1rem solid #282c30",
  color: "white",
};

const lightModeStyle = {
  backgroundColor: "white",
  border: "0.1rem solid black",
};

export default function Download({ lightMode }) {
  return (
    <div className="Container">
      <div className="Download">
        <h1 id="download">Download</h1>
        <div className="downloads">
          <div className="steam">
            <img
              src="./src/assets/steam-mob.png"
              alt="steam logo image"
              href="https://store.steampowered.com/"
            />
            <div className="descDownload">
              <p>
                You can buy the game from the link below. The game is available
                for Meta Quest 2 on Steam.
              </p>
              <a
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
            <img src="./src/assets/mega.png" alt="mega logo image" />
            <div className="descDownload">
              <p>
                You can download a demo of the game from the link below. The
                game is available on MEGA.
              </p>
              <a href="https://mega.nz/" target="_blank" rel="noreferrer">
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
