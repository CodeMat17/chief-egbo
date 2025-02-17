import AppreciationPage from "@/components/AppreciationPage";
import BiographyPage from "@/components/BiographyPage";
import CondolencePage from "@/components/CondolencePage";
import Footer from "@/components/Footer";
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
      <AppreciationPage />
      <Footer />
   </div>
  );
}
