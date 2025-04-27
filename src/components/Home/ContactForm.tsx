import { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "c4a3327f-2df0-43bf-a20d-51082854b5be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const inputFieldStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary";

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <h1 className="heading text-center">Contact Us!</h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          required
          className={inputFieldStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          required
          className={inputFieldStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          autoComplete="off"
          required
          rows={4}
          className={inputFieldStyle}
        ></textarea>

        <button
          type="submit"
          className={`w-full button
           `}
        >
          {result == "" ? "Submit Form" : result}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
