import React, { useRef, useState } from "react";
import Explore from "../../Json/TripPlanner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./Css/Explore.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

export default function TripPlanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("beach");

  const breakpoints = {
    mobile: 320,
    tablet: 640,
    desktop: 920,
  };

  const slidesPerView = {
    mobile: 3,
    tablet: 5,
    desktop: 6,
  };
  const currentBreakpoint = Object.keys(breakpoints).find(
    (breakpoint) => window.innerWidth <= breakpoints[breakpoint]
  );

  const currentSlidesPerView =
    slidesPerView[currentBreakpoint] || slidesPerView.desktop;

  const handleSlideChange = () => {
    setActiveIndex(swiperRef.current.activeIndex);
  };

  const swiperRef = useRef(null);
  const filteredExploreData = Explore.filter((item) => item.type === activeTab);

  return (
    <div className="text-black flex justify-center items-center">
      <div className="w-full max-w-default px-4">
        <p className="text-title font-semibold pt-8">
          Quick and easy trip planner
        </p>
        <p className="text-secondary text-header">
          Pick a vibe and explore the top destinations in Sri Lanka
        </p>
        <div>
          <div className="flex space-x-4 py-4 pb-6">
            <div
              onClick={() => setActiveTab("beach")}
              className={
                activeTab === "beach"
                  ? "active bg-primary flex items-center space-x-2 text-white p-2 px-4 rounded-lg cursor-pointer"
                  : "flex items-center space-x-2 hover:bg-button_hover/[.30] p-2 px-4 rounded-lg cursor-pointer"
              }
            >
              <FaUmbrellaBeach />
              <p>Beach</p>
            </div>

            <div
              onClick={() => setActiveTab("city")}
              className={
                activeTab === "city"
                  ? "active bg-primary flex items-center space-x-2 text-white p-2 px-4 rounded-lg cursor-pointer"
                  : "flex items-center space-x-2 hover:bg-button_hover/[.30] p-2 px-4 rounded-lg cursor-pointer"
              }
            >
              <FaCity />
              <p>City</p>
            </div>

            <div
              onClick={() => setActiveTab("outdoor")}
              className={
                activeTab === "outdoor"
                  ? "active bg-primary flex items-center space-x-2 text-white p-2 px-4 rounded-lg cursor-pointer"
                  : "flex items-center space-x-2 hover:bg-button_hover/[.30] p-2 px-4 rounded-lg cursor-pointer"
              }
            >
              <MdOutlineOutdoorGrill />
              <p>Outdoor</p>
            </div>

            <div
              onClick={() => setActiveTab("romance")}
              className={
                activeTab === "romance"
                  ? "active bg-primary flex items-center space-x-2 text-white p-2 px-4 rounded-lg cursor-pointer"
                  : "flex items-center space-x-2 hover:bg-button_hover/[.30] p-2 px-4 rounded-lg cursor-pointer"
              }
            >
              <GiSelfLove />
              <p>Romance</p>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={10}
            slidesPerView={currentSlidesPerView}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            breakpoints={{
              [breakpoints.mobile]: {
                slidesPerView: slidesPerView.mobile,
              },
              [breakpoints.tablet]: {
                slidesPerView: slidesPerView.tablet,
              },
              [breakpoints.desktop]: {
                slidesPerView: slidesPerView.desktop,
              },
            }}
          >
            {filteredExploreData.map((index) => (
              <SwiperSlide key={index.id}>
                <div>
                  <img className="rounded-lg" alt="img" src={index.image} />
                  <div className="pt-2">
                    <p className="w-full text-start text-header font-semibold">
                      {index.title}
                    </p>
                    <p className="w-full text-start text-subtitle2 text-secondary capitalize">
                      {index.km} km Away
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="z-10 lg:flex md:hidden sm:hidden justify-end absolute w-full max-w-default top-[137rem] pr-4">
            <div className="w-1/2 flex justify-start">
              {activeIndex > 0 && ( // Show if not on the first slide
                <div
                  onClick={() => swiperRef.current.slidePrev()}
                  className="z-10 bg-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer absolute left-[-1rem]"
                >
                  <BsArrowLeftShort className="text-[1.5rem]" />
                </div>
              )}
            </div>
            <div className="w-1/2 flex justify-end">
              {activeIndex <
                filteredExploreData.length - currentSlidesPerView && (
                <div
                  onClick={() => swiperRef.current.slideNext()}
                  className="z-10 bg-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
                >
                  <BsArrowRightShort className="text-[1.5rem]" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
