import "./Container.css";
import "./Details.css";

import detailsPic1 from "./assets/det3.jpeg";
import detailsPic2 from "./assets/det2.jpeg";
import detailsPic3 from "./assets/det1.png";

export default function Details() {
  return (
    <div className="Details">
      <h1 id="details">Details</h1>
      <div className="details">
        <div className="det-img">
          <img loading="lazy" src={detailsPic1} />
        </div>
        <div className="DetailText">
          <h2>Ready for heart racing adventure in VR? </h2>
          <p>
            What if exercing and gaming can be done together? Wait no further!
            We introduce to you gem grab, a fast pace, thrilling, endless runner
            game, where it is up to you gem grabbers, to grab as many gems as
            you can.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="DetailText">
          <h2>How to play</h2>
          <p>
            You can try our free demo to play one level, or buy our game to
            experiance endless levels and fun all whilst exercising.
          </p>
        </div>
        <div className="det-img">
          <img loading="lazy" src={detailsPic2} />
        </div>
      </div>
      <div className="details">
        <div className="det-img">
          <img loading="lazy" src={detailsPic3} />
        </div>
        <div className="DetailText">
          <h2>What are you waiting for?</h2>
          <p>Grab your pickaxe, set new high scores, whilst exercising.</p>
        </div>
      </div>
    </div>
  );
}
