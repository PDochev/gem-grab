import "./Container.css";
import "./Details.css";

export default function Details() {
  return (
   
      <div className="Details">
        <h1 id="details">Details</h1>
        <div className="descDetails">
          <p>
            You are an archaeologist who has discovered a hidden tomb in Egypt
            that contains a mysterious artifact. You must navigate through the
            tomb’s traps and puzzles, switching between three different paths
            and collecting or avoiding various objects along the way. The game
            uses VR to create a realistic and immersive experience of exploring
            the temple environment. You will have to move your body to dodge
            obstacles, solve riddles, and interact with the environment. The
            game will challenge your reflexes, logic, and curiosity as you
            uncover the secrets of the lost artifact.
          </p>
          {/* <img src="./src/assets/tomb.png" /> */}
        </div>
      </div>
 
  );
}
