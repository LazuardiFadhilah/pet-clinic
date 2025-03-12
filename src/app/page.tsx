import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection";
import DoctorSection from "./doctorSection";
import EquipmentSection from "./equipmentSection";
import CharitySection from "./charitySection";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <DoctorSection />
      <EquipmentSection />
      <CharitySection />

    </>
  );
}
