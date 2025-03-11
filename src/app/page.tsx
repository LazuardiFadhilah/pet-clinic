import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection";
import DoctorSection from "./doctorSection";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <DoctorSection />
      <section className="container mx-auto px-4 my-20">
        <h1 className="font-semibold text-4xl lg:text-5xl lg:w-1/2">
          Our doctors choose only the best equipment
        </h1>

        <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 my-[40px]">
          <div className="col-span-2 flex flex-col justify-between py-4 px-6 bg-[#3051FF] rounded-2xl">
            <div className="flex flex-row justify-between items-start">
              <p className="font-light text-left text-lg lg:text-xl">
                All our equipment has international quality certificates
              </p>
              <button>
                <FiArrowUpRight
                  className="rounded-full bg-white text-primary p-2"
                  size={40}
                />
              </button>
            </div>
            <div className="flex justify-end mt-[49px]">
              <button className="text-secondary font-light text-lg lg:text-xl">
                More About
              </button>
            </div>
          </div>
          <div className="row-start-2 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col justify-between p-5 border-2 border-white rounded-2xl">
              <p className="text-white font-light text-lg lg:text-xl text-left">
                All equipment undergoes special treatment
              </p>
              <button className="self-end mt-4">
                <FiArrowUpRight
                  className="rounded-full bg-white text-primary p-2"
                  size={40}
                />
              </button>
            </div>
          </div>
          <div className="row-start-2 lg:col-start-2 lg:row-start-2">
            <div className="bg-[url(/equipment1.png)] bg-cover bg-center  rounded-2xl w-full h-full" />
          </div>
          <div className="col-span-2 row-start-3 lg:col-start-3 lg:row-start-1">
            <div className="bg-[url(/equipment.png)] bg-cover  rounded-2xl w-full h-full" />
          </div>
          <div className="col-span-2 row-start-4 lg:row-start-2">
            <div className="flex flex-col justify-between p-5 bg-[#3051FF] rounded-2xl h-full">
              <p className="text-white font-light text-lg lg:text-xl">
                Our clinic uses proven drugs and also provides them to our
                clients
              </p>
              <button className="self-end mt-4">
                <FiArrowUpRight
                  className="rounded-full bg-white text-primary p-2"
                  size={40}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
