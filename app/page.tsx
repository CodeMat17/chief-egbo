import AppreciationPage from "@/components/AppreciationPage";
import BiographyPage from "@/components/BiographyPage";
import CondolencePage from "@/components/CondolencePage";
// import FBLive from "@/components/FBLive";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import Readings from "@/components/Readings";
import { ChildrenTribute } from "@/components/sections/ChildrenTribute";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import TributePage from "@/components/TributePage";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Readings />
      <BiographyPage />
      <ChildrenTribute />
      <TributePage />
      <CondolencePage />
      <Location />
      <AppreciationPage />
      <Footer />
      {/* <FBLive /> */}
    </div>
  );
}
