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
      Foreign nationals, unless from the exempt countries, coming for the purpose of employment, will need an employment visa (EV). Dependents accompanying foreign nationals will need dependents visa (XV).
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
              <div className="bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold">
                  Employment Visa (EV)
                </div>
                <div>
              The employment visa application is submitted to the Indian diplomatic post in the country of nationality or residence for 
              at least two years. The Indian diplomatic will issue an employment visa for 1 year ( certain nationals are issued longer employment visas). 
              This allows the foreign national to travel to India.<br></br>
              Time Line : 1 -12 weeks
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold">
                  PAN Card Application
                </div>
                <div>
                  Upon entry to India, the foreign national has to apply for a PAN ( Permanent Account Number) ( Indian income tax number). 
                  <br></br> 
                  Time Line: 2-4 weeks
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold">
                  Residence Permit
                </div>
                <div>
               Within 14 days of arrival into India, the foreign national has to apply for a residence permit with the  jurisdictional foreigner’s 
               registration office. The jurisdictional foreigner’s registration office will issue a residence permit for 1 year after evaluating the documents. 
                 <br></br>
                 Time Line : 2-5 Business Days
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                <div className="text-xl text-white font-semibold">
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