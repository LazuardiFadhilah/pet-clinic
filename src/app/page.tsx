import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection";
import DoctorSection from "./doctorSection";
import EquipmentSection from "./equipmentSection";
import CharitySection from "./charitySection";
import ReviewSection from "./reviewSection";
import AppointmentSection from "./appointmentSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <DoctorSection />
      <EquipmentSection />
      <CharitySection />
      <ReviewSection />
      <AppointmentSection />
    </>
  );
}
