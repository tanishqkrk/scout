"use client";
import Image from "next/image";
import Link from "next/link";
import Text from "../AnimatedText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero h-screen relative ">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <Image
          src={"/Hero.webp"}
          alt="Amsterdam Cityscape"
          fill
          className="brightness-50 object-cover"
        />
      </motion.div>
      <div className="absolute w-full h-full flex justify-center items-center flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999999] text-white gap-6 select-none px-16 max-md:px-6 max-md:gap-3">
        <div className="text-5xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-xl">
          <Text delay={0.5} text={"Embrace Amsterdam's Charm"}/>
        </div>
        <div className="text-3xl max-lg:text-xl max-md:text-base">
          <Text delay={0.7} text={"Your Dutch Adventure Begins"}/>
        </div>
        {/* <Link
          href={"/"}
          className="bg-themeOrange p-3 rounded-full px-8 max-md:p-1 max-md:w-full max-md:text-center max-md:flex max-md:justify-center"
        >
          <Text delay={0.8} text={"Start Your Journey"}/>
        </Link> */}
      </div>
    </div>
  );
}