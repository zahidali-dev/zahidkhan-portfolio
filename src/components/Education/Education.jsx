import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] bg-black text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Education Boxes 2 x 2 */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
      <style>{`
        /* equalize grid row heights on md+ so all boxes match */
        @media (min-width: 768px) {
          #education .relative { grid-auto-rows: 1fr; }
        }

        /* ensure each grid child stretches and centers */
        #education .relative > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* make the main card fill the available space and add modern motion */
        #education .relative > div > div:last-child {
          position: relative;
          flex: 1 1 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 450ms cubic-bezier(.2,.9,.25,1), box-shadow 450ms ease, backdrop-filter 300ms ease;
          will-change: transform, box-shadow;
          transform-origin: center;
          animation: fadeUp .55s ease both;
        }

        /* hover uplift + soft shadow */
        #education .relative > div:hover > div:last-child {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 18px 40px rgba(99,102,241,0.12), 0 6px 18px rgba(0,0,0,0.35);
          backdrop-filter: saturate(120%) blur(6px);
        }

        /* subtle movement for the numbered circle */
        #education .relative > div > div:first-child {
          transition: transform 360ms cubic-bezier(.2,.9,.25,1), box-shadow 360ms ease;
          will-change: transform;
        }
        #education .relative > div:hover > div:first-child {
          transform: translateY(-6px) scale(1.06);
          box-shadow: 0 10px 30px rgba(124,58,237,0.12);
        }

        /* heading color shift on hover to accent purple */
        #education .relative > div:hover h3 { color: #c4b5fd; }

        /* animated sheen overlay on card */
        #education .relative > div > div:last-child::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0) 45%, rgba(255,255,255,0.03));
          mix-blend-mode: overlay;
          opacity: 0;
          transition: opacity 450ms ease, transform 550ms cubic-bezier(.2,.9,.25,1);
          transform: translateX(-30%);
        }
        #education .relative > div:hover > div:last-child::after {
          opacity: 1;
          transform: translateX(20%);
        }

        /* small entrance animation */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px) scale(.995); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
        {/* Vertical Lines Between Boxes */}
        <div className="hidden md:block absolute top-0 left-1/2 h-1/2 w-[3px] bg-purple-500"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 h-1/2 w-[3px] bg-purple-500"></div>

        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col items-center text-center">

            {/* Circle Number */}
            <div className="w-16 h-16 flex justify-center items-center text-3xl font-bold 
                bg-purple-500 rounded-full mb-4 animate-pulse shadow-lg">
              {edu.id}
            </div>

            {/* Main Card Box */}
            <div className="
              bg-zinc-900/80 backdrop-blur-md border border-purple-500
              p-8 w-full rounded-2xl shadow-lg transition duration-300 hover:scale-105
            ">
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.school || edu.College || edu.University}</p>
              <p className="text-sm text-gray-400">{edu.date}</p>
              <p className="text-md font-semibold mt-2">Grade: {edu.grade}</p>
              <p className="text-gray-300 mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;
