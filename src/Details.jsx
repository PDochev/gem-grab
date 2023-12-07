import "./Container.css";
import "./Details.css";

export default function Details() {
  return (
    <div className="Details">
      <h1 id="details">Details</h1>
      <div className="details">
        <div className="det-img">
          <img src="./src/assets/det3.jpeg" />
        </div>
        <div className="DetailText">
          <h2>Ready for heart racing adventure in VR </h2>
          <p>
            What if exercing and gaming can be done together, wait no further,
            we introduce to you gem grab a fast paste, thrilling, endless runner
            game, where it is up to you gem grabbers, to grab as many gems as
            you can.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="DetailText">
          <h2>How to play</h2>
          <p>
            You can try our free demo or buy our game to experiance levels and
            fun all whilst exerczing.
          </p>
        </div>
        <div className="det-img">
          <img src="./src/assets/det2.jpeg" />
        </div>
      </div>
      <div className="details">
        <div className="det-img">
          <img src="./src/assets/det1.png" />
        </div>
        <div className="DetailText">
          <h2>Grab your pickaxe</h2>
          <p>Set new high scores, whilst excersizing</p>
        </div>
      </div>
    </div>
  );
}
