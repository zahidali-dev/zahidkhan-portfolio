import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-gradient-to-b from-[#0a0718] to-[#120c2b] relative overflow-hidden"
  >
    {/* Section Header */}
    <div className="text-center mb-12 relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium">
        My technical expertise in web development, programming, and tools I work with.
      </p>
    </div>

    {/* Skills Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-stretch relative z-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full max-w-[520px] h-full"
        >
          <div className="h-full bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-[0_0_30px_1px_rgba(130,69,236,0.4)] p-6 hover:shadow-[0_0_40px_1px_rgba(130,69,236,0.6)] transition-all duration-300 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-gray-800/40 hover:bg-gradient-to-tr from-[#8245ec]/50 to-[#a855f7]/50 border border-gray-700 rounded-3xl p-3 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                  />
                  <span className="text-sm sm:text-base text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>

    {/* Background Decorative Blobs */}
    <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-700/30 rounded-full filter blur-3xl animate-blob -z-10"></div>
    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-blob -z-10"></div>
  </section>
);

export default Skills;
