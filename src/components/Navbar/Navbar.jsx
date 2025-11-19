import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Typing effect
  const text = "Software Engineer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const next = prev + text[index];
        index++;
        if (index >= text.length) {
          index = 0;
          return "";
        }
        return next;
      });
    }, 250); // slower typing speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 200;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero left-top */}
      <div className="fixed top-5 left-5 z-50">
        <h2 className="font-bold text-2xl sm:text-3xl cursor-default flex space-x-1">
          {displayedText.split("").map((char, idx) => (
            <span
              key={idx}
              className="text-white transition-transform duration-300 hover:scale-125 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-indigo-400"
              style={{
                display: "inline-block",
                animation: `wave 1.2s ease-in-out infinite`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span className="text-white animate-blink">|</span>
        </h2>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 transition duration-300 px-[7vw] lg:px-[16vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-end items-center py-5 text-white relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-gray-300 hover:text-[#8245ec] font-medium ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                } transition-colors duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden z-50">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer transition-transform transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer transition-transform transform hover:scale-110"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        /* Mobile Menu */}
          <div className="md:hidden">
            {/* positioned under the fixed nav, above page content and above social icons when open */}
            <div
              className={`absolute left-0 right-0 top-full mt-2 transition-all duration-300 ${
                isOpen ? "max-h-[60vh] z-[60] opacity-100" : "max-h-0 z-0 opacity-0"
              } overflow-hidden`}
              aria-hidden={!isOpen}
            >
              <div className="mx-4 bg-[#050414] bg-opacity-85 backdrop-blur-lg rounded-lg shadow-lg overflow-y-auto">
                <ul className="flex flex-col items-stretch py-3 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`px-4 py-3 text-center border-b border-white/5 last:border-b-0 transition-colors ${
                  activeSection === item.id ? "text-[#8245ec]" : "hover:text-[#8245ec]"
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full text-sm font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
                </ul>
              </div>
            </div>
          </div>
              </nav>}
      <div className="fixed top-5 right-5 flex space-x-4 z-50">
        <a
          href="https://github.com/zahidali-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec] transition-transform transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/zahid-ali-499612344/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec] transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
