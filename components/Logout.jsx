"use client";

import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";

export default function Logout() {
  return (
    <button
      onClick={() => {
        function logOut() {
          signOut(auth);
          window.location.href = "/login";
        }
        logOut();
      }}
      className="flex items-center text-red-500 gap-1 text-sm"
    >
      <LogOut></LogOut> Logout
    </button>
  );
}
