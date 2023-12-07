import "./Contact.css";
import "./Download.css";

import { useState } from "react";
import { sendCustomEmail } from "./email";

export default function Contact() {
  const [details, setDetails] = useState({
    from_email: "",
    message: "",
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSubmition = (e) => {
    if (!details.from_email || !details.message) return;
    e.preventDefault();
    sendCustomEmail(details);
    alert("Your message has been sent!");
    setDetails({
      from_email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="Contact">
        <h1 id="contact">Contact</h1>
        <form onSubmit={handleSubmition}>
          <label htmlFor="email">Email adress</label>
          <input
            name="from_email"
            value={details.from_email}
            type="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Enter your email"
            id="email"
            onChange={handleDetailsChange}
            // required
          />
          <label htmlFor="text-area">How can we help?</label>
          <textarea
            name="message"
            value={details.message}
            id="text-area"
            placeholder="Message"
            onChange={handleDetailsChange}
            // required
          ></textarea>

          <button disabled={!details.from_email || !details.message}>
            Submit
          </button>
        </form>
      </div>
      <footer>
        <p>Gem Grab &#174;</p>
        <p>© 2023 - All rights reserved</p>
      </footer>
    </div>
  );
}
