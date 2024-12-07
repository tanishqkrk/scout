"use client";

import Image from "next/image";
// import a from "next/a";
import { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Text from "./AnimatedText";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [down, setDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const pos = document.body.getBoundingClientRect().top;
      if (pos < -100) {
        setDown(true);
      } else {
        setDown(false);
      }
    });
  }, []);

  const [isOpen, setOpen] = useState(false);

  return (
    <header
      style={{
        background: isOpen ? "#ffffff70" : down ? "ffffff70" : "",
        zIndex: "99999999999",
        boxShadow: down ? "0 0 100px #00000050" : "", 
      }}
      className="fixed top-0 z-[999999] w-full flex items-center justify-between p-3 bg-[#00000010] px-16 duration-200 backdrop-blur-lg max-md:px-10 max-sm:px-3"
    >
      <a href={"/"}>
        <Image
          alt="logo"
          width={150}
          height={150}
          src={"/logo_long.svg"}
          className="max-sm:w-20"
        ></Image>
      </a>
      <div className="hidden max-md:block">
        <Hamburger
          color={isOpen ? "black" : down ? "black" : "white"}
          toggled={isOpen}
          toggle={setOpen}
        />
        <div
          style={{
            background: down ? "white" : "white",
            // top: isOpen ? "" : "-100%",
            height: isOpen ? "10em" : "0px",
            overflow: "hidden",
            opacity: isOpen ? "100%" : "0%",
            pointerEvents: isOpen ? "all" : "none",
          }}
          className="w-full  p-3 fixed top-16 left-0 flex-col flex text-center gap-3 divide-y-2 divide-gray-100 duration-200"
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Text delay={0.2} text={"Solutions"} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[9999999999999]">
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#orientation"}>Orientation Services</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#eor"}>EOR Support</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#immigration"}>Immigration Services</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#culture"}>Cultural Training</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#relocation"}>Relocation Services</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#housing"}>Temporary Housing Solutions</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#houseFinding"}>House finding solution</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#schooling"}>School finding solution</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#settling"}>Settling solution</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#tax"}>Income tax support</a>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    setOpen(false);
                    setDown(false);
                  }}
                >
                  <a href={"/services#departure"}>Departure Support</a>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Text delay={0.5} text={"Cities"} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[9999999999999]">
              <DropdownMenuItem>
                <a href={"/bangalore"}>Bangalore</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={"/dubai"}>Dubai</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={"/amsterdam"}>Amsterdam</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <a href={"/bangalore"}>Bangalore</a> */}
          {/* <a href={"/"}>Blog</a> */}
          {/* <a href={"/"}>Contact</a> */}
          <a
            className="bg-themeOrange p-3 rounded-md px-6 text-white font-semibold"
            href={"/"}
          >
            Sign in
          </a>
        </div>
      </div>
      <div
        style={
          {
            // color: down ? "black" : "",
          }
        }
        className="flex items-center gap-12 text-white max-lg:gap-6 max-lg:text-sm max-md:hidden"
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Text delay={0.2} text={"Solutions"} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[9999999999999]">
            <DropdownMenuItem>
              <a href={"/services#orientation"}>Orientation Services</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#eor"}>EOR Support</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#immigration"}>Immigration Services</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#culture"}>Cultural Training</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#relocation"}>Relocation Services</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#housing"}>Temporary Housing Solutions</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#houseFinding"}>House finding solution</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#schooling"}>School finding solution</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#settling"}>Settling solution</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#tax"}>Income tax support</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/services#departure"}>Departure Support</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Text delay={0.5} text={"Cities"} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[9999999999999]">
            <DropdownMenuItem>
              <a href={"/bangalore"}>Bangalore</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/dubai"}>Dubai</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={"/amsterdam"}>Amsterdam</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <a href={"/"}>
          <Text delay={0.6} text={"Contact"} />
        </a> */}
        {/* <a href={"/bangalore"}>
          <Text delay={0.6} text={"Bangalore"} />
        </a>
        <a href={"/amsterdam"}>
          <Text delay={0.6} text={"Amsterdam"} />
        </a>
        <a href={"/dubai"}>
          <Text delay={0.6} text={"Dubai"} />
        </a> */}
        <a
          className="bg-themeOrange p-3 rounded-md px-6 text-white font-semibold"
          href={"/login"}
        >
          <Text delay={0.8} text={"Sign in"} />
        </a>
      </div>
    </header>
  );
}
