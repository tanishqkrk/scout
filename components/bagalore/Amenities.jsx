"use client";

import { useRef, useState } from "react";
import Text from "../AnimatedText";
import { useInView } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

export default function Amenities() {
  const amen = [
    // {
    //   text: "Healthcare",
    //   emoji: "🏥",
    //   description:
    //     "With world-class hospitals like Manipal Hospital and Fortis Healthcare, Bangalore ensures you and your family’s health is in safe hands..",
    //   image: "/hospital.webp",
    // },
    // {
    //   text: "Shopping & Essentials",
    //   emoji: "🛍️",
    //   description: "Access local shopping centers and essential goods.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "Nightlife",
    //   emoji: "🕺",
    //   description: "Discover the best nightlife spots for a fun evening out.",
    //   image: "/hospital.webp",
    // },
    // {
    //   text: "Cultural Spots",
    //   emoji: "👀",
    //   description: "Explore cultural landmarks and must-see locations.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "Weekend Escapes",
    //   emoji: "🚗",
    //   description: "Plan weekend trips to nearby getaways and scenic escapes.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "After-Work Activities",
    //   emoji: "🍻",
    //   description:
    //     "Unwind with after-work activities like dining and socializing.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "Weekend Hangouts",
    //   emoji: "😆",
    //   description: "Find the best spots for weekend relaxation and fun.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "Daily Conveniences",
    //   emoji: "🍒",
    //   description:
    //     "Locate daily conveniences such as grocery stores and services.",
    //   image: "/shopping.webp",
    // },
    // {
    //   text: "Community & Social Life",
    //   emoji: "👫",
    //   description: "Engage with the community and enjoy social activities.",
    //   image: "/shopping.webp",
    // },
    {
      text: "Healthcare",
      emoji: "🏥",
      description: "With world-class hospitals like Manipal Hospital and Fortis Healthcare, Bangalore ensures you and your family's health is in safe hands.",
      image: "/Hospital-Bengaluru.webp",
      details: [
        { label: " ", value: "Satisfaction %" },
        { label: "Medical Staff Skill", value: "72.55% - High" },
        { label: "Diagnosis Equipment", value: "75.64% - High" },
        { label: "Staff Friendliness", value: "67.87% - High" },
        { label: "Cost Satisfaction", value: "47.81% - Moderate" }
      ]
    },
    {
      text: "Restaurants",
      emoji: "🍽️",
      description: "Explore the diverse and affordable dining options in Bangalore",
      image: "/Restaurant-Bengaluru.webp",
      details: [
        { label: "Inexpensive Restaurant Meal", value: "₹120-600" },
        { label: "Mid-range Restaurant (3-course)", value: "₹1,000-4,000" },
        { label: "McMeal at McDonald's", value: "₹300-500" },
        { label: "Domestic Beer (0.5L)", value: "₹150-390" },
        { label: "Cappuccino", value: "₹70-400" },
        { label: "Coke/Pepsi (0.33L)", value: "₹25-60" }
      ]
    },
    {
      text: "Housing",
      emoji: "🏡",
      description: "Discover affordable and diverse housing options across Bangalore",
      image: "/Housing-Bengaluru.webp",
      details: [
        { label: "1 Bedroom Apartment (City Centre)", value: "₹18,000-40,000" },
        { label: "1 Bedroom Apartment (Outside Centre)", value: "₹10,000-25,000" },
        { label: "3 Bedroom Apartment (City Centre)", value: "₹50,000-100,000" },
        { label: "Price per Sq Meter (City Centre)", value: "₹129,167-376,737" },
        { label: "Average Monthly Salary (After Tax)", value: "₹95,902" }
      ]
    },
     {
      text: "Transportation",
      emoji: "🚗",
      description: "Navigate Bangalore with ease through diverse transportation options",
      image: "/Transportation-Bengaluru.webp",
      details: [
        { label: "One-way Local Transport Ticket", value: "₹30-100" },
        { label: "Monthly Pass (Regular Price)", value: "₹1,000-3,000" },
        { label: "Taxi Start (Normal Tariff)", value: "₹60-200" },
        { label: "Taxi 1 km (Normal Tariff)", value: "₹20-50" },
        { label: "Taxi 1-hour Waiting (Normal Tariff)", value: "₹100-300" },
        { label: "Gasoline (1 liter)", value: "₹100-110" },
        { label: "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)", value: "₹1,000,000-1,800,000" },
        { label: "Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)", value: "₹1,800,000-2,600,000" }
      ]
    },
    
    {
      text: "Schools",
      emoji: "🏫",
      description: "Quality educational options for families in Bangalore",
      image: "/Schools-Bengaluru.webp",
      details: [
        { label: "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child", value: "₹10,464.81" },
        { label: "International Primary School, Yearly for 1 Child	", value: "₹306,900.00" },
       
      ]
    },
    {
      text: "Sports & Leisure",
      emoji: "🏸",
      description: "Active lifestyle and recreational opportunities in Bangalore",
      image: "/Gym-Bengaluru.webp",
      details: [
        { label: "Fitness Club (Monthly)", value: "₹1,000-4,500" },
        { label: "Tennis Court Rent (Weekend Hour)", value: "₹250-600" },
        { label: "Cinema Ticket", value: "₹300-600" },
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
              "Navigating a new country can be daunting. SCOUT provides comprehensive in-country assistance to ensure your transition to Bangalore is seamless and stress-free."
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