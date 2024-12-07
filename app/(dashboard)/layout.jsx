import DashboardHeaderSidebar from "@/components/DashboardHeaderSidebar";
export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <div>
      <DashboardHeaderSidebar />
      <div>{children}</div>
    </div>
  );
}
