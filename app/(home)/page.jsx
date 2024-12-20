/* eslint react/no-unescaped-entities: 0 */ // --> OFF
// //
"use client";
import Hero from "@/components/home/Hero";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import { Globe } from "lucide-react";
import { School } from "lucide-react";
import { Quote } from "lucide-react";
import { Paperclip } from "lucide-react";
import { House } from "lucide-react";
import { Plane } from "lucide-react";
import { Building } from "lucide-react";
import { Laptop } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const points = [
    {
      number: "10M+",
      type: "Remote professionals assisted",
    },
    {
      number: "100+",
      type: "Countries Covered",
    },
    {
      number: "98%",
      type: "Customer Satisfaction",
    },
    {
      number: "1M+",
      type: "Relocation guides downloaded",
    },
  ];
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
        "Thanks to their professional packing and moving services, our international move was smooth and stress-free. Highly recommend their home relocation services!",
      name: "John D.",
      origin: "London",

      img: "/p1.png",
      destination: "Dubai",
    },
    {
      id: 2,
      testimonial:
        "Scout made our international move effortless! From packing to customs clearance, their team handled every detail with professionalism and care. We couldn’t have asked for a smoother experience!",
      name: "Sarah M.",
      origin: "Columbo",

      img: "/p2.png",
      destination: "Amsterdam",
    },
    {
      id: 3,
      testimonial:
        "Their attention to detail and dedication to customer satisfaction truly set them apart. Scout took care of everything, so I could focus on settling into my new home and job. A fantastic service!",
      name: "Priya S.",
      origin: "Delhi",

      img: "/p3.png",
      destination: "Bangalore",
    },
  ];

  const [selectedTest, setSelectedTest] = useState(1);

  const infoArray = [
    {
      title: "Safe Global Moving",
      desc: "We move your stuff anywhere, safely, and on time.",
      img: "/3.webp",
    },
    {
      title: "Careful Packing",
      desc: "We wrap your things to keep them safe during the move.",
      img: "/2.webp",
    },
    {
      title: "Easy Paperwork",
      desc: "We handle customs and all the moving details for you.",
      img: "/bangalore2.webp",
    },
    {
      title: "Help After Moving",
      desc: "We keep helping even after you've moved in.",
      img: "/1.webp",
    },
  ];

  const locations = [
    {
      title: "Bangalore, India",
      desc: "Dive into a tech wonderland with Scout's top-notch packers and movers. We'll guide you through Bangalore's vibrant streets and living costs, making your relocation as smooth as masala chai.",
      img: "a.webp",
      link: "/bangalore",
    },
    {
      title: "Amsterdam, Netherlands",
      desc: "Let our international moving companies near me navigate you through Amsterdam's charming canals. Our extensive European network makes employee relocation a breeze in this cultural paradise.",
      img: "b.webp",
      link: "/amsterdam",
    },
    {
      title: "Dubai, UAE",
      desc: "From golden dunes to glittering skyscrapers, our moving services shine in Dubai. Scout's expertise in customs clearance and local insights ensure your UAE adventure starts without a hitch.",
      img: "c.webp",
      link: "/dubai",
    },
    // {
    //   title: "Toronto",
    //   desc: "Immerse yourself in a country known for its history and innovation.",
    //   img: "d.webp",
    // },
  ];

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

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is included in your international relocation services?",
      answer:
        "Our comprehensive relocation services include pre-move planning, professional packing, shipping, customs clearance, delivery, unpacking, and post-move support to ensure a seamless transition to your new home.",
    },
    {
      question: "How much do international movers usually charge?",
      answer:
        "Moving costs vary based on destination, belongings, and shipping method. We provide clear quotes with no surprises, ensuring straightforward pricing for your peace of mind.",
    },
    {
      question: "How does Scout handle customs for international moves?",
      answer:
        "Our services include managing all necessary paperwork and coordinating with customs officials, keeping your move on track and hassle-free.",
    },
    {
      question: "What shipping options do your international movers offer?",
      answer:
        "We offer multiple shipping options, including sea freight, air freight, and land transport. Our experts help you choose the best option based on your timeline and budget.",
    },
    {
      question: "Do you insure my belongings during the move?",
      answer:
        "Yes, we offer top-notch insurance options to keep your belongings safe from start to finish, ensuring your peace of mind throughout the move.",
    },
  ];

  function toggleFAQ(index) {
    return setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <main>
      <Hero></Hero>
      {/* <div className="points grid grid-cols-4 gap-6 bg-transparent -translate-y-12 px-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-8 max-sm:px-3">
        {points.map(({ number, type }, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: "10%",
            }}
            animate={{
              opacity: 1,
              y: "0%",
            }}
            transition={{
              delay: 0.1 * i,
              duration: 0.9,
            }}
            className="bg-white p-4 rounded-xl flex flex-col justify-center items-center gap-1 shadow-xl max-md:p-2 "
          >
            <div className="text-5xl font-semibold max-lg:text-3xl max-md:text-xl">
              {number}
            </div>
            <div className="text-lg max-md:text-base">{type}</div>
          </motion.div>
        ))}
      </div> */}
      <div className="flex flex-col justify-center items-center gap-6 p-16 bg-white max-lg:p-10">
        <div className="text-themeOrange text-3xl font-semibold max-md:text-2xl">
          Unlock Your World
        </div>
        <div className="text-2xl font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
          Craving a move that feels like magic? Scout's international moving
          companies near me transform relocation chaos into your greatest
          adventure. Our moving services don't just relocate you; they launch
          you into an extraordinary new life.
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
            Beyond Borders, <br /> Beyond Expectations
          </div>
          <div className="text-left text-xl max-lg:w-full max-lg:text-lg">
            Imagine: You're thriving in your dream home abroad, living like a
            local from day one. With Scout's elite international movers, this
            isn't a fantasy—it's your new reality. From packing your first box
            to your first local coffee, our moving services handle every detail.
          </div>
          <div className="w-full">
            <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
              Learn More About Our Services <MoveUpRight></MoveUpRight>
            </button>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <img
            className="max-lg:h-96 object-cover max-lg:w-full"
            src="/homeship.webp"
            alt=""
          />
        </div>
      </div>
      <div className="p-16 flex flex-col justify-center items-center text-center gap-6 max-lg:p-10 max-md:p-8 max-sm:p-4">
        <div className="text-3xl max-lg:text-2xl max-md:text-xl">
          Your Pre-Move Magic
        </div>
        <div className="text-xl font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
          Worried about pre-move stress? Relax. Scout's moving services handle
          all the tricky stuff so you can get excited about your new adventure.
        </div>
        <div className="grid grid-cols-4 mt-6 gap-16 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6">
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="bg-white border-2 border-themeOrange text-themeOrange p-6 rounded-full">
              <Paperclip></Paperclip>
            </div>
            <div className="">
              <div className="font-semibold">Easy Work Permits</div>
              <div>We make paperwork simple and fast.</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="bg-white border-2 border-themeOrange text-themeOrange p-6 rounded-full">
              <Building></Building>
            </div>
            <div className="">
              <div className="font-semibold">Smooth Housing</div>
              <div> We find great homes and handle all the rental details.</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="bg-white border-2 border-themeOrange text-themeOrange p-6 rounded-full">
              <Car></Car>
            </div>
            <div className="">
              <div className="font-semibold">Simple Car Stuff</div>
              <div>Need to sell your car or end a lease? We've got it.</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="bg-white border-2 border-themeOrange text-themeOrange p-6 rounded-full">
              <Plane></Plane>
            </div>
            <div className="">
              <div className="font-semibold">Stress-Free Travel</div>
              <div>We book your tickets, and you enjoy the journey.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16 flex  gap-16 max-lg:p-10 max-md:p-6 max-sm:p-3 max-lg:flex-col-reverse ">
        <div className="w-1/2 max-lg:w-full">
          <img src="/man.webp" alt="" />
        </div>
        <div className="w-1/2 my-6  space-y-6 max-lg:w-full">
          <div>
            <div className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">
              From Tourist to Insider, Instantly{" "}
            </div>
          </div>
          <div className=" space-y-4 max-lg:w-full">
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Plane size={30}></Plane>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Quick Residency
                </div>
                <div className="max-sm:text-sm">
                  We get your permits sorted without the hassle.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <Globe size={30}></Globe>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Ready-to-Go Home
                </div>
                <div className="max-sm:text-sm">
                  Your utilities are set up fast and easy.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <House size={30}></House>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Comfy Move-In
                </div>
                <div className="max-sm:text-sm">
                  We make your new place feel like home right away.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white shadow-xl p-6 rounded-xl">
              <School size={30}></School>
              <div className="">
                <div className="font-semibold text-xl max-md:text-lg max-sm:text-base">
                  Top Schools, No Stress
                </div>
                <div className="max-sm:text-sm">
                  We find and enroll your kids in great schools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16 flex flex-col justify-center items-center space-y-6  max-lg:p-10 max-md:p-6 max-sm:p-3">
        <div className="space-y-3">
          <div className="text-3xl text-center max-lg:text-2xl max-md:text-xl max-sm:text-base">
            Your Moving Wishlist, Granted!
          </div>
          {/* <div className="text-xl font-semibold text-center w-full max-lg:w-full max-lg:text-lg max-md:text-base max-sm:text-sm ">
            <strong>Our comprehensive relocation services </strong>
            cover everything from professional packing and shipping container
            options to customs clearance and post-move support, ensuring a
            seamless and stress-free international move.
          </div> */}
        </div>
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-1 max-lg:w-full">
          {infoArray.map(({ title, desc, img }) => (
            <Card key={img} title={title} desc={desc} img={img} />
          ))}
        </div>
      </div>
      <div className="p-16 flex flex-col justify-center items-center space-y-6  max-lg:p-10 max-md:p-6 max-sm:p-3">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-3xl text-center max-lg:text-2xl max-md:text-xl max-sm:text-base">
            Your New Chapter Awaits{" "}
          </div>
          <div className="text-xl font-semibold text-center w-3/4 max-lg:w-full max-lg:text-lg max-md:text-base max-sm:text-sm">
            From Bangalore's vibrant tech scene to Dubai's golden dunes and
            Amsterdam's charming canals, Scout's international moving companies
            near me unlock the door to your next great story.
          </div>
        </div>
        <div className="space-y-6 w-full">
          <div className="flex w-full gap-6 max-md:flex-col ">
            <Link
              href={locations[0].link}
              className="w-3/5 h-96 rounded-xl relative overflow-hidden max-lg:w-1/2 max-md:w-full max-md:h-72"
            >
              <img
                className="object-cover h-full w-full rounded-2xl hover:scale-125 duration-500"
                src="/homehero.webp"
                alt=""
              />
              <div className="absolute bottom-0 h-2/5 flex flex-col justify-end items-start text-white bg-gradient-to-t from-black to-transparent w-full p-5 rounded-2xl">
                <div>{locations[0].title}</div>
                <div>{locations[0].desc}</div>
              </div>
            </Link>
            <Link
              href={locations[1].link}
              className="w-2/5 h-96 rounded-xl relative overflow-hidden max-lg:w-1/2 max-md:w-full max-md:h-72"
            >
              <img
                className="object-cover h-full w-full rounded-2xl hover:scale-125 duration-500"
                src="/hero.webp"
                alt=""
              />
              <div className="absolute bottom-0 h-2/5 flex flex-col justify-end items-start text-white bg-gradient-to-t from-black to-transparent w-full p-5 rounded-2xl">
                <div>{locations[1].title}</div>
                <div>{locations[1].desc}</div>
              </div>
            </Link>
          </div>
          <Link
            href={locations[2].link}
            className="flex w-full gap-6 flex-row-reverse max-md:flex-col"
          >
            <div className="w-full h-96 rounded-xl relative overflow-hidden max-lg:w-1/2 max-md:w-full max-md:h-72">
              <img
                className="object-cover h-full w-full rounded-2xl hover:scale-125 duration-500"
                src="/cruise_s.webp"
                alt=""
              />
              <div className="absolute bottom-0 h-2/5 flex flex-col justify-end items-start text-white bg-gradient-to-t from-black to-transparent w-full p-5 rounded-2xl">
                <div>{locations[2].title}</div>
                <div>{locations[2].desc}</div>
              </div>
            </div>
            {/* <div className="w-2/5 h-96 rounded-xl relative overflow-hidden max-lg:w-1/2 max-md:w-full max-md:h-72">
              <img
                className="object-cover h-full w-full rounded-2xl hover:scale-125 duration-500"
                src="/city_s.webp"
                alt=""
              />
              <div className="absolute bottom-0 h-2/5 flex flex-col justify-end items-start text-white bg-gradient-to-t from-black to-transparent w-full p-5 rounded-2xl">
                <div>{locations[3].title}</div>
                <div>{locations[3].desc}</div>
              </div>
            </div> */}
          </Link>
        </div>
        {/* <div className="justify-center items-center flex">
          <button className="bg-themeOrange p-3 px-16 rounded-full text-white font-semibold">
            Explore More Cities
          </button>
        </div> */}
      </div>
      {/* <div className="p-16 flex flex-col justify-center items-center space-y-6  max-lg:p-10 max-md:p-6 max-sm:p-3">
        <div className="bg-[#FB654230] text-black flex flex-col justify-center items-center gap-16 p-6 rounded-xl">
          <div className="text-xl font-bold text-center">Customer Reviews</div>
          <div className="text-themeOrange">
            <Quote></Quote>
          </div>
          <div className="text-xl font-semibold w-2/3 text-center max-md:w-full">
            {testimonials.filter((x) => x.id === selectedTest)[0].testimonial}
          </div>
          <div className="text-center">
            <div>
              {testimonials.filter((x) => x.id === selectedTest)[0].name}
            </div>
            <div>
              {testimonials.filter((x) => x.id === selectedTest)[0].origin} to{" "}
              {testimonials.filter((x) => x.id === selectedTest)[0].destination}
            </div>
          </div>
          <div className="flex gap-12 items-center justify-center max-md:justify-between max-md:overflow-x-scroll max-md:py-3 noscroll">
            {testimonials.map((i) => (
              <img
                onClick={() => {
                  setSelectedTest(i.id);
                }}
                className="max-md:w-10 cursor-pointer"
                key={i.name}
                src={i.img}
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="p-16 flex flex-col justify-center items-center space-y-6  max-lg:p-10 max-md:p-6 max-sm:p-3 ">
        <h2 className="text-3xl font-bold  mb-8 max-md:w-full max-md:text-left">
          FAQs
        </h2>
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <span className="text-lg">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-16 flex flex-col justify-center items-center space-y-6  max-lg:p-10 max-md:p-6 max-sm:p-3">
        <div className="relative max-lg:p-3 ">
          <img
            className="brightness-50 max-lg:h-96  object-cover max-lg:rounded-xl"
            src="/mountain.webp"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col justify-center items-center space-y-16 max-md:space-y-6 max-md:p-12">
            <div className="text-4xl text-white font-semibold max-lg:text-2xl max-md:text-xl">
              New City, New Rules? Not with Scout.{" "}
            </div>
            <div className="text-white text-xl w-3/4 max-lg:w-full max-lg:text-sm">
              Our insider knowledge and moving services transform you from a
              wide-eyed newcomer to a savvy local faster than you can say, "I'll
              have my usual, please." As international movers, we ensure your
              new chapter starts smoothly.
            </div>
            <button className="p-3 bg-white rounded-full font-semibold">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({ title, img, desc }) {
  return (
    <div className="relative max-lg:w-full">
      <img
        className="max-lg:w-full max-lg:h-80 h-full max-lg:object-cover"
        src={img}
        alt=""
      />
      <div className="absolute backdrop-blur-md bg-[#00000060] max-lg:bg-[#ffffff90] bottom-3 w-[90%] rounded-xl p-3 left-1/2 -translate-x-1/2 text-white">
        <div>{title}</div>
        <div className="text-sm">{desc}</div>
      </div>
    </div>
  );
}
