
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience, hackathons, and leadership roles
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>


        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Number Badge: shown at top center of the card */}
            <div className="w-full sm:max-w-md flex justify-center">
              <div className="bg-purple-700 border-4 border-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 text-white font-bold text-lg sm:text-xl">
                {index + 1}
              </div>
            </div>
            {/* Connector + animated dot to visually bring the number and card closer,
              and a small decorative preview card with smooth motion/hover */}
            <div className="hidden sm:flex items-center relative">
              {/* vertical connector line (adjusts side based on index for symmetry) */}
              <div
              className={`hidden sm:block h-36 w-1 bg-white/10 rounded transition-all duration-700 ${
                index % 2 === 0 ? "sm:mr-4" : "sm:ml-4"
              }`}
              aria-hidden="true"
              />

              {/* animated pulse dot that sits between the badge and the card */}
              <div
              className={`relative flex items-center justify-center w-6 h-6 rounded-full bg-white/90 shadow-lg transform transition-transform duration-500
                hover:scale-110 animate-pulse ${
                index % 2 === 0 ? "sm:translate-x-4" : "sm:-translate-x-4"
                }`}
              aria-hidden="true"
              />

              {/* small decorative preview card (modern glassy look) */}
              <div
              className={`hidden sm:flex items-center justify-center w-28 h-16 ml-4 mr-4 p-2 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/10 backdrop-blur-md shadow-lg
                transform transition-all duration-400 hover:-translate-y-2 hover:scale-105`}
              aria-hidden="true"
              >
              <div className="flex flex-col items-start justify-center w-full px-2">
                <div className="h-2 w-12 bg-[#8245ec] rounded-sm mb-2 animate-pulse/10" />
                <div className="h-2 w-20 bg-white/20 rounded-sm" />
              </div>
              </div>
            </div>
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-12 sm:mr-12 ml-4 transform transition-transform duration-300 hover:scale-105 mt-4`}
            >
              <div className="flex flex-col">
                {/* Role, Company Name, and Date */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills */}
                {experience.skills && (
                  <div className="mt-4">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {experience.holopin && (
                    <a
                      href={experience.holopin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8245ec] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                    >
                      Holopin Profile
                    </a>
                  )}
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8245ec] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                    >
                      GitHub Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
