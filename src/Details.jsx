import "./Container.css";
import "./Details.css";

export default function Details() {
  return (
    <div className="Details">
      <h1 id="details">Details</h1>
      <div className="details">
        <div className="det-img">
          <img src="./src/assets/det1.png" />
        </div>
        <div className="DetailText">
          <h2>SEASON 12</h2>
          <p>
            This Season, a mysterious hacktivist named Zero-Day has left the
            shadows, taking control of Neo Tokyo Arena. Find your place in a
            world of digital decay with Rocket Pass Premium and earn dozens of
            new items, including the Porsche 911 Turbo.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="DetailText">
          <h2>SEASON 12</h2>
          <p>
            This Season, a mysterious hacktivist named Zero-Day has left the
            shadows, taking control of Neo Tokyo Arena. Find your place in a
            world of digital decay with Rocket Pass Premium and earn dozens of
            new items, including the Porsche 911 Turbo.
          </p>
        </div>
        <div className="det-img">
          <img src="./src/assets/det2.jpeg" />
        </div>
      </div>
      <div className="details">
        <div className="det-img">
          <img src="./src/assets/det2.jpg" />
        </div>
        <div className="DetailText">
          <h2>SEASON 12</h2>
          <p>
            This Season, a mysterious hacktivist named Zero-Day has left the
            shadows, taking control of Neo Tokyo Arena. Find your place in a
            world of digital decay with Rocket Pass Premium and earn dozens of
            new items, including the Porsche 911 Turbo.
          </p>
        </div>
      </div>
    </div>
  );
}
