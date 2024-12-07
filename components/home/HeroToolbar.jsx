"use client";

import { Calendar } from "lucide-react";
import { CalendarHeart } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";

export function Toolbar() {
  const [params, setParams] = useState({
    date: 0,
    budget: 0,
    users: 0,
  });

  return (
    <div className="bg-[#ffffff30] w-fit pl-16 pr-6 backdrop-blur-xl flex items-center gap-16 h-24 rounded-full justify-evenly border-[1px] border-white max-md:flex-col max-md:h-full max-md:w-full max-md:p-3 max-md:rounded-lg max-md:gap-10 ">
      <div className="flex items-center gap-6 z-[999999999999] max-md:flex-col">
        <div className="flex items-center justify-between max-md:w-full">
          <label htmlFor="date">
            <Calendar></Calendar>
          </label>
          <Input
            value={params.date}
            onChange={(e) =>
              setParams((org) => ({ ...org, date: e.target.value }))
            }
            id="date"
            className="border-none"
            type="date"
          />
        </div>
        <div className="flex items-center justify-between max-md:w-full">
          <label htmlFor="budget">
            <Briefcase></Briefcase>
          </label>
          <select
            value={params.budget}
            onChange={(e) =>
              setParams((org) => ({ ...org, budget: e.target.value }))
            }
            id="budget"
            className="w-[100px] bg-transparent border-none outline-none"
          >
            <option disabled value="0">
              Budget
            </option>
            <option value="1">1</option>
          </select>
        </div>
        <div className="flex items-center justify-between max-md:w-full">
          <label htmlFor="users">
            <User></User>
          </label>
          <select
            id="users"
            className="w-[100px] bg-transparent border-none outline-none"
            value={params.users}
            onChange={(e) =>
              setParams((org) => ({ ...org, users: e.target.value }))
            }
          >
            <option disabled value="0">
              Users
            </option>
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div>
        <button className="bg-themeOrange p-6 px-12 rounded-full  w-full max-md:px-2 max-md:py-2">
          Search
        </button>
      </div>
    </div>
  );
}

export function MobileToolbar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [params, setParams] = useState({
    date: 0,
    budget: 0,
    users: 0,
  });

  return (
    <div className="w-full space-y-6 bg-[#ffffff20] backdrop-blur-md p-3 border-2 border-white  rounded-lg">
      <div className="date">
        <input
          value={params.date}
          onChange={(e) =>
            setParams((org) => ({ ...org, date: e.target.value }))
          }
          id="date"
          className="border-none absolute opacity-0"
          type="date"
        />
        <label
          htmlFor="date"
          className="text-3xl font-bold max-sm:text-xl text-themeOrange flex items-center gap-3"
        >
          <Calendar></Calendar>
          {new Date(params.date).getDate()},{" "}
          {months[new Date(params.date).getMonth()]}
        </label>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <div className="flex items-center justify-start max-md:w-full">
            <label htmlFor="budget">
              <Briefcase></Briefcase>
            </label>
            <select
              value={params.budget}
              onChange={(e) =>
                setParams((org) => ({ ...org, budget: e.target.value }))
              }
              id="budget"
              className="w-[100px] bg-transparent border-none outline-none"
            >
              <option disabled value="0">
                Budget
              </option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-start max-md:w-full">
            <label htmlFor="users">
              <User></User>
            </label>
            <select
              id="users"
              className="w-[100px] bg-transparent border-none outline-none"
              value={params.users}
              onChange={(e) =>
                setParams((org) => ({ ...org, users: e.target.value }))
              }
            >
              <option disabled value="0">
                Users
              </option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
