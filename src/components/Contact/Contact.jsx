import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_bbn9cw9",
        "template_ykxew2o",
        form.current,
        "mu8BwXry2EFdrSZkU"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          CONTACT
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-medium">
          Let’s collaborate — feel free to reach out anytime!
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#0d081f] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 transition hover:shadow-purple-900/40 hover:border-purple-500">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
          Send Me a Message ✉️
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 sm:mt-6 md:mt-6 flex flex-col space-y-3 sm:space-y-4"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-[#131025] p-2 sm:p-3 md:p-3 rounded-lg border border-gray-600 text-white focus:border-purple-500 focus:shadow-[0_0_8px_#a855f7] outline-none transition text-sm sm:text-base"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-[#131025] p-2 sm:p-3 md:p-3 rounded-lg border border-gray-600 text-white focus:border-purple-500 focus:shadow-[0_0_8px_#a855f7] outline-none transition text-sm sm:text-base"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="bg-[#131025] p-2 sm:p-3 md:p-3 rounded-lg border border-gray-600 text-white focus:border-purple-500 focus:shadow-[0_0_8px_#a855f7] outline-none transition text-sm sm:text-base"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="bg-[#131025] p-2 sm:p-3 md:p-3 rounded-lg border border-gray-600 text-white focus:border-purple-500 focus:shadow-[0_0_8px_#a855f7] outline-none transition text-sm sm:text-base"
          />

          {/* Hidden Time Field */}
          <input type="hidden" name="time" value="" />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 md:py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg text-sm sm:text-base md:text-base transition hover:opacity-90 hover:shadow-[0_0_12px_#d946ef]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
