"use client";
import React from "react";
import { Instagram, Linkedin, Mail, Whatsapp } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa6'
export default function Footer() {
  return (
  <footer className="bg-themeOrange text-white p-16 max-lg:p-10 max-md:p-6 max-sm:p-3 rounded-t-[14px]">
    <div className="container mx-auto px-6 flex max-md:flex-col gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Scout Solutions</h2>
          <p className="mb-4">
            WeWork Galaxy, Ground Floor, 43, Residency Rd,<br />
            Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025
          </p>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
          <a href="mailto:cs@getscout.co">
          Get in Touch
          </a>
          </button>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex-1 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Visit Our Socials</h4>
          <div className="flex flex-col space-y-4 ">
            <a href="#" className="flex items-center space-x-2 hover:text-black">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/scout-solutions/" className="flex items-center space-x-2 hover:text-black">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-black">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-black">
              <FaWhatsapp size={24} />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center space-y-4">
          {/* Policies */}
          <div className="flex space-x-4 ">
          <button className="hover:text-black">
            <a href={"/privacypolicy"}> Privacy Policy</a>
          </button>
          <button className="hover:text-black">
            <a href={"/termsofuse"} className="hover:text-black">Data Usage Policy</a>
            </button>
            <button className="hover:text-black">
             <a href={"/refundpolicy"}>Refund Policy</a>
            </button>
          </div>
      </div>
      <div className="border-t pt-6 mt-8">
      {/* Copyright */}
          <p className="text-center  text-sm">
            © 2024 — Copyright Scout Solutions
          </p>
      </div>       
      {/* <div className="flex gap-6 max-md:flex-col"> */}
        {/* Left Section */}
        {/* <div className="w-1/2 space-y-6 max-md:w-full">
          <h2 className="text-2xl font-semibold ">
            Still Curious? We&apos;re All Ears
          </h2>
          <p className=" text-gray-400">
            Got more questions about our moving services? Our international
            movers are ready to chat. Shoot us a message, and let&apos;s start
            your relocation adventure!
          </p>
          <textarea
            className="w-full min-h-32 p-4 bg-[#272626] rounded-md text-gray-200 outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your message"
          />
          <button className=" bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full">
            Send a message
          </button>
        </div> */}

        {/* Middle and Right Sections */}
        {/* <div className="flex justify-evenly  w-full md:w-1/2 space-x-10 max-md:w-full max-md:justify-start"> */}
          {/* Pages Section */}
          {/* <div>
            <h4 className="font-semibold mb-4">PAGES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Countries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contacts
                </a>
              </li>
            </ul>
          </div> */}

          {/* Subpages Section */}
          {/* <div>
            <h4 className="font-semibold mb-4">SUBPAGES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Costs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Requirements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Payroll Cycles
                </a>
              </li>
            </ul>
          </div> */}
        {/* </div>
      </div> */}

      {/* Bottom Section */}
      {/* <div className="container mx-auto flex justify-between items-center px-6 mt-10 border-t border-gray-700 pt-6 max-md:flex-col-reverse">
        <p className="text-gray-500 text-sm">&copy; 2024 — Copyright</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Whatsapp
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Email
          </a>
        </div>
      </div> */}
    </footer>
  );
}
