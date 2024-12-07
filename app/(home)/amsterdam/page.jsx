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
export default function Amsterdam() {
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
        "Scout made our move from Bangladesh to Amsterdam seamless. They helped us find a perfect home, navigate essential services, and made sure we felt welcome and supported throughout the process. Thanks to them, we’re happily settled in our new city!",
      name: "Ahsan Rahman & Family",
      origin: "Bangladesh",
      img: "/p1.png",
      destination: "Amsterdam",
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
    //   destination: "Amsterdam",
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
      title: "Cafe",
      description: `Master the art of "gezelligheid" (coziness) in a brown café`,
    },
    {
      title: "Fun",
      description:
        "Debate startup strategies while floating in a hot tub boat (yes, it's a thing)",
    },
    {
      title: "Networking",
      description:
        "Turn King's Day into your personal networking event (orange attire required).",
    },
    {
      title: "Cuisine",
      description:
        "Become a regular at the Foodhallen because why choose one cuisine when you can have them all?",
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
        "Amsterdam is home to some of India's finest healthcare facilities, including renowned institutions like Manipal Hospitals and Fortis Healthcare. With cutting-edge technology, top-tier medical professionals, and a commitment to patient care, Amsterdam offers a robust healthcare system that ensures you and your loved ones receive the best possible treatment and support.",
      image: "/hospital.webp",
    },
    {
      text: "Night Life",
      emoji: "🎶",
      description:
        "Amsterdam boasts a vibrant nightlife with lively pubs, live music venues, and rooftop bars that make the city come alive after dark.",
      image: "/nightlife.webp",
    },
    {
      text: "Theme Parks",
      emoji: "🎢",
      description:
        "Enjoy thrilling rides and family-friendly attractions at Amsterdam’s top theme parks, like Wonderla and Fun World.",
      image: "/theme.webp",
    },
    {
      text: "Gardens & Public Spaces",
      emoji: "🌿",
      description:
        "Amsterdam’s lush gardens, such as Lalbagh and Cubbon Park, offer serene escapes for nature lovers and those looking to relax.",
      image: "/garden.webp",
    },
    {
      text: "Museums",
      emoji: "🏛️",
      description:
        "Explore Amsterdam’s rich history and culture through its diverse museums, including the Government Museum and Visvesvaraya Industrial & Technological Museum.",
      image: "/museum.webp",
    },
    {
      text: "Gastronomy",
      emoji: "🍽️",
      description:
        "From traditional South Indian dishes to international cuisine, Amsterdam is a food lover’s paradise with a diverse culinary scene.",
      image: "/food.webp",
    },
    {
      text: "Adventure Tours",
      emoji: "⛰️",
      description:
        "Experience the thrill of adventure with activities like trekking, rock climbing, and paragliding in and around Amsterdam’s scenic landscapes.",
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
            src={"/amsterdam2.webp"}
            fill
            className="brightness-[30%] object-cover"
          ></Image>
        </motion.div>
        <div className="absolute w-full h-full flex justify-center items-center flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999999] text-white gap-6 select-none px-16 max-md:px-6 max-md:gap-3">
          <div className="text-center text-4xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-xl">
            <Text
              delay={0.5}
              text={"Amsterdam: Where Canals Meet Career Peaks"}
            ></Text>
          </div>

          <div className="text-center text-2xl font-semibold max-lg:text-4xl max-md:text-2xl max-md:text-center max-sm:text-xl ">
            <Text
              delay={0.5}
              text={"Pedal into Your Future with Scout's Amsterdam Express"}
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
        <div className="bg-themeBlue relative p-8 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 py-24 ">
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

          <div className=" text-white text-center w-2/4 text-xl italic">
            Imagine cruising down a picturesque canal, your laptop bag slung
            over your bicycle. That important client call? You're taking it from
            a 17th-century cafe. Welcome to Amsterdam, where work-life balance
            isn't a perk—it's a way of life. Ready to trade rush hour for canal
            hour? Scout's got your ticket to ride.
          </div>
        </div>
      </div>
      <div
        ref={container2}
        className="p-16 flex  gap-16 max-lg:p-10 max-md:p-6 max-sm:p-3 max-lg:flex-col-reverse "
      >
        <div className="w-1/2 max-lg:w-full">
          <img
            src="/amsterdam3.jpg"
            className="h-[30em] object-cover rounded-xl w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 my-6  space-y-6 max-lg:w-full">
          <mdiv>
            <div className="text-xl">Your travel guide</div>
            <div className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">
              Why Amsterdam Will Blow Your Mind
            </div>
          </mdiv>
          <div className=" space-y-4 max-lg:w-full">
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Plane size={30}></Plane>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Startup Paradise:
                </div>
                <div className="max-sm:text-sm">
                  Silicon Canals isn't just a cute nickname—it's your new
                  playground
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Globe size={30}></Globe>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Cultural Kaleidoscope
                </div>
                <div className="max-sm:text-sm">
                  Where else can you brainstorm at a Van Gogh exhibit?
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <House size={30}></House>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Green Commutes
                </div>
                <div className="max-sm:text-sm">
                  Bike lanes {">"} traffic lanes. Your carbon footprint just got
                  smaller
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <School size={30}></School>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Work to Live, Not Live to Work
                </div>
                <div className="max-sm:text-sm">
                  4-day workweeks? Yes, please!
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
          Your Amsterdam Upgrade: Scout's Your Inside Connection
        </div>
        <div className="text-lg font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
          Feeling a mix of excitement and butterflies about your Amsterdam move?
          Take a deep breath. Scout, your premier international moving company,
          is here to transform your relocation into a perfect journey. Here's
          how we craft your Amsterdam adventure with precision
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
                    Home Sweet Home-finder
                  </div>
                  <div>
                    Whether you dream of a canal view or a trendy loft, we'll
                    find your perfect Amsterdam pad faster than you can say
                    "gezellig."
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Green Light Go-Getter
                  </div>
                  <div>
                    We'll set you up with everything from bike rentals to tram
                    cards. Your carbon footprint will be so small that you'll
                    basically be floating.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Culture Crash Course
                  </div>
                  <div>Culture Crash Course</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Workplace Wizard
                  </div>
                  <div>
                    Whether you're joining a startup or a multinational, we'll
                    help you navigate work permits and set up your home office.
                    Dutch work-life balance, here you come!
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-themeOrange rounded-xl p-3 h-72 max-lg:h-full max-lg:justify-center flex flex-col justify-center items-center text-white gap-3">
                  <div className="text-xl text-white font-semibold ">
                    Friend Finder
                  </div>
                  <div>
                    From expat meetups to local sports clubs, we'll connect you
                    to Amsterdam's vibrant social scene. Who knows? Your new
                    best friend might be a message away.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="p-16 max-lg:p-10 max-md:p-6 space-y-6 max-sm:p-3 max-lg:space-y-6">
        <div className="text-3xl font-bold text-center">
          Your Amsterdam Bucket List (Warning: Highly Addictive)
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
            From Packing to Proosten: Scout's Got You Covered
          </div>
          <div className="text-left text-xl max-lg:w-full max-lg:text-lg">
            As the corporate relocation experts, Scout treats your move like a
            Dutch masterpiece. From wrapping your electronics to navigating
            customs, we've got it all framed perfectly. Your job? Start
            practicing your Dutch "G" sound. It's harder than you think!
          </div>
          <div className="w-full hidden">
            <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
              Explore Now <MoveUpRight></MoveUpRight>
            </button>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <img
            className="max-lg:h-96 h-[40em] object-cover max-lg:w-full"
            src="/amsterdam4.webp"
            alt=""
          />
        </div>
      </div>
      <div ref={container4} className="flex px-16 max-md:px-6 max-lg:flex-col">
        <div className="bg-themeBlue w-2/3 rounded-xl z-[9] flex justify-center items-start p-12 gap-6 flex-col max-lg:w-full">
          <div className="text-white font-semibold text-4xl">
            <Text
              inView={inViewAdapt}
              text={"Your Amsterdam Chapter Awaits: Will You Write It?"}
            ></Text>
          </div>
          <div className="text-white ">
            <Text
              inView={inViewAdapt}
              text={`The canals are calling, the startups are buzzing, and your future is knocking. Amsterdam isn't just a city—it's your next big break. Ready to answer?`}
            ></Text>
          </div>
          <div className="w-full ">
            <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
              Craft Your Amsterdam Story with Scout<MoveUpRight></MoveUpRight>
            </button>
          </div>
        </div>
        <div className="w-2/3 -translate-x-6 max-lg:w-full max-lg:translate-x-0 max-lg:-translate-y-6">
          <img
            className="max-lg:rounded-b-xl h-[40em] w-full object-cover rounded-lg"
            src="/amsterdam-hero.webp"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
