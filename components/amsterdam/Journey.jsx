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
      <div className="text-2xl">Your Netherlands Work Visa Journey</div>
      <div className="text-lg font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
      Comprehensive guide to obtaining a Work Residence Permit in the Netherlands
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
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                INITIATION
                </div>
                <div className="text-sm text-left px-2">
                  <p>Client initiates the case with FGI and submits personal and
                    corporate documents. FGI reviews and reverts back with
                    missing information, corrections, etc.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                HSM RESIDENCE PERMIT & MVV APPLICATION (TEV)
                </div>
                <div className="text-sm text-left px-2">
                  <p>Once all documents are received, FGI submits an
                    application for an entry residence permit (TEV), which is a
                    combined entry visa (MVV) and residence permit
                    application, to the Immigration and Naturalization Service
                    (IND) in the Netherlands.
                    <br></br>
                    Processing time: 2-3 weeks</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                MVV ENTRY VISA COLLECTION
                </div>
                <div className="text-sm text-left px-2">
                  <p>On approval of the MVV entry visa application the
                    assignee and accompanying dependents must collect
                    the MVV entry visa sticker at the Dutch Embassy or
                    consulate in the country of residence.
                    Processing time: 1-4 weeks.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                ENTRY TO THE NETHERLANDS
                </div>
                <div className="text-sm text-left px-2">
                 <p>Once the MVV entry visa sticker(s) has/have been
                  endorsed into the passport(s), the applicant and any
                  accompanying dependent family members may enter
                  the Netherlands. Work may be commenced on arrival,
                  as long as the applicant's MVV sticker contains a note
                  stating employment status.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                IND REGISTRATION
                </div>
                <div className="text-sm text-left px-2">
                 <p>The applicant (and family) must register
                  with the city hall in the municipality of
                  residence. A sticker will be placed in the
                  applicant's passport to show that he/she
                  legally resides in the municipality.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                DELIVERY OF BSN NUMBER
                </div>
                <div className="text-sm text-left px-2">
                 <p>Once registered at the municipality,
                  the BSN Number (social fiscal number)
                  will be sent to the applicant(s) within
                  ten working days.
                  <br></br>
                  Processing time: 1- 7 days</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-themeOrange rounded-xl p-4 h-72 max-lg:h-full flex flex-col justify-start items-center text-white overflow-y-auto">
                <div className="text-xl text-white font-semibold mb-3">
                RESIDENCE CARD COLLECTION
                </div>
                <div className="text-sm text-left px-2">
                 <p>Once the residence card has been issued,
                    and provided this was not given out at the
                    IND Registration appointment, the applicant
                    (and family) will receive a detailed invitation
                    letter to go and collect it from the IND. No
                    appointment is required for this collection.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}