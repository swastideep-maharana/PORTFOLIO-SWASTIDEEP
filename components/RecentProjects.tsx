import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useEffect, useState } from "react";

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensures the component is rendered only on the client-side
  useEffect(() => {
    setIsClient(true); // Set isClient to true after component mounts
  }, []);

  if (!isClient) {
    return null; // Avoid rendering server-side mismatch
  }

  // Function to handle the card click
  const handleCardClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank"); // Open the link in a new tab
      console.log(`Redirecting to ${url}`); // You can log or track the click here
    }
  };

  return (
    <div className="py-20 bg-gradient-to-r from-indigo-900/60 to-purple-900/60">
      <h1 className="text-center text-3xl font-extrabold text-white">
        A small selection of{" "}
        <span className="text-pink-400">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] group cursor-pointer transform hover:scale-105 transition-all duration-300"
            key={item.id}
            onClick={() => handleCardClick(item.link)} // Add onClick here
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10 overflow-hidden group-hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.7)] group-hover:border-2 group-hover:border-pink-500 transition-all ease-in-out duration-300">
                <div
                  className="relative w-full h-full bg-black bg-opacity-30"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="background"
                    className="object-contain w-full h-full"
                  />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  style={{
                    objectPosition: "center center",
                  }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-white line-clamp-1 group-hover:text-pink-400 transition-colors duration-300">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm text-gray-300 line-clamp-2"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center group-hover:border-pink-500 transition-all duration-300"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-pink-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 text-pink-400 hover:text-white transition-all duration-300" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
