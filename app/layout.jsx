import Banner from "@/components/Banner";
import "./globals.css";
const inter = Open_Sans({ subsets: ["latin"] });
import { Open_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
export const metadata = {
  title: "Scout",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Banner></Banner> */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
