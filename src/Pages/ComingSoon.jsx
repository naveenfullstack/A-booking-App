import React from "react";
import Image from "../Assets/webdev.png";
import Data from "../Json/Portfolio.json";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ComingSoon() {
  const openGitHubProfile = () => {
    window.open("https://github.com/naveenfullstack", "_blank");
  };

  return (
    <div className="bg-black h-screen w-full text-white">
      <div className="bg-black flex justify-center w-full h-[20rem]">
        <img src={Image} alt="img" />
      </div>
      <div className="bg-black flex justify-center">
        <div className="max-w-[1200px] space-y-4 w-full">
          <h1 className="text-center text-[2rem] pt-4">
            Portfolio is Coming Soon, will Take some <br /> time to be back online
          </h1>
          <p className="text-center text-[1.1rem]">or</p>
          <h1 className="text-center text-[1.5rem]">
            Explore some projects of mine
          </h1>
          <div className="flex items-center space-x-2 justify-end text-[#34C2FF] px-4">
            <p onClick={openGitHubProfile} className="cursor-pointer">
              View All
            </p>
            <AiOutlineArrowRight
              onClick={openGitHubProfile}
              className="text-[1.2rem] cursor-pointer"
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4">
            {Data.map((index) => (
              <div className="border border-white/[.20] rounded-lg p-4 space-y-2 hover:bg-[#1B1B1B]">
                <h1 className="text-[1.3rem]">
                  {index.name} - {index.type}
                </h1>
                <p className="text-white/[.60]">{index.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {index.technologies.map((tech) => (
                    <p
                      key={tech.id}
                      className="bg-[#363636] p-1 px-4 rounded-[0.3rem] text-center"
                    >
                      {tech.name}
                    </p>
                  ))}
                </div>
                <div className="flex items-center space-x-2 justify-end cursor-pointer">
                  <p
                    onClick={() =>
                      window.open(
                        `https://github.com/naveenfullstack/${index.website}`,
                        "_blank"
                      )
                    }
                  >
                    View In Github
                  </p>
                  <FiExternalLink
                    onClick={() =>
                      window.open(
                        `https://github.com/naveenfullstack/${index.website}`,
                        "_blank"
                      )
                    }
                    className="text-[1.2rem] cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
