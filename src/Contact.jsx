import "./Contact.css";
import "./Download.css";

export default function Contact() {
  return (
    <div className="Container">
      <div className="Contact">
        <h1>Contact</h1>
        <form>
          <label htmlFor="email">Email adress</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
          />
          <label htmlFor="text-area">How can we help?</label>
          <textarea id="text-area" placeholder="Message" required></textarea>
          <button>Submit</button>
        </form>
      </div>
      <footer>
        <p>Gem Grab &#174;</p>
        <p>© 2023 - All rights reserved</p>
      </footer>
    </div>
  );
}
