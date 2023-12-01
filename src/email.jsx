import emailjs from "@emailjs/browser";
emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);

const sendCustomEmail = (details) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_email: details.from_email,
        message: details.message,
      },
      import.meta.env.VITE_EMAIL_USER_ID
    )
    .then((res) => {
      console.log("Email sent successfully:", res);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
    });
};

export { sendCustomEmail };
