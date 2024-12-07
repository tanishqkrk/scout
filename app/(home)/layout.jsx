import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="font-poppins">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
