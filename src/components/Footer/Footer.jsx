import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Tech Logos (Optional, can remove if not needed)
import htmlLogo from "../../assets/tech_logo/html.png";
import cssLogo from "../../assets/tech_logo/css.png";
import jsLogo from "../../assets/tech_logo/javascript.png";
import reactLogo from "../../assets/tech_logo/reactjs.png";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/zahidali.mahar.944" },
    { icon: <FaGithub />, link: "https://github.com/zahidali-dev" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zahid-ali-499612344" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/zahidali.mahar.944" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@ZAMLearningHub" },
  ];

  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React JS", logo: reactLogo },
  ];

  return (
    <footer className="bg-[#050414] text-white py-8 px-6 md:px-[7vw] lg:px-[16vw]">
      <div className="container mx-auto text-center flex flex-col items-center gap-6">
        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-500">Zahid Ali</h2>

        {/* Optional: Skills Logos */}
        <div className="flex justify-center gap-4">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.logo}
              alt={skill.name}
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-200"
            />
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-">
          <a
            href="mailto:K24SW012@students.muetkhp.edu.pk"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Email Me
          </a>
          <a
            href="tel:+923083253683"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Call Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition transform hover:-translate-y-1 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm mt-4">
          © 2025 Zahid Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
