"use client";

import { useRef, useState } from "react";
import Text from "../AnimatedText";
import { useInView } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

export default function Amenities() {
  const amen = [
    {
      text: "Healthcare",
      emoji: "🏥",
      description: "With world-class healthcare facilities, Amsterdam ensures comprehensive medical support for residents and expats.",
      image: "/Amsterdam-Hospital.jpg",
      details: [
        { label: "Medical Staff Skill", value: "79.65% - High" },
        { label: "Diagnosis Equipment", value: "92.40% - Very High" },
        { label: "Staff Friendliness", value: "81.76% - Very High" },
        { label: "Cost Satisfaction", value: "69.65% - High" }
      ]
    },
    {
      text: "Restaurants",
      emoji: "🍽️",
      description: "Explore the diverse and vibrant dining scene in Amsterdam",
      image: "/Amsterdam-Restaurant.jpg",
      details: [
        { label: "Inexpensive Restaurant Meal", value: "€13.00-30.00" },
        { label: "Mid-range Restaurant (3-course)", value: "€70.00-120.00" },
        { label: "McMeal at McDonald's", value: "€13.30" },
        { label: "Domestic Beer (0.5L)", value: "€4.00-8.00" },
        { label: "Imported Beer (0.33L)", value: "€5.00-8.00" },
        { label: "Cappuccino", value: "€2.00-5.00" },
        { label: "Coke/Pepsi (0.33L)", value: "€2.00-4.00" },
        { label: "Water (0.33L)", value: "€2.00-4.00" }
      ]
    },
    {
      text: "Housing",
      emoji: "🏡",
      description: "Discover housing options in Amsterdam's dynamic real estate market",
      image: "/Amsterdam-Housing.jpg",
      details: [
        { label: "1 Bedroom Apartment (City Centre)", value: "€1,985.56" },
        { label: "1 Bedroom Apartment (Outside Centre)", value: "€1,659.36" },
        { label: "3 Bedroom Apartment (City Centre)", value: "€3,496.67" },
        { label: "Price per Sq Meter (City Centre)", value: "€9,523.87" },
        { label: "Average Monthly Salary (After Tax)", value: "€4,061.47" }
      ]
    },
    {
      text: "Transportation",
      emoji: "🚗",
      description: "Navigate Amsterdam with ease through diverse transportation options",
      image: "/Amsterdam-Transportation.webp",
      details: [
        { label: "One-way Local Transport Ticket", value: "€3.40" },
        { label: "Monthly Pass", value: "€81.60" },
        { label: "Taxi Start", value: "€4.00" },
        { label: "Taxi 1 km", value: "€2.40" },
        { label: "Gasoline (1 liter)", value: "€1.99" },
        { label: "Volkswagen Golf (New Car)", value: "€33,700.00" }
      ]
    },
    {
      text: "Schools",
      emoji: "🏫",
      description: "Quality educational options for families in Amsterdam",
      image: "/Amsterdam-School.jpg",
      details: [
        { label: "Preschool (Monthly)", value: "€2,265.22" },
        { label: "International Primary School (Yearly)", value: "€13,124.41" }
      ]
    },
    {
      text: "Sports & Leisure",
      emoji: "🏸",
      description: "Active lifestyle and recreational opportunities in Amsterdam",
      image: "/Amsterdam-Sports.webp",
      details: [
        { label: "Fitness Club (Monthly)", value: "€58.97" },
        { label: "Tennis Court Rent (Weekend Hour)", value: "€23.04" },
        { label: "Cinema Ticket", value: "€14.00" }
      ]
    }
  ];

  const [selected, setSelected] = useState("Healthcare");
  const container = useRef();
  const inView = useInView(container);

  return (
    <div
      ref={container}
      className="px-16 max-mg:px-6 max-md:px-6 space-y-12 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold text-center">
          <Text inView={inView} text={"Life Beyond Work"}></Text>
        </div>
        <div className="text-base text-zinc-600 text-center w-2/3 max-md:w-full">
          <Text
            inView={inView}
            text={
              "Navigating a new country can be daunting. SCOUT provides comprehensive in-country assistance to ensure your transition to Amsterdam is seamless and stress-free."
            }
          ></Text>
        </div>
      </div>

      <div className="flex flex-wrap w-2/3 justify-center items-center gap-6 max-lg:overflow-x-scroll max-lg:gap-2 max-lg:flex-nowrap max-lg:w-screen max-lg:justify-start max-lg:px-6 noscroll">
        {amen.map(({ text, emoji }, i) => (
          <motion.button
            key={text}
            transition={{ delay: 0.2 * i }}
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: inView ? "0%" : "10%", opacity: inView ? 1 : 0 }}
            onClick={() => setSelected(text)}
            style={{
              background: selected === text ? "#FB6542" : "transparent",
              color: selected === text ? "white" : "#FB6542",
              borderColor: "#FB6542"
            }}
            className="p-3 rounded-full px-5 border-2 font-semibold duration-300 hover:bg-[#FB6542]/10 max-lg:w-fit max-lg:p-2 max-lg:px-4 max-lg:flex flex items-center space-x-2"
          >
            <p className="whitespace-nowrap">{text}</p> 
            <p>{emoji}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {amen?.map((a, i) => {
          if (a.text === selected) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                className="flex justify-center items-center gap-16 w-full max-lg:gap-5 max-lg:flex-col-reverse"
              >
                <div className="w-2/3 max-lg:w-full h-fit">
                  <img
                    className="h-96 w-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    src={a.image}
                    alt={a.text}
                  />
                </div>
                <div className="w-2/3 flex flex-col gap-4 max-lg:w-full max-lg:text-center">
                  <div className="text-3xl font-bold text-[#FB6542]">{a.text}</div>
                  <div className="text-zinc-700 text-lg leading-relaxed">{a.description}</div>
                  {a.details && (
                   <div className="mt-4 bg-white shadow-lg border border-gray-200/50 overflow-hidden">
                   <table className="w-full border-collapse">
                     <tbody>
                       {a.details.map((detail, index) => (
                         <tr 
                           key={index} 
                           className={`
                             transition-all duration-300 ease-in-out
                             hover:bg-[#FB6542]/5 
                             border-b last:border-b-0 border-[#FB6542]/10
                             ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                           `}
                         >
                           <td className="py-3 px-5 text-zinc-600">{detail.label}</td>
                           <td className="py-3 px-5 font-semibold text-[#FB6542] text-right">
                             {detail.value}
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
                  )}
                </div>
              </motion.div>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </div>
  );
}