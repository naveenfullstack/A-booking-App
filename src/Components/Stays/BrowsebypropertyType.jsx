import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./Css/Explore.css";
import PropatyType from "../../Json/propertyTypes.json";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export default function BrowsebypropertyType() {
  const [activeSlide, setActiveSlide] = useState(0);

  const breakpoints = {
    mobile: 320,
    tablet: 640,
    desktop: 920,
  };

  const slidesPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  };
  const currentBreakpoint = Object.keys(breakpoints).find(
    (breakpoint) => window.innerWidth <= breakpoints[breakpoint]
  );

  const currentSlidesPerView =
    slidesPerView[currentBreakpoint] || slidesPerView.desktop;

  const handleSlideChange = () => {
    setActiveSlide(swiperRef.current.activeIndex);
  };

  const swiperRef = useRef(null);

  return (
    <div className="text-black flex justify-center items-center pt-8">
      <div className="w-full max-w-default px-4">
        <p className="text-title font-semibold pb-4">Browse by property type</p>
        <div>
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
            {PropatyType.map((index) => (
              <SwiperSlide key={index.id}>
                <div>
                  <img className="rounded-lg" alt="img" src={index.image} />
                  <div className="pt-2">
                    <p className="w-full text-start text-header font-semibold">
                      {index.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="z-10 lg:flex md:hidden sm:hidden justify-end absolute w-full max-w-default top-[68rem] pr-4 ">
            <div className="w-1/2 flex justify-start">
              {activeSlide > 0 && ( // Show if not on the first slide
                <div
                  onClick={() => swiperRef.current.slidePrev()}
                  className="z-10 bg-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer absolute left-[-1rem]"
                >
                  <BsArrowLeftShort className="text-[1.5rem]" />
                </div>
              )}
            </div>
            <div className="w-1/2 flex justify-end">
              {activeSlide < PropatyType.length - currentSlidesPerView && (
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
