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
          <Text inView={inView} text={"Adapting to Dubai"}></Text>
        </div>
        <div className="text-white ">
          <Text
            inView={inView}
            text={`Immerse yourself in the vibrant cosmopolitan lifestyle, marvel at stunning architecture, and prepare to be amazed by world-class dining and luxurious experiences. The ${`city's`} unique blend of ultramodern innovation and rich cultural heritage makes it an extraordinary place to live and explore.`}
          ></Text>
        </div>
      </div>
      <div className="w-2/3 -translate-x-6 max-lg:w-full max-lg:translate-x-0 max-lg:-translate-y-6">
        <img className="max-lg:rounded-b-xl" src="/Dubai_Skyline.jpg" alt="Dubai cityscape" />
      </div>
    </div>
  );
}