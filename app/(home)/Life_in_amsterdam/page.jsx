import AboutWork from "@/components/amsterdam/AboutWork";
import Adapting from "@/components/amsterdam/Adapting";
import Hero from "@/components/amsterdam/Hero";
import Journey from "@/components/amsterdam/Journey";
import Amenities from "@/components/amsterdam/Amenities";

import React from "react";

const AmsterdamRelocationPage = () => {
  return (
    <div className="bg-white mt-20">
      <div className="my-16">
        <Hero />
      </div>
      <div className="my-16">
        <Journey/>
      </div>
      <div className="my-16">
        <AboutWork/>
      </div>
      <div className="my-16">
       <Adapting/>
      </div>
      <div className="my-16">
        <Amenities/>
      </div>
    </div>
  );
};

export default AmsterdamRelocationPage;
