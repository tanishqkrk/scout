"use client";

import useAuth from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";

export default function Page() {
  const container = "flex flex-col gap-1 group";
  const label =
    "translate-y-10 translate-x-3 text-slate-400 group-focus:translate-x-0 group-focus:translate-y-0  transition-all duration-400";
  const input = "bg-slate-600 p-2 py-3 rounded-lg focus:outline-none ";

  const { user, login, sendOTP, verifyOTP } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [otpView, setOtpView] = useState(false);

  const [otp, setOtp] = useState("");

  return (
    <div className="text-white flex flex-col justify-between items-center h-full font-poppins">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl"
        id="recaptcha"
      ></div>
      <a
        className="bg-white w-full flex justify-center items-center py-4"
        href="/"
      >
        <img className="w-64 h-full" src="/logo_long.svg" alt="" />
      </a>
      {otpView ? (
        <div className="flex flex-col gap-6 px-16">
          <div className="">
            <div className="text-white text-3xl font-semibold">Enter OTP</div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className={`${container} w-full`}>
                <Input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={async () => {
                console.log("loading");
                await verifyOTP(otp);
                console.log("done");
              }}
              className="w-full bg-lightBlue py-3 rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 px-16">
          <div className="">
            <div className="text-white text-3xl font-semibold capitalize">
              Login to your account
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className={`${container} w-full`}>
                <PhoneInput
                  className="text-black font-medium"
                  country={"in"}
                  onChange={setPhone}
                  value={phone}
                ></PhoneInput>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={async () => {
                await sendOTP(phone);
                setOtpView(true);
              }}
              className="w-full bg-blue-700 font-bold py-3 rounded-2xl"
            >
              Send OTP
            </button>
          </div>
        </div>
      )}
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
