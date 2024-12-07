"use client";

import Link from "next/link";
import GalleryComponent from "./GalleryComponent";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Text from "../AnimatedText";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Highlights() {
  const highlights = [
    {
      title: "Cruises",
      image: "/cruise_s.webp",
      link: "/",
    },
    {
      title: "Bike Tours",
      image: "/biking_s.webp",
      link: "/",
    },
    {
      title: "Museum Tours",
      image: "/museum_s.webp",
      link: "/",
    },
    {
      title: "City Tours",
      image: "/city_s.webp",
      link: "/",
    },
    {
      title: "Food",
      image: "/food_s.webp",
      link: "/",
    },
    {
      title: "Hiking",
      image: "/hiking_s.webp",
      link: "/",
    },
  ];

  const container = useRef();
  const inView = useInView(container);

  return (
    <div ref={container} className=" px-16 space-y-6 max-md:px-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold max-md:text-lg">
          <Text inView={inView} text={"Bangalore's Highlights"}></Text>
        </div>{" "}
        <Link href={"/"} className="underline">
          <Text inView={inView} text={"See all"}></Text>
        </Link>
      </div>
      <div className="highlights h-[80vh] max-lg:hidden">
        <div className="cruise">
          <GalleryComponent
            inView={inView}
            title={highlights[0].title}
            image={highlights[0].image}
            link={highlights[0].link}
          />
        </div>
        <div className="biking">
          <GalleryComponent
            inView={inView}
            title={highlights[1].title}
            image={highlights[1].image}
            link={highlights[1].link}
          />
        </div>
        <div className="city">
          <GalleryComponent
            inView={inView}
            title={highlights[2].title}
            image={highlights[2].image}
            link={highlights[2].link}
          />
        </div>
        <div className="museum">
          <GalleryComponent
            inView={inView}
            title={highlights[3].title}
            image={highlights[3].image}
            link={highlights[3].link}
          />
        </div>
        <div className="food">
          <GalleryComponent
            inView={inView}
            title={highlights[4].title}
            image={highlights[4].image}
            link={highlights[4].link}
          />
        </div>
        <div className="hiking">
          <GalleryComponent
            inView={inView}
            title={highlights[5].title}
            image={highlights[5].image}
            link={highlights[5].link}
          />
        </div>
      </div>
      <div className="max-lg:flex justify-center items-center hidden">
        <Carousel
          swipeable
          showArrows={false}
          emulateTouch
          axis="horizontal"
          verticalSwipe="natural"
          className=""
        >
          {highlights?.map(({ title, image, link }, i) => {
            return (
              <div key={i} className="select-none">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: "10%",
                  }}
                  animate={{
                    opacity: inView ? "100%" : 0,
                    y: inView ? "0" : "10%",
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    // type: "spring",
                  }}
                  className="relative rounded-xl h-full w-full group overflow-hidden"
                >
                  <img
                    className="h-full w-full object-cover rounded-xl group-hover:scale-105 duration-200 max-lg:h-[60vh]"
                    src={image}
                    alt=""
                  />
                  <div className="w-full h-36 bg-gradient-to-t from-black to-transparent absolute bottom-0 rounded-xl"></div>
                  <div className="absolute bottom-3 left-3 text-white max-md:bottom-12 max-md:text-xl max-md:font-semibold max-md:left-6">
                    {title}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
