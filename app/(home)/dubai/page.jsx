/* eslint react/no-unescaped-entities: 0 */ // --> OFF
"use client";

import AboutWork from "@/components/bagalore/AboutWork";
import Adapting from "@/components/bagalore/Adapting";
import Amenities from "@/components/bagalore/Amenities";
import Hero from "@/components/bagalore/Hero";
import Highlights from "@/components/bagalore/Highlights";
import Journey from "@/components/bagalore/Journey";
import { MoveUpRight } from "lucide-react";
import { House } from "lucide-react";
import { Plane } from "lucide-react";
import { Quote } from "lucide-react";
import { Globe } from "lucide-react";
import { School } from "lucide-react";
import { Drama } from "lucide-react";
import { Languages } from "lucide-react";
import { Soup } from "lucide-react";
import { Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import Text from "@/components/AnimatedText";
import { useInView } from "framer-motion";
import GalleryComponent from "@/components/bagalore/GalleryComponent";
import { Carousel } from "react-responsive-carousel";
import { AnimatePresence } from "framer-motion";
// import  from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
export default function Dubai() {
  useEffect(() => {
    (async function () {
      const LS = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LS();
    })();
  }, []);
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Scout made our move from Bangladesh to Dubai seamless. They helped us find a perfect home, navigate essential services, and made sure we felt welcome and supported throughout the process. Thanks to them, we’re happily settled in our new city!",
      name: "Ahsan Rahman & Family",
      origin: "Bangladesh",
      img: "/p1.png",
      destination: "Dubai",
    },
    // {
    //   id: 2,
    //   testimonial:
    //     "Scout made our international move effortless! From packing to customs clearance, their team handled every detail with professionalism and care. We couldn’t have asked for a smoother experience!",
    //   name: "Sarah M.",
    //   origin: "Columbo",

    //   img: "/p2.png",
    //   destination: "Amsterdam",
    // },
    // {
    //   id: 3,
    //   testimonial:
    //     "Their attention to detail and dedication to customer satisfaction truly set them apart. Scout took care of everything, so I could focus on settling into my new home and job. A fantastic service!",
    //   name: "Priya S.",
    //   origin: "Delhi",

    //   img: "/p3.png",
    //   destination: "Dubai",
    // },
  ];
  const [selectedTest, setSelectedTest] = useState(1);

  const customerReviews = [
    {
      name: "Alice Johnson",
      location: "New York, USA",
      rating: 5,
      review:
        "Amazing experience! The booking process was smooth, and everything was perfectly organized. Highly recommend this travel service!",
      date: "2024-07-12",
      img: "/p1.png",
    },
    {
      name: "Carlos Fernandez",
      location: "Madrid, Spain",
      rating: 4,
      review:
        "Great trip, but there were a few minor issues with hotel check-in. The customer support team resolved them quickly, though. Overall, a fantastic experience.",
      date: "2024-08-05",
      img: "/p2.png",
    },
    {
      name: "Samantha Lee",
      location: "Sydney, Australia",
      rating: 5,
      review:
        "This travel service exceeded my expectations! The guided tours were insightful, and the itinerary was well planned. I will definitely book again.",
      date: "2024-06-22",
      img: "/p3.png",
    },
    {
      name: "Hiroshi Tanaka",
      location: "Tokyo, Japan",
      rating: 4,
      review:
        "Very good service, but I wish the trip had included more local experiences. The transportation and accommodations were excellent, though.",
      date: "2024-09-01",
      img: "/p4.png",
    },
    {
      name: "Marie Dubois",
      location: "Paris, France",
      rating: 5,
      review:
        "Absolutely loved it! The travel service made everything easy and hassle-free. The trip was well-organized and the destinations were stunning.",
      date: "2024-08-20",
      img: "/p5.png",
    },
  ];

  const data = [
    {
      title: "Public Transport",
      description:
        "Dubai’s public transport system includes buses, metro, and auto-rickshaws to keep you well-connected across the city.",
    },
    {
      title: "Local Cuisine",
      description:
        "Dubai offers everything from traditional South Indian dishes like dosas and idlis to global culinary delights.",
    },
    {
      title: "Language",
      description:
        "While Kannada is the official language, English and Hindi are widely spoken, making communication easy for newcomers.",
    },
    {
      title: "Cultural Etiquette",
      description:
        "Respecting personal space, being polite, and removing shoes before entering homes are key aspects of local etiquette in Dubai.",
    },
  ];

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

  const amen = [
    {
      text: "Healthcare",
      emoji: "🏥",
      description:
        "Dubai is home to some of India's finest healthcare facilities, including renowned institutions like Manipal Hospitals and Fortis Healthcare. With cutting-edge technology, top-tier medical professionals, and a commitment to patient care, Dubai offers a robust healthcare system that ensures you and your loved ones receive the best possible treatment and support.",
      image: "/hospital.webp",
    },
    {
      text: "Night Life",
      emoji: "🎶",
      description:
        "Dubai boasts a vibrant nightlife with lively pubs, live music venues, and rooftop bars that make the city come alive after dark.",
      image: "/nightlife.webp",
    },
    {
      text: "Theme Parks",
      emoji: "🎢",
      description:
        "Enjoy thrilling rides and family-friendly attractions at Dubai’s top theme parks, like Wonderla and Fun World.",
      image: "/theme.webp",
    },
    {
      text: "Gardens & Public Spaces",
      emoji: "🌿",
      description:
        "Dubai’s lush gardens, such as Lalbagh and Cubbon Park, offer serene escapes for nature lovers and those looking to relax.",
      image: "/garden.webp",
    },
    {
      text: "Museums",
      emoji: "🏛️",
      description:
        "Explore Dubai’s rich history and culture through its diverse museums, including the Government Museum and Visvesvaraya Industrial & Technological Museum.",
      image: "/museum.webp",
    },
    {
      text: "Gastronomy",
      emoji: "🍽️",
      description:
        "From traditional South Indian dishes to international cuisine, Dubai is a food lover’s paradise with a diverse culinary scene.",
      image: "/food.webp",
    },
    {
      text: "Adventure Tours",
      emoji: "⛰️",
      description:
        "Experience the thrill of adventure with activities like trekking, rock climbing, and paragliding in and around Dubai’s scenic landscapes.",
      image: "/adventure.webp",
    },
  ];
  const [selected, setSelected] = useState("Healthcare");

  const container1 = useRef();
  const isInView = true;
  const container2 = useRef();
  const inView = true;
  const container3 = useRef();
  const inViewAmen = true;

  const container4 = useRef();
  const inViewAdapt = true;

  const container5 = useRef();
  const inViewJourney = true;

  return (
    <main className="space-y-16 mb-7">
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
            src={"/dubai-hero.webp"}
            fill
            className="brightness-[30%] object-cover"
          ></Image>
        </motion.div>
        <div className="absolute w-full h-full flex justify-center items-center flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999999] text-white gap-6 select-none px-16 max-md:px-6 max-md:gap-3">
          <div className="text-center text-4xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-xl">
            <Text delay={0.5} text={"Dubai: Architect Your Legend"}></Text>
          </div>
          <div className="text-center text-4xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-xl">
            <Text
              delay={0.5}
              text={"Scout: Engineering Your Quantum Leap to Global Success"}
            ></Text>
          </div>

          <Link
            href={"/"}
            className="bg-themeOrange p-3 rounded-full px-8 max-md:p-1 max-md:w-full max-md:text-center max-md:flex max-md:justify-center"
          >
            <Text delay={0.8} text={"Get a Free Quote"}></Text>
          </Link>
        </div>
      </div>
      <div ref={container1} className="px-16 space-y-8  max-md:px-6 ">
        <div className="bg-themeOrange relative p-8 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 py-24 ">
          {new Array(6).fill("").map((x, i) => {
            return (
              <div
                key={i}
                style={{
                  width: i * 100 + "px",
                  top: "-" + (i * 50 + "px"),
                  right: "-" + (i * 50 + "px"),
                  animation: `circle ${
                    (i + 1.1) * 2
                  }s infinite alternate-reverse ease-in-out`,
                  borderRadius: "40%",
                }}
                className="absolute  aspect-square border-2 border-white  circle"
              ></div>
            );
          })}
          {new Array(6).fill("").map((x, i) => {
            return (
              <div
                key={i}
                style={{
                  width: i * 100 + "px",
                  bottom: "-" + (i * 50 + "px"),
                  left: "-" + (i * 50 + "px"),
                  animation: `circle ${
                    (i + 1.1) * 2
                  }s infinite alternate-reverse ease-in-out`,
                  borderRadius: "40%",
                }}
                className="absolute  aspect-square border-2 border-white  circle"
              ></div>
            );
          })}

          <div className=" text-white text-center w-2/4 max-lg:w-4/5 text-xl italic">
            Imagine a city where the future isn't just a concept but a living,
            breathing reality. Welcome to Dubai, where every sunrise brings new
            possibilities, and every skyscraper tells a story of audacious
            dreams realized. Ready to write your chapter in the world's most
            ambitious city? Scout, your trusted international relocation
            services partner, is here to turn your Dubai aspirations into
            achievements.
          </div>
        </div>
      </div>
      <div
        ref={container2}
        className="p-16 flex  gap-16 max-lg:p-10 max-md:p-6 max-sm:p-3 max-lg:flex-col-reverse "
      >
        <div className="w-1/2 max-lg:w-full">
          <img
            src="/dubai3.jpg"
            className="h-[30em] object-cover rounded-xl w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 my-6  space-y-6 max-lg:w-full">
          <mdiv>
            <div className="text-xl">Your travel guide</div>
            <div className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">
              Why Dubai Will Redefine Your Expectations
            </div>
          </mdiv>
          <div className=" space-y-4 max-lg:w-full">
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Plane size={30}></Plane>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Innovation Incubator
                </div>
                <div className="max-sm:text-sm">
                  Where groundbreaking ideas are born daily
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Globe size={30}></Globe>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Global Nexus
                </div>
                <div className="max-sm:text-sm">
                  {" "}
                  A melting pot of cultures and opportunities
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <House size={30}></House>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Tax-Free Triumphs
                </div>
                <div className="max-sm:text-sm">
                  Maximize your earnings in a zero-income tax haven
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <School size={30}></School>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Luxury Redefined
                </div>
                <div className="max-sm:text-sm">
                  Experience a lifestyle that others only dream about
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={container5}
        className="p-16 flex flex-col justify-center items-center text-center gap-6 bg-[#FB654220] max-lg:p-10 max-md:p-6 max-sm:p-3"
      >
        <div className="text-2xl">
          Navigating Your Dubai Journey: Scout's Oasis of Expertise
        </div>
        <div className="text-lg font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
          Feeling a mix of excitement and anticipation? Scout's elite team of
          international relocation movers is your compass in the urban oasis of
          Dubai. Here's how we ensure your transition is as seamless as the
          desert horizon
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
                    Visa Mastery
                  </div>
                  <div>
                    Transforming complex UAE regulations into your gateway to
                    Dubai's opportunities. We handle every document and every
                    stamp so you can focus on your Dubai bucket list.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Home Finding Harmony
                  </div>
                  <div>
                    Whether you're drawn to the futuristic Marina skyline or the
                    palm-shaped wonders of Jumeirah, we'll find your perfect
                    Dubai address. Our local experts negotiate leases and handle
                    utilities, creating your turnkey home.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Education Excellence
                  </div>
                  <div>
                    We identify and secure spots in Dubai's world-class
                    international schools for families, aligning curricula with
                    your children's educational needs and career trajectory.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Healthcare Navigation
                  </div>
                  <div>
                    We connect you with Dubai's premium healthcare providers and
                    set up insurance and registrations to secure your well-being
                    in your new home.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Corporate Connectivity
                  </div>
                  <div>
                    Leveraging our extensive and intricate network, we
                    facilitate introductions to key business contacts,
                    co-working spaces, and industry events, jumpstarting your
                    professional life in Dubai.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Logistics Mastery
                  </div>
                  <div>
                    Our international relocation movers treat your possessions
                    like precious cargo. From packing to customs clearance, we
                    ensure your belongings arrive safely, making your new house
                    instantly feel like home.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Link
          href={"/Life_in_dubai"}
          className="bg-themeOrange p-3 rounded-full px-8 max-md:p-1 max-md:w-full max-md:text-center max-md:flex max-md:justify-center text-white"
        >
          <Text delay={0.8} text={"Explore"} ></Text>
        </Link>
      </div>
      <div className="p-16 max-lg:p-10 max-md:p-6 space-y-6 max-sm:p-3 max-lg:space-y-6 hidden">
        <div className="text-3xl font-bold text-center">
          Make the Most of Dubai
        </div>
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="p-4 bg-zinc-200 space-y-3 rounded-xl">
            <div className="text-themeOrange">
              <Ticket size={50}></Ticket>
            </div>
            <div className="text-xl font-semibold">{data[0].title}</div>
            <div>{data[0].description}</div>
          </div>
          <div className="p-4 bg-zinc-200 space-y-3 rounded-xl">
            <div className="text-themeOrange">
              <Soup size={50}></Soup>
            </div>
            <div className="text-xl font-semibold">{data[1].title}</div>
            <div>{data[1].description}</div>
          </div>
          <div className="p-4 bg-zinc-200 space-y-3 rounded-xl">
            <div className="text-themeOrange">
              <Languages size={50}></Languages>
            </div>
            <div className="text-xl font-semibold">{data[2].title}</div>
            <div>{data[2].description}</div>
          </div>
          <div className="p-4 bg-zinc-200 space-y-3 rounded-xl">
            <div className="text-themeOrange">
              <Drama size={50}></Drama>
            </div>
            <div className="text-xl font-semibold">{data[3].title}</div>
            <div>{data[3].description}</div>
          </div>
        </div>
      </div>
      <div className="flex max-lg:flex-col">
        <div className="w-1/2 bg-themeOrange relative text-white flex flex-col justify-center items-center px-20 space-y-6 max-lg:w-full max-lg:px-4 max-lg:p-4">
          <img
            className="absolute h-full -right-12 max-lg:hidden"
            src="/wave.svg"
            alt=""
          />
          <div className="text-4xl font-semibold text-left w-full max-lg:text-3xl">
            Your Dubai Ascent Begins Here
          </div>
          <div className="text-left text-xl max-lg:w-full max-lg:text-lg">
            Dubai is powering up to launch your career and lifestyle to
            unprecedented heights. Are you ready to embrace the extraordinary?
          </div>
          <div className="w-full">
            <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
              Ignite Your Dubai Journey with Scout
              <MoveUpRight></MoveUpRight>
            </button>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <img
            className="max-lg:h-96 h-[40em] object-cover max-lg:w-full w-full"
            src="/dubai4.webp"
            alt=""
          />
        </div>
      </div>
      <div ref={container4} className="flex px-16 max-md:px-6 max-lg:flex-col">
        <div className="bg-themeBlue w-2/3 rounded-xl z-[9] flex justify-center items-start p-12 gap-6 flex-col max-lg:w-full">
          <div className="text-white font-semibold text-4xl">
            <Text
              inView={inViewAdapt}
              text={"Blueprints for Your Dubai Dream"}
            ></Text>
          </div>
          <div className="text-white ">
            <Text
              inView={inViewAdapt}
              text={`Curious about crafting your ideal life in the City of Gold? Scout's Dubai experts are standing by to illuminate your path to success.`}
            ></Text>
          </div>
          <div className="w-full">
            <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
              Unlock Dubai's Potential with Scout
              <MoveUpRight></MoveUpRight>
            </button>
          </div>
        </div>
        <div className="w-1/3 -translate-x-6 max-lg:w-full max-lg:translate-x-0 max-lg:-translate-y-6">
          <img
            className="max-lg:rounded-b-xl h-[40em] w-full object-cover rounded-lg"
            src="/dubai-hero.webp"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
