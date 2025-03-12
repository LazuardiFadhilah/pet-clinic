import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import Image from "next/image";

export default function HeroSection() {

    return(
        <section className="container mx-auto px-4 my-10">
        {/* Bagian Header */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Judul */}
          <h1 className="font-bold text-4xl sm:text-6xl text-center sm:text-left">
            We Are Pet.
          </h1>
  
          {/* Tombol Telepon (Hanya muncul di sm ke atas) */}
          <div className="text-sm sm:text-lg flex items-center bg-[#3051FF] text-white rounded-xl py-2 px-3">
            <FiPhone className="mr-2" /> +1 (671) 555-1234
          </div>
        </div>
  
        {/* Sub-Judul */}
        <div className="flex items-center justify-center mt-6">
          <h1 className="font-semibold text-2xl sm:text-4xl text-center sm:text-left">
            Caring Vets, Healthy Pets - Trust Us
          </h1>
        </div>
  
        <div className="lg:flex justify-between">
          {/* Bagian Kiri - Informasi Klinik */}
          <div className="flex flex-col lg:w-1/2">
            <div className="sm:flex items-center gap-2 mt-8">
              {/* Gambar Kucing */}
              <Image src="/cat.png" alt="cat" width={290} height={340} />
  
              {/* Deskripsi dan Tombol */}
              <div className="flex flex-col items-center md:items-start justify-center mx-2 gap-2">
                <p className="text-center md:text-left">
                  Our veterinary clinic is a compassionate and skilled facility
                  dedicated to providing high-quality medical care for pets.
                </p>
                <button className="bg-white text-primary rounded-xl flex items-center gap-2 pl-2 pr-1 py-1">
                  Services{" "}
                  <FiArrowUpRight
                    className="bg-primary rounded-full"
                    color="white"
                  />
                </button>
              </div>
            </div>
  
            {/* Alamat Klinik */}
            <div className="flex gap-2 items-center max-w-sm bg-[#3051FF] text-white rounded-xl py-2 px-3 mt-4">
              <FiMapPin />
              2715 Ash Dr. San Jose, South Dakota 83475
            </div>
          </div>
  
          {/* Bagian Kanan - Gambar Tambahan */}
          <div className="flex flex-col lg:w-1/2">
            <div className="sm:flex items-center self-center lg:justify-end gap-2 mt-8">
              {/* Gambar Anjing */}
              <Image src="/dog.png" alt="dog" width={290} height={340}  />
  
              {/* Gambar Kucing & Tombol Reviews */}
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src="/cat1.png"
                  alt="cat1"
                  width={233}
                  height={272}
                  className="sm:-mt-25"
                />
                <button className="bg-white text-primary rounded-xl flex items-center justify-center sm:justify-start gap-2 pl-2 pr-1 py-1 my-1">
                  Reviews{" "}
                  <FiArrowUpRight
                    className="bg-primary rounded-full"
                    color="white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}