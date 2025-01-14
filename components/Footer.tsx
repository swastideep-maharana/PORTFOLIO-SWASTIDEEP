import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const handleSocialMediaClick = (link: string) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };

  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      {/* Background grid */}

      <div className="flex flex-col items-center z-10">
        <h1 className="heading text-center lg:max-w-[45vw] text-xl md:text-3xl">
          Reach out to <span className="text-purple">me</span> today and let's
          discuss how I can help you achieve your goals.
        </h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}
        <a href="mailto:swastideep67maharana@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 relative z-10">
        <p className="md:text-base text-sm font-light text-center md:text-left">
          Copyright © 2025 Swastideep Maharana
        </p>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => handleSocialMediaClick(info.link)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:shadow-[0_0_15px_4px_rgba(255,255,255,1)] hover:scale-110"
            >
              <img
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                className="transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
