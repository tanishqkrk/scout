"use client";

import useAuth from "@/context/AuthContext";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
export default function Page() {
  const container = "flex flex-col gap-1 group";
  const label =
    "translate-y-10 translate-x-3 text-slate-400 group-focus:translate-x-0 group-focus:translate-y-0  transition-all duration-400";
  const input = "bg-slate-600 p-2 py-3 rounded-lg focus:outline-none ";

  const router = useRouter();

  const { user, uploadToDB, fetchFromDB } = useAuth();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [startingPoint, setStartingPoint] = useState(null);

  async function fetchUser() {
    if (user) {
      const r = await fetchFromDB("users", user.uid);
      setStartingPoint(r);
    }
    // console.log(user?.uid);
  }

  useEffect(() => {
    fetchUser();
    // if (startingPoint) {
    //   if (!startingPoint?.phoneNumber) router.push("/login");
    // } else {
    //   router.push("/login");
    // }
  }, [user]);

  console.log(startingPoint);

  return (
    <div className="text-white flex flex-col justify-evenly items-center h-full ">
      <div id="recaptcha"></div>
      <a
        className="bg-white w-full flex justify-center items-center py-4"
        href="/"
      >
        <img className="w-64 h-full" src="/logo_long.svg" alt="" />
      </a>
      <div className="flex flex-col gap-6 px-16 max-md:gap-10">
        <div className="">
          <div className="text-white text-3xl font-semibold">
            Create New Account
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 justify-center items-center">
            <div className={`${container} w-1/2`}>
              <input
                value={userData?.firstName}
                onChange={(e) => {
                  setUserData((x) => {
                    return {
                      ...x,
                      firstName: e.target.value,
                    };
                  });
                }}
                placeholder="First name"
                className={`${input} w-full`}
                id="first"
                type="text"
              />
            </div>
            <div className={`${container}  w-1/2`}>
              <input
                value={userData?.lastName}
                onChange={(e) => {
                  setUserData((x) => {
                    return {
                      ...x,
                      lastName: e.target.value,
                    };
                  });
                }}
                placeholder="Last name"
                className={`${input} w-full`}
                id="first"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className={`${container} w-full`}>
              <input
                value={userData?.email}
                onChange={(e) => {
                  setUserData((x) => {
                    return {
                      ...x,
                      email: e.target.value,
                    };
                  });
                }}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Email"
                className={`${input} w-full`}
                id="first"
                type="email"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={async () => {
              if (startingPoint.phoneNumber) {
                if (!startingPoint?.email) {
                  await await uploadToDB("users", user.uid, {
                    ...startingPoint,
                    ...userData,
                    forms: [],
                    timestamp: Date.now(),
                  });
                  router.push("/dashboard");
                } else {
                  toast.error("User already exists", {
                    autoClose: true,
                    position: "bottom-right",
                    theme: "colored",
                    progressStyle: { backgroundColor: "blue" },
                  });
                  router.push("/login");
                }
              } else {
                router.push("/login");
              }
            }}
            className="w-full bg-blue-700 font-bold py-3 rounded-2xl"
          >
            Create Account
          </button>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
