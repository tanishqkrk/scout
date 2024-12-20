"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Text from "../AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Journey() {
  const container = useRef();
  const inView = useInView(container);
  
  // State to track expanded slides
  const [expandedSlides, setExpandedSlides] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  // Function to toggle slide expansion
  const toggleSlideExpansion = (index) => {
    setExpandedSlides(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Slide content components with expansion
  const SlideContent = ({ title, children, index }) => {
    const isExpanded = expandedSlides[index];
    
    return (
      <div className="bg-themeOrange rounded-xl p-4 h-auto max-lg:h-full flex flex-col justify-start items-center text-white">
        <div className="text-xl text-white font-semibold mb-3">
          {title}
        </div>
        <div className={`text-sm text-left px-2 ${!isExpanded ? 'max-h-48 overflow-hidden relative' : ''}`}>
          {children}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-themeOrange to-transparent"></div>
          )}
        </div>
        <button 
          onClick={() => toggleSlideExpansion(index)}
          className="mt-2 px-4 py-1 bg-white text-themeOrange rounded-full hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'See More'}
        </button>
      </div>
    );
  };

  return (
    <div
      ref={container}
      className="p-16 flex flex-col justify-center items-center text-center gap-6 bg-[#FB654220] max-lg:p-10 max-md:p-6 max-sm:p-3"
    >
      <div className="text-2xl">Your Dubai Virtual Work Visa Journey</div>
      <div className="text-lg font-semibold text-center w-3/4 max-md:w-full max-md:text-base">
        Comprehensive guide to obtaining a Virtual Work Visa in Dubai
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
          >
            <SwiperSlide>
              <SlideContent title="Virtual Work Visa Eligibility" index={0}>
                <p>People of any nationality can apply for a Virtual Work Visa if they:</p>
                <ul className="list-disc pl-5 my-2">
                  <li>Are employed by a non-UAE company, with a contract of at least one year.</li>
                  <li>Can prove they are able to do their work remotely (eg an employment contract, or letter from their employer).</li>
                  <li>Earn a salary of at least US$3,500 (AED12,856) per month, or the equivalent in other currencies.</li>
                </ul>
                <p>Applicants of some nationalities may also be asked for further documents or information, and may be charged additional fees.</p>
                <p className="font-bold mt-2">Note that applying for the Virtual Work Visa does not guarantee that residency will be granted.</p>
              </SlideContent>
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent title="Visa Costs" index={1}>
                <p>Fees for the Virtual Work Visa depend on where you are applying from, any extra services required and if you need to provide additional documents.</p>
                <p className="my-2">If you are applying from outside Dubai, the base fees as of August 2024 total US$101 (AED372.50), including VAT.</p>
                <p>Note that applications for the Virtual Work Visa can also be made in Dubai, subject to additional fees. The current cost of applying for a Virtual Work visa via AMER government service centres in Dubai is US$334 (AED1,225.90), including VAT.</p>
                <p className="font-bold mt-2">Fees are subject to change – please check the current costs before starting your application.</p>
              </SlideContent>
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent title="Before You Apply" index={2}>
                <p>You should make sure you have everything you need before you start the application process. In order to apply, you will need to provide the following:</p>
                <ul className="list-disc pl-5 my-2">
                  <li>Passport with a minimum of six months validity (it is recommended to have a passport with well over a year&apos;s validity, to avoid having to renew it while in Dubai).</li>
                  <li>Health insurance, valid for the UAE for at least one year – this can be travel insurance, as long as it includes the necessary cover.</li>
                  <li>Proof of employment from a current employer with a minimum one-year contract, including a statement that your work can be done remotely.</li>
                  <li>Proof of salary of at least US$3,500 per month (or equivalent).</li>
                  <li>Bank statements and other personal documents (see below).</li>
                </ul>
                <p>All documents from your employer should be on company letterhead, and signed and/or stamped by an authorised company representative.</p>
                <p className="font-bold mt-2">Before being granted your residence visa, you will also need to pass a health check.</p>
              </SlideContent>
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent title="Application Process" index={3}>
                <p>The process of applying for a Virtual Work Visa is slightly different, depending on whether you need to pay for a Visit Visa to enter Dubai.</p>
                <p className="my-2">If you can get a visa on arrival, then you can apply directly for the Virtual Work Visa residence permit. You can start this abroad and complete it upon arrival to Dubai, or begin the whole process when you get to Dubai.</p>
                <p>Applications started abroad can be made through the General Directorate of Residency and Foreigner Affairs Dubai (GDRFAD).</p>
                <p className="my-2">Applications in Dubai can be made online via GDRFAD or via an AMER service centre.</p>
                <p className="font-bold">Apply online via GDRFAD &gt;</p>
                <p className="font-bold">Learn more about applying via AMER &gt;</p>
              </SlideContent>
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent title="Documents Required" index={4}>
                <p>Depending on how you apply for the Virtual Work Visa, you may need to provide slightly different documents. Document requirements can change without notice – please check the latest requirements from GDRFAD or AMER. Also note that some applicants may be asked to provide alternative or additional documents after their initial application.</p>
                <p className="my-2">In general, all applicants will need the following documents, in both electronic (JPEG) and physical form:</p>
                <ul className="list-disc pl-5 my-2">
                  <li>Passport with at least six months validity at time of application</li>
                  <li>Proof of employment</li>
                  <li>Proof of salary</li>
                  <li>Proof of remote working</li>
                  <li>Most recent payslip</li>
                  <li>Bank statements from the last six months</li>
                  <li>Proof of health insurance covering the UAE</li>
                  <li>Passport-style photo, in colour on a white background</li>
                </ul>
                <p className="font-bold">Note: this list only applies to the main applicant for a Virtual Work Visa. If you also plan to sponsor family members, there will be additional documents required for those applications.</p>
              </SlideContent>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}