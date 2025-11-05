import React from "react";

export default function Contact() {
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
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-3 rounded-md outline-none text-gray-900"
            />
            <textarea
              placeholder="Your Message*"
              rows="4"
              className="p-3 rounded-md outline-none text-gray-900 resize-none"
            />
            <button
              type="submit"
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
