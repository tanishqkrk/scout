"use client";
import { useInView } from "framer-motion";
import Text from "../AnimatedText";
import { useRef } from "react";

export default function Adapting() {
  const container = useRef();
  const inView = useInView(container);

  return (
    <div ref={container} className="flex px-16 max-md:px-6 max-lg:flex-col">
      <div className="bg-themeBlue w-1/3 rounded-xl z-[9] flex justify-center items-start p-12 gap-6 flex-col max-lg:w-full">
        <div className="text-white font-semibold text-4xl">
          <Text inView={inView} text={"Embracing Amsterdam"}></Text>
        </div>
        <div className="text-white">
          <Text
            inView={inView}
            text={`Discover a city of enchanting canals, world-class museums, and a progressive spirit. Immerse yourself in Amsterdam's unique blend of historic charm and modern innovation, where bicycle culture, artistic heritage, and international diversity create an unparalleled urban experience.`}
          ></Text>
        </div>
      </div>
      <div className="w-2/3 -translate-x-6 max-lg:w-full max-lg:translate-x-0 max-lg:-translate-y-6">
        <img className="max-lg:rounded-b-xl" src="/Amsterdam-Adapting.jpg" alt="Amsterdam cityscape" />
      </div>
    </div>
  );
}