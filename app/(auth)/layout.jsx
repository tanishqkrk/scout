export const metadata = {
  title: "Welcome",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex justfy-center items-stretch  h-screen w-screen overflow-hidden max-md:flex-col">
      <div className="w-2/4 bg-themeBlue h-full max-md:h-full max-md:w-full">
        {children}
      </div>
      <div className="w-2/3 max-md:w-full  max-md:absolute max-md:-bottom-1/3 max-md:hidden">
        <img src="/dubai2.jpg" className="object-cover h-full w-full" alt="" />
      </div>
    </div>
  );
}
