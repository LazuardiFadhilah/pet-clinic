import { FaFacebook, FaLinkedin, FaRegCopyright, FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    // Section utama footer
    <>
    <section className="container mx-auto py-20">
      <div className="flex flex-col items-center justify-center">
        
        {/* Heading utama footer */}
        <h1 className="text-4xl lg:text-5xl text-center font-semibold flex">
          Always happy to help your friend
        </h1>
        
        {/* Tombol Free Call */}
        <button className=" bg-white text-primary font-semibold text-lg lg:text-xl rounded-full py-3 px-8 mt-10">
          Free Call
        </button>

        {/* Grid untuk informasi footer */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full max-w-[800px] mt-20">
          {/* Kolom About Us */}
          <div className="flex flex-col items-center color-lightPurple gap-4">
            <h1 className="text-lg font-bold">About Us</h1>
            <ul className="text-lg text-center font-light">
              <li>Address</li>
              <li>Connection</li>
            </ul>
          </div>
          
          {/* Kolom Services */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold">Services</h1>
            <ul className="text-center text-lg font-light">
              <li>Dentistry</li>
              <li>Documentation</li>
              <li>Vaccination</li>
              <li>Surgery</li>
              <li>Consultant</li>
              <li>Newborns</li>
            </ul>
          </div>
          
          {/* Kolom Doctors */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold">Doctors</h1>
            <ul className="text-center text-lg font-light">
              <li>Specialist</li>
              <li>Licenses</li>
              <li>Practice</li>
              <li>Vacancies</li>
            </ul>
          </div>
          
          {/* Kolom Equipment */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold">Equipment</h1>
            <ul className="text-center text-lg font-light">
              <li>Certificates</li>
              <li>Exploitation</li>
            </ul>
          </div>
          
          {/* Kolom Charity */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold">Charity</h1>
            <ul className="text-center text-lg font-light">
              <li>Promotions</li>
              <li>Partners</li>
              <li>Achievements</li>
            </ul>
          </div>
          
          {/* Kolom Reviews */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold">Reviews</h1>
            <ul className="text-center text-lg font-light">
              <li>Our Clients</li>
              <li>On Platforms</li>
            </ul>
          </div>
        </div>

        {/* Bagian bawah footer */}
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-between w-full mt-10 p-10 border-t-2 border-secondary">
          
          {/* Copyright */}
          <div className="flex flex-row items-center gap-2">
            <FaRegCopyright size={20} />
            <p className="text-[12px] lg:text-[16px] font-light">
              Copywriting | All Rights Reserved
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center gap-2">
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaTelegram size={20} />
          </div>

          {/* Terms & Privacy */}
          <div className="flex flex-row items-center gap-2">
            <p className="text-[12px] lg:text-[16px] font-light">
              Term of Use | Privacy
            </p>
          </div>
        </div>
      </div>
    </section></>
  );
}