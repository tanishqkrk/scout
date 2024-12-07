"use client";

import { Bell, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Logout from "@/components/Logout";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { History, Home, LogOut } from "lucide-react";
import Hamburger from "hamburger-react";

export default function DashboardHeaderSidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex w-full justify-between p-3 border-b-2 border-gray-100">
      <div className="">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="flex gap-6">
        <button className="bg-[#C3D6FF] p-1 rounded-full">
          <Bell color="#467FF7"></Bell>
        </button>{" "}
        <button className="bg-[#C3D6FF] p-1 rounded-full">
          <User color="#467FF7"></User>
        </button>
      </div>
      <div
        className={`sidebar lg:fixed lg:top-0 lg:left-0 lg:w-[20vw] bg-white shadow-2xl shadow-gray-600 px-4 py-8 h-screen rounded-tr-2xl flex flex-col justify-between max-lg:absolute max-lg:z-30 max-lg:top-0 max-lg:right-full  ${
          isOpen ? "max-lg:translate-x-full " : "max-lg:translate-x-0"
        } max-lg:min-w-[300px] max-lg:w-full max-lg:max-w-[75vw] max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out`}
      >
        <div className="flex flex-col gap-1 relative">
          <button
            className="lg:hidden text-end text-2xl font-bold lg:pointer-events-none lg:w-0 lg:h-0"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <div className="pb-6">
            <a href="/">
              <img className="w-64 h-full" src="/logo_long.svg" alt="" />
            </a>
          </div>
          <div className="bg-[#C3D6FF] px-3 p-1 rounded-lg">
            <Link
              className="text-gray-600 text-sm flex items-center gap-3"
              href="/dashboard"
            >
              <Home size={18}></Home> Active Application
            </Link>
          </div>
          <div className="bg-[#C3D6FF] px-3 p-1 rounded-lg">
            <Link
              className="text-gray-600 text-sm flex items-center gap-3"
              href="/history"
            >
              <History size={18}></History> History
            </Link>
          </div>
          {/* <Link href=""></Link> */}
        </div>
        <Logout></Logout>
      </div>
    </div>
  );
}
