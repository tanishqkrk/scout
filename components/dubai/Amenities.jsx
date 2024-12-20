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
      description: "Dubai offers world-class healthcare with advanced medical facilities and high patient satisfaction.",
      image: "/Dubai-Hospital.jpg",
      details: [
        { label: " ", value: "Satisfaction %" },
        { label: "Skill and Competency of Medical Staff", value: "65.71% - High" },
        { label: "Speed in Completing Examinations", value: "78.51% - High" },
        { label: "Diagnosis Equipment", value: "87.93% - Very High" },
        { label: "Accuracy in Reports", value: "72.84% - High" },
        { label: "Staff Friendliness", value: "80.54% - Very High" },
        { label: "Responsiveness", value: "70.81% - High" },
        { label: "Cost Satisfaction", value: "44.61% - Moderate" },
        { label: "Location Convenience", value: "81.92% - Very High" }
      ]
    },
    {
      text: "Restaurants",
      emoji: "🍽️",
      description: "Explore diverse dining options in Dubai with a mix of local and international cuisines",
      image: "/Dubai-Restaurant.jpg",
      details: [
        { label: "Inexpensive Restaurant Meal", value: "41.64 AED" },
        { label: "Mid-range Restaurant (3-course)", value: "282.71 AED" },
        { label: "McMeal at McDonald's", value: "35.00 AED" },
        { label: "Domestic Beer (0.5L)", value: "45.00 AED" },
        { label: "Cappuccino", value: "21.57 AED" },
        { label: "Coke/Pepsi (0.33L)", value: "4.84 AED" }
      ]
    },
    {
      text: "Housing",
      emoji: "🏡",
      description: "Discover diverse housing options across Dubai's vibrant neighborhoods",
      image: "/Dubai-Housing.jpg",
      details: [
        { label: "1 Bedroom Apartment (City Centre)", value: "8,224.64 AED" },
        { label: "1 Bedroom Apartment (Outside Centre)", value: "5,250.65 AED" },
        { label: "3 Bedroom Apartment (City Centre)", value: "15,923.05 AED" },
        { label: "Price per Sq Meter (City Centre)", value: "23,136.30 AED" },
        { label: "Average Monthly Salary (After Tax)", value: "13,205.38 AED" }
      ]
    },
    {
      text: "Transportation",
      emoji: "🚗",
      description: "Navigate Dubai with efficient and modern transportation options",
      image: "/Dubai-Transport.jpeg",
      details: [
        { label: "One-way Local Transport Ticket", value: "7.00 AED" },
        { label: "Monthly Pass", value: "345.00 AED" },
        { label: "Taxi Start (Normal Tariff)", value: "12.00 AED" },
        { label: "Taxi 1 km", value: "2.70 AED" },
        { label: "Taxi 1-hour Waiting", value: "30.00 AED" },
        { label: "Gasoline (1 liter)", value: "3.08 AED" }
      ]
    },
    {
      text: "Schools",
      emoji: "🏫",
      description: "Quality educational options for families in Dubai",
      image: "/Dubai-Schools.webp",
      details: [
        { label: "Preschool (Monthly, Private)", value: "3,052.22 AED" },
        { label: "International Primary School (Yearly)", value: "48,491.00 AED" }
      ]
    },
    {
      text: "Sports & Leisure",
      emoji: "🏸",
      description: "Active lifestyle and recreational opportunities in Dubai",
      image: "/Dubai-Sports.jpg",
      details: [
        { label: "Fitness Club (Monthly)", value: "290.73 AED" },
        { label: "Tennis Court Rent (Weekend Hour)", value: "163.46 AED" },
        { label: "Cinema Ticket", value: "50.00 AED" },
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
              "Navigating a new country can be daunting. SCOUT provides comprehensive in-country assistance to ensure your transition to Dubai is seamless and stress-free."
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