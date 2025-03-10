import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <section className="container mx-auto px-4 my-20">
        <h1 className="font-semibold text-4xl lg:text-5xl lg:w-2/3">
          Our doctors provide a wide range of services, from routine check-ups
        </h1>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0 my-10">
          <div className="bg-[#3051FF] p-10 rounded-t-3xl lg:rounded-[0px] lg:rounded-l-3xl flex flex-col justify-between h-full">
            <p>
              Our veterinarians have completed extensive training and education
              in veterinary medicine, including a Doctor of Veterinary Medicine
              (DVM) degree from an accredited veterinary school.
            </p>

            <div className="flex justify-between items-end pt-[223px]">
              {/* List Profesi */}
              <ul className="space-y-2 font-bold">
                <li>Surgeon</li>
                <li>Dentist</li>
                <li>Therapists</li>
                <li>Ophthalmologists</li>
              </ul>

              {/* Button Free Call */}
              <button className="flex items-center bg-white py-1 pr-[4px] pl-[32px] rounded-full text-primary">
                Free Call
                <FiArrowUpRight
                  className="bg-primary rounded-full p-1 ml-3 text-white"
                  size={24}
                />
              </button>
            </div>
          </div>

          {/* Gambar Dokter */}
          <div className="relative bg-[url(/doctor.png)] bg-cover p-10 rounded-3xl -mt-[20px] lg:mt-0 lg:-ml-[20px] h-full">
            {/* Button di kanan atas */}
            <button className="absolute top-4 right-4 flex items-center bg-white py-1 pr-[4px] pl-[32px] mr-[25px] my-[25px] rounded-full text-primary shadow-md">
              View All
              <FiArrowUpRight
                className="bg-primary rounded-full p-1 ml-3 text-white"
                size={24}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
