"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "../AnimatedText";
import { motion } from "framer-motion";
import ToolbarExpandable from "./HeroToolbar";
import { Toolbar, MobileToolbar } from "./HeroToolbar";
export default function Hero() {
  return (
    <div className="hero h-screen  relative ">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <Image
          alt="hero"
          src={"/homehero.webp"}
          fill
          className="brightness-50 object-cover"
        ></Image>
      </motion.div>
      <div className="absolute w-full h-full flex justify-center items-center flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999999] text-white gap-6 select-none px-16 max-md:px-6 max-sm:px-2 max-md:gap-3 ">
        <div className="text-4xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-2xl text-center">
          <Text
            delay={0.5}
            text={"Scout: Relocate Like a Local, Not a Tourist"}
          ></Text>
        </div>
        <div className="text-xl max-lg:text-xl max-md:text-base max-sm:text-center">
          <Text
            custom="text-2xl text-center"
            delay={0.7}
            text={"Your personal relocation insider. We scout, you shine."}
          ></Text>
        </div>
        {/* <div className="blur-md"></div> */}
        {/* <motion.div
          className="max-md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Toolbar></Toolbar>
        </motion.div> */}
        {/* <motion.div
          className="hidden max-md:block w-full px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <MobileToolbar></MobileToolbar>
        </motion.div> */}
      </div>
    </div>
  );
}
