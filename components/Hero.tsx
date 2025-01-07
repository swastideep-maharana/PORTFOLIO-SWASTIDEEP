import { FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-16 relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4"></p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Swastideep Maharana"
            className="text-center text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl glow-text animate-pulse"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi there! I am a passionate Frontend Developer based in India,
            crafting dynamic web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about">
              <MagicButton
                title="Know More"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="hover:bg-blue-500 transition-all duration-300 ease-in-out"
              />
            </a>

            {/* MagicButton for Download CV */}
            <a
              href="/SwastideepMaharana.pdf" // Correct path to the CV file in the public folder
              download
            >
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="hover:bg-green-500 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>

      {/** Scroll down prompt with new down arrow icon */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-sm md:text-lg text-blue-100 animate-pulse">
          Scroll Down to See More
        </p>
        <div className="flex justify-center mt-2 animate-bounce">
          <a href="#about">
            <FaArrowDown className="text-3xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
