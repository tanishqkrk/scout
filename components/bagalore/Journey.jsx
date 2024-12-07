/* eslint react/no-unescaped-entities: 0 */ // --> OFF

"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import Text from "../AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Journey() {
  const container = useRef();
  const inView = useInView(container);

  return (
    <div
      ref={container}
      className="p-16 flex flex-col justify-center items-center text-center gap-6 bg-[#FB654220] max-lg:p-10 max-md:p-6 max-sm:p-3"
    >
      <div className="text-2xl">Your Bangalore Relocation Journey</div>
      <div className="text-lg font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
        Navigating a new country can be daunting. SCOUT provides comprehensive
        in-country assistance to ensure your transition to Bangalore is seamless
        and stress-free.
      </div>
      <div className="flex w-full">
        <div className="w-1/4 max-lg:hidden">
          <img className="w-full" src="/person.svg" alt="" />
        </div>
        <div className="w-3/4 max-lg:w-full">
          <Swiper
            breakpoints={{
              900: {
                slidesPerView: 1.2,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            spaceBetween={50}
            slidesPerView={1.2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold ">
                  Understanding the City
                </div>
                <div>
                  Get insights into Bangalore's cost of living, housing
                  standards, schooling options, and entertainment. Learn about
                  payroll, taxes, and other local implications for a smooth
                  transition.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold ">
                  Understanding the City
                </div>
                <div>
                  Get insights into Bangalore's cost of living, housing
                  standards, schooling options, and entertainment. Learn about
                  payroll, taxes, and other local implications for a smooth
                  transition.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold ">
                  Understanding the City
                </div>
                <div>
                  Get insights into Bangalore's cost of living, housing
                  standards, schooling options, and entertainment. Learn about
                  payroll, taxes, and other local implications for a smooth
                  transition.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold ">
                  Understanding the City
                </div>
                <div>
                  Get insights into Bangalore's cost of living, housing
                  standards, schooling options, and entertainment. Learn about
                  payroll, taxes, and other local implications for a smooth
                  transition.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
