import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check the Error logic
    const errorCheck = {
      name:
        name.trim().length < 2 ? "Name must be grater than 2 character" : "",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email",
      message: message.length < 20 ? "password must be 20 character" : "",
    };

    setError(errorCheck);

    const isValid = Object.values(errorCheck).every((err) => err === "");

    if (isValid) {
      alert(
        `Form submitted succesfully : Name:${name} | Email:${email} | message:${message}`
      );

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="bg-[#0A0F2C] text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between  rounded-2xl p-8 md:p-12">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/Images/contact.png" // replace with your image path
            alt="Contact illustration"
            className="w-[80%] max-w-[400px] h-auto"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            Ready to Work Together <br /> In New Projects?
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-3 rounded-md outline-none text-gray-900"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-3 rounded-md outline-none text-gray-900"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              placeholder="Your Message*"
              rows="4"
              className="p-3 rounded-md outline-none text-gray-900 resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
