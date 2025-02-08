import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Content from "./components/Content";
import { Navbar } from "./components/Navbar";
import MainSidebar from "./components/MainSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
}
