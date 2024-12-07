"use client";

import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/AnimatedText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useEffect } from "react";
export default function Services() {
  useEffect(() => {
    (async function () {
      const LS = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LS();
    })();
  }, []);

  return (
    <div className="space-y-16 mb-16">
      <div className="hero h-[40vh] relative ">
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
            <Text delay={0.5} text={"Our Services"}></Text>
          </div>
        </div>
      </div>
      <div id="orientation">
        <Orientation />
      </div>
      <div id="eor">
        <EOR />
      </div>
      <div id="immigration">
        <Immigration />
      </div>
      <div id="culture">
        <CulturalTraining />
      </div>
      <div id="relocation">
        <Relocation />
      </div>
      <div id="housing">
        <Housing />
      </div>
      <div id="houseFinding">
        <HouseFinding />
      </div>
      <div id="schooling">
        <Schooling />
      </div>
      <div id="settling">
        <Settling />
      </div>
      <div id="tax">
        <Tax />
      </div>
      <div id="departure">
        <Departure />
      </div>
    </div>
  );
}

function Orientation() {
  return (
    <div>
      <div className="text-center font-semibold space-y-6 max-md:px-3">
        <div className="italic text-left hidden">
          From New Arrival to City Insider: Scout&apos;s Orientation Expertise
        </div>
        <div className="font-semibold text-2xl max-lg:text-lg max-md:text-base">
          The Scout Advantage: Why We&apos;re Your <br />{" "}
          <span className="text-themeOrange mx-3">Ultimate City Guides</span>
        </div>
        <div>
          Not all moving company rates include genuine local insights.
          Here&apos;s how Scout goes above and beyond:
        </div>
      </div>
      <div className="p-6 px-16 flex  gap-8 max-lg:p-10 max-md:p-6 max-sm:p-3 max-lg:flex-col-reverse ">
        <div className="w-1/2 max-lg:w-full">
          <img
            src="/bangalore3.jpg"
            className="h-[30em] object-cover rounded-xl w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 my-6  space-y-6 max-lg:w-full">
          <div className=" space-y-1 max-lg:w-full">
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl">
              <Bookmark color="#FB6542" size={30}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-xl max-md:text-lg max-sm:text-base">
                  Insider Network:{" "}
                  <span className="font-thin">
                    {" "}
                    Our team includes true locals who know the city&apos;s heart
                    and soul.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl">
              <Bookmark color="#FB6542" size={30}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-xl max-md:text-lg max-sm:text-base">
                  Tailored Approach:{" "}
                  <span className="font-thin">
                    Your orientation is customized to your unique interests and
                    needs.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl">
              <Bookmark color="#FB6542" size={30}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-xl max-md:text-lg max-sm:text-base">
                  Real-Time Updates:{" "}
                  <span className="font-thin">
                    Our city guides evolve as quickly as the cities themselves.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl">
              <Bookmark color="#FB6542" size={30}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-xl max-md:text-lg max-sm:text-base">
                  Round-the-Clock Support:{" "}
                  <span className="font-thin">
                    Lost or confused? We&apos;re always just a call away.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function EOR() {
  return (
    <div className="px-16 max-lg:px-8 max-md:px-4">
      <div className="text-center font-semibold ">
        <div className="italic text-left hidden">
          Conquer New Markets Without the Conquest: Scout&apos;s EOR Edge
        </div>
        <div className="text-2xl max-lg:text-lg max-md:text-base">
          Why Scout&apos;s EOR Support is{" "}
          <span className="text-themeOrange mx-3">Your Golden Ticket</span> to
          Global Markets
        </div>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col-reverse">
        <div className="w-1/2 flex justify-center max-lg:w-2/3">
          <img className="w-2/3" src="/eor.png" alt="" />
        </div>
        <div className="w-1/2 max-lg:w-full">
          <Accordion className="space-y-6" type="single" collapsible>
            <AccordionItem className="space-y-4" value="1">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Risk-Free Expansion
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                Imagine entering new markets with the confidence of a local
                giant, minus the legal landmines. That&apos;s the Scout
                advantage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="2">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Talent Without Borders
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                {" "}
                Hire the best, wherever they are. We handle the paperwork; you
                handle the innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="3">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Compliance on Autopilot
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                {" "}
                Sleep soundly knowing your global operations are 100% compliant,
                always.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="4">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Cultural Intelligence Boost
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                {" "}
                Blend into local business cultures like a chameleon, guided by
                our on-ground experts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
function Immigration() {
  const immigrationServices = [
    {
      title: "Dedicated Immigration Teams",
      description: "Specialists who eat, sleep, and breathe visa regulations",
    },
    {
      title: "Government Fast-Lanes",
      description: "Our established relationships smooth your path",
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor your application status anytime, anywhere",
    },
    {
      title: "Continuous Support",
      description: "From application to adaptation, we're with you all the way",
    },
  ];

  return (
    <div className="px-16 max-lg:px-8 max-md:px-4 flex flex-col justify-center items-center space-y-6">
      <div className="text-center">
        <div className="text-center font-semibold">
          <div className="italic text-left hidden">
            Cross Borders, Not Fingers: Scout&apos;s Immigration Precision
          </div>
          <div className="text-2xl">
            Why Scout Outpaces the Immigration Game
          </div>
          <div>
            While other international relocation moving companies might treat
            immigration as a side note, at Scout, it&apos;s our headline act:
          </div>
        </div>
        {/* <div>Why Scout Outpaces the Immigration Game</div>
        <div>
          While other international relocation moving companies might treat
          immigration as a side note, at Scout, it&apos;s our headline act:
        </div> */}
      </div>
      <div className="grid grid-cols-4 gap-6 text-white w-3/4 max-lg:grid-cols-1 max-lg:w-full">
        {immigrationServices.map((x) => {
          return (
            <div
              className="bg-themeOrange p-6 flex justify-center  flex-col rounded-lg text-white h-56 items-start max-lg:w-full max-lg:h-full"
              key={x.title}
            >
              <div className="font-semibold text-lg h-20 max-lg:h-full">
                {x.title}
              </div>
              <div className="text-sm ">{x.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CulturalTraining() {
  const locations = [
    {
      city: "Bangalore",
      country: "India",
      description: "Where ancient wisdom meets cutting-edge innovation",
    },
    {
      city: "Dubai",
      country: "UAE",
      description:
        "The crossroads of Middle Eastern tradition and Western business practices",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      description: "Blending Dutch pragmatism with international flair",
    },
  ];
  return (
    <div className="px-16 max-lg:px-8 max-md:px-3 space-y-3">
      <div className="text-center font-semibold italic text-left hidden">
        From Culture Clash to Culture Class: Scout&apos;s Immersion Expertise
      </div>
      <div className="px-16 space-y-8  max-lg:px-0 ">
        <div className="bg-themeBlue relative p-8 overflow-hidden rounded-lg flex  justify-center items-center gap-6 max-md:flex-col">
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
                className="absolute opacity-50 aspect-square border-2 border-themeOrange  circle"
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
                className="absolute  opacity-50 aspect-square border-2 border-themeOrange  circle"
              ></div>
            );
          })}
          <div className="w-2/3 text-white space-y-6 max-md:w-full">
            <div className="text-2xl font-semibold max-md:w-full ">
              Scout&apos;s Global Cultural <br /> Hotspots
            </div>
            <div className="space-y-6">
              <p>Our cultural expertise flourishes in these dynamic cities:</p>
              <ul className="pl-6 space-y-4">
                {locations.map((x) => {
                  return (
                    <li key={x.city}>
                      <div>
                        <div className="font-semibold">
                          {x.city}, {x.country}: {x.description}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-1/3 h-full max-md:w-full">
            <img
              className="h-full object-cover rounded-lg shadow-xl"
              src="/dubai2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Relocation() {
  const services = [
    {
      title: "Customized Move Strategies",
      description: "Tailored plans that fit your unique timeline and needs",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Stay informed about your belongings' location throughout the move",
    },
    {
      title: "Settlement Support",
      description:
        "We help you integrate into your new community, not just your new house",
    },
    {
      title: "Dedicated Coordinators",
      description:
        "Your personal point of contact, available whenever you need them",
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center space-y-6 px-16 max-lg:px-8 max-md:px-3">
      <div className="text-center space-y-3 ">
        <div className="text-center font-semibold italic text-left hidden">
          Smooth Moves, New Horizons: Scout&apos;s Moving Services Expertise
        </div>
        <div className="font-semibold text-2xl">
          The Scout Difference:{" "}
          <span className="text-themeOrange mx-3">
            Beyond Standard Local Moving Companies
          </span>
        </div>
        <div>
          While other local moving companies focus on just getting you from A to
          B, Scout offers a comprehensive relocation experience:
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 text-white w-3/4 max-lg:grid-cols-1 max-lg:w-full">
        {services.map((x) => {
          return (
            <div
              className="bg-themeOrange p-6 flex justify-center  flex-col rounded-lg text-white h-56 items-start max-lg:w-full max-lg:h-full"
              key={x.title}
            >
              <div className="font-semibold text-lg h-20 max-lg:h-full ">
                {x.title}
              </div>
              <div className="text-sm ">{x.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Housing() {
  return (
    <div className="px-16  max-lg:px-8 max-md:px-3 max-lg:space-y-6">
      <div className="text-center font-semibold ">
        <div className="italic text-left hidden">
          Home Sweet (Temporary) Home: Scout&apos;s Short-Term Rentals Mastery
        </div>
        <div className="text-2xl">
          Why Scout&apos;s EOR Support is{" "}
          <span className="text-themeOrange mx-3">Your Golden Ticket</span> to
          Global Markets
        </div>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col-reverse max-lg:gap-6">
        <div className="w-1/2 flex justify-center max-lg:w-full">
          <img className="w-2/3 max-lg:w-2/3" src="/housing.png" alt="" />
        </div>
        <div className="w-1/2 max-lg:w-full">
          <Accordion className="space-y-6" type="single" collapsible>
            <AccordionItem className="space-y-4" value="1">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Instant Nest Syndrome
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                {" "}
                Walk into fully furnished apartments near me that feel like home
                from minute one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="2">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Location, Location, Innovation
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                Prime short-term rentals near business hubs, schools, and local
                hotspots.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="3">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Flex Appeal
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                Stay in our houses for rent for weeks or months - we bend over
                backward to fit your timeline.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="4">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Live Like You Mean It
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                Immerse yourself in authentic local living from day one in our
                carefully selected apartments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function HouseFinding() {
  const locations = [
    {
      city: "Bangalore",
      country: "India",
      description:
        "From tech-hub adjacent villas to charming colonial bungalows",
    },
    {
      city: "Dubai",
      country: "UAE",
      description:
        "Luxurious penthouses and family-friendly compounds in the city of gold",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      description:
        "Canal-side apartments and historic townhouses in the Venice of the North.",
    },
  ];
  return (
    <div className=" space-y-3 px-16 max-lg:px-8 max-md:px-3">
      <div className="text-center font-semibold italic text-left hidden">
        From House Hunters to Home Winners: Scout&apos;s Property Prowess
      </div>
      <div className="px-16 space-y-8  max-md:px-0 ">
        <div className="bg-themeBlue relative p-8 overflow-hidden rounded-lg flex  justify-center items-center gap-6 max-lg:flex-col">
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
                className="absolute opacity-50 aspect-square border-2 border-themeOrange  circle"
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
                className="absolute  opacity-50 aspect-square border-2 border-themeOrange  circle"
              ></div>
            );
          })}
          <div className="w-2/3 text-white space-y-6 max-lg:w-full">
            <div className="text-2xl font-semibold max-lg:w-full">
              Where Scout Unlocks Doors to Your Future
            </div>
            <div className="space-y-6">
              <p>
                Our house-finding expertise shines in these dynamic markets:
              </p>
              <ul className="pl-6 space-y-4">
                {locations.map((x) => {
                  return (
                    <li key={x.city}>
                      <div>
                        <div className="font-semibold">
                          {x.city}, {x.country}: {x.description}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-1/3 h-full max-lg:w-full max-lg:h-72">
            <img
              className="h-full max-lg:w-full object-cover rounded-lg shadow-xl "
              src="/amsterdam2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Schooling() {
  return (
    <div>
      <div className="text-center font-semibold space-y-6">
        <div className="italic italic text-left hidden">
          Class Acts to Future Facts: Scout&apos;s School Finder
        </div>
        <div className="font-semibold text-2xl max-md:text-xl">
          Beyond Grades and Rankings: Scout&apos;s{" "}
          <span className="text-themeOrange mx-3">Educational Insight</span>
        </div>
        <div>
          Not all moving company rates include genuine local insights.
          Here&apos;s how Scout goes above and beyond:
        </div>
      </div>
      <div className="p-6 px-16 flex  gap-8 max-lg:p-10 max-md:p-6 max-sm:p-3 max-lg:flex-col-reverse ">
        <div className="w-1/2 max-lg:w-full">
          <img
            src="/bangalore3.jpg"
            className="h-[30em] object-cover rounded-xl w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 my-6  space-y-6 max-lg:w-full">
          <div className=" space-y-1 max-lg:w-full">
            <div className="flex items-center justify-start gap-6  bg-white  p-6 rounded-xl max-lg:p-2">
              <Bookmark color="#FB6542" size={45}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-lg max-md:text-lg max-sm:text-base">
                  Curriculum Matchmakers:{" "}
                  <span className="font-thin">
                    We align educational approaches with your child&apos;s
                    learning style, whether it&apos;s private schools near me or
                    specialized academies
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl max-lg:p-2">
              <Bookmark color="#FB6542" size={45}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-lg max-md:text-lg max-sm:text-base">
                  Extracurricular Excellence:{" "}
                  <span className="font-thin">
                    {" "}
                    Discover opportunities from debate clubs to summer programs
                    for high school students that complement classroom learning.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl max-lg:p-2">
              <Bookmark color="#FB6542" size={45}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-lg max-md:text-lg max-sm:text-base">
                  Future-Focused Planning:{" "}
                  <span className="font-thin">
                    {" "}
                    We consider long-term goals, preparing for college
                    applications and beyond, starting from the best high schools
                    near me.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 bg-white  p-6 rounded-xl max-lg:p-2">
              <Bookmark color="#FB6542" size={45}></Bookmark>
              <div className="text-themeBlue font-semibold">
                <div className=" text-lg max-md:text-lg max-sm:text-base">
                  Cultural Integration Experts:{" "}
                  <span className="font-thin">
                    {" "}
                    Ensure your child thrives both academically and socially in
                    their new school environment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settling() {
  return (
    <div className=" px-16 max-lg:px-8 max-md:px-3 max-lg:space-y-6">
      <div className="text-center font-semibold ">
        <div className="italic text-left hidden">
          Instant Insider: Scout&apos;s Settling Solutions
        </div>
        <div className="text-2xl">
          The Settling Equation: Scout&apos;s Formula for
          <span className="text-themeOrange mx-3">Feeling at Home</span>
        </div>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col-reverse max-lg:gap-6">
        <div className="w-1/2 flex justify-center max-lg:w-full">
          <img className="w-2/3 " src="/eor2.png" alt="" />
        </div>
        <div className="w-1/2 max-lg:w-full">
          <Accordion className="space-y-6" type="single" collapsible>
            <AccordionItem className="space-y-4" value="1">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Local Lingo Lessons
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                We&apos;ll have you chatting like a local before your first
                coffee shop visit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="2">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Neighborhood Know-How
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                From the best bakeries to hidden parks, we&apos;ll make you an
                area expert in no time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="3">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Culture Crash Course
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                Avoid faux pas and embrace local customs with our insider tips.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="space-y-4" value="4">
              <AccordionTrigger className="bg-zinc-100 px-3 font-bold">
                Social Circle Starters
              </AccordionTrigger>
              <AccordionContent className="pl-12">
                We&apos;ll connect you with like-minded locals and expat groups.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function Tax() {
  const taxServices = [
    {
      title: "Global Vision, Local Precision",
      description:
        "Our income tax preparer experts blend international know-how with city-specific insights",
    },
    {
      title: "Real-Time Tax Tracking",
      description:
        "Monitor your tax position as easily as checking your social media",
    },
    {
      title: "Proactive Planning",
      description:
        "Our advance income tax strategies keep you ahead of the curve",
    },
    {
      title: "Expat Tax Expertise",
      description: "Tailored solutions for the globally mobile professional",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center space-y-6 px-16 max-lg:px-8 max-md:px-3">
      <div className="text-center">
        <div className="text-center font-semibold ">
          <div className="italic text-left hidden">
            Cross Borders, Not Fingers: Scout&apos;s Immigration Precision
          </div>
          <div className="text-2xl max-lg:text-xl max-md:text-md">
            Why Scout Outpaces the Immigration Game
          </div>
          <div>
            While other international relocation moving companies might treat
            immigration as a side note, at Scout, it&apos;s our headline act:
          </div>
        </div>
        {/* <div>Why Scout Outpaces the Immigration Game</div>
        <div>
          While other international relocation moving companies might treat
          immigration as a side note, at Scout, it&apos;s our headline act:
        </div> */}
      </div>
      <div className="grid grid-cols-4 gap-6 text-white w-3/4 max-lg:w-full max-lg:grid-cols-1">
        {taxServices.map((x) => {
          return (
            <div
              className="bg-themeOrange p-6 flex justify-center  flex-col rounded-lg text-white h-56 items-start max-lg:w-full max-lg:h-full"
              key={x.title}
            >
              <div className="font-semibold text-lg h-20 max-lg:h-full">
                {x.title}
              </div>
              <div className="text-sm ">{x.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Departure() {
  return (
    <div className="flex max-lg:flex-col">
      <div className="w-1/6 max-lg:w-full">
        <img className="object-cover h-full " src="/amsterdam3.jpg" alt="" />
      </div>
      <div className="w-3/6 max-lg:w-full bg-themeBlue p-6 text-white justify-center items-center flex flex-col gap-6">
        <div className="text-3xl font-semibold italic text-left hidden">
          Ready to Turn Your Departure into a Grand Opening?
        </div>
        <div>
          Don&apos;t let departure day drama dim your relocation excitement. Let
          Scout transform your takeoff into a triumph.
        </div>
        <div className="w-full">
          <button className="text-themeOrange bg-white p-4 px-7 flex items-center justify-center gap-4 rounded-full font-semibold">
            Launch Your Legendary Departure
            <MoveUpRight></MoveUpRight>
          </button>
        </div>
      </div>
      <div className="w-2/6 max-lg:w-full">
        <img src="/amsterdam3.jpg" alt="" />
      </div>
    </div>
  );
}
