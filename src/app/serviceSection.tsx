import Image from "next/image";

export default function ServiceSection() {
  return (
    <>
      {/* Container utama */}
      <div className="container mx-auto py-14 px-6 bg-white rounded-3xl">
        {/* Judul utama */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-center text-black">
          Our clinic provides a wide range of services
        </h1>

        {/* Grid layanan pertama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[21px]">
          {[
            {
              imgSrc: "/dogServices.png",
              bgColor: "bg-[#F6F6F6]",
              title: "Dentistry for animals",
              desc: "Just like humans, animals can develop dental problems such as tooth decay, gum disease, and tooth loss.",
            },
            {
              imgSrc: "/doctorServices.png",
              bgColor: "bg-[#3051FF]",
              title: "Your pet's Documents",
              desc: "Animals do not require legal documents like humans do. However, some animals may need certain documents for specific purposes.",
            },
            {
              imgSrc: "/dogServices1.png",
              bgColor: "bg-[#F6F6F6]",
              title: "Vaccination",
              desc: "Vaccination for animals is the process of administering a vaccine to an animal to help prevent the spread of diseases.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-full"
            >
              {/* Gambar dan kotak background */}
              <div className="relative w-full">
                <div
                  className={`absolute inset-x-0 bottom-0 w-full h-[70%] ${item.bgColor} rounded-2xl z-0`}
                ></div>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 60vw, 80vw"
                  className="relative mx-auto w-[60%] lg:w-[80%] max-h-[200px] object-contain z-10"
                />
              </div>

              {/* Konten layanan */}
              <div className="flex flex-col flex-1 w-full rounded-b-2xl pt-[30px] px-6 bg-primary -mt-4">
                <h1 className="text-white font-bold text-xl lg:text-2xl">
                  {item.title}
                </h1>
                <p className="text-lg lg:text-xl py-4 flex-1">{item.desc}</p>
                <button className="border-2 border-white py-[12px] px-[32px] rounded-2xl mb-[24px]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Judul layanan kedua */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-center text-black mt-[57px] mb-[16px]">
          From surgery to behavioral consultations
        </h1>

        {/* Grid layanan kedua */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[21px]">
          {[
            {
              imgSrc: "/catServices.png",
              bgColor: "bg-[#3051FF]",
              title: "Surgery for pets",
              desc: "Pet surgery refers to medical procedures performed on animals under anesthesia by a licensed veterinarian.",
            },
            {
              imgSrc: "/dogServices2.png",
              bgColor: "bg-[#F6F6F6]",
              title: "Consultation",
              desc: "The veterinarian may also perform diagnostic tests such as blood work, urinalysis, or x-rays to help diagnose any underlying health issues.",
            },
            {
              imgSrc: "/catServices1.png",
              bgColor: "bg-[#3051FF]",
              title: "Caring for newborn",
              desc: "Animals do not require legal documents like humans do. However, some animals may need certain documents for specific purposes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-full"
            >
              {/* Gambar dan kotak background */}
              <div className="relative w-full">
                <div
                  className={`absolute inset-x-0 bottom-0 w-full h-[70%] ${item.bgColor} rounded-2xl z-0`}
                ></div>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 60vw, 80vw"
                  className="relative mx-auto w-[60%] lg:w-[80%] max-h-[200px] object-contain z-10"
                />
              </div>

              {/* Konten layanan */}
              <div className="flex flex-col flex-1 w-full rounded-b-2xl pt-[30px] px-6 bg-primary -mt-4">
                <h1 className="text-white font-bold text-xl lg:text-2xl">
                  {item.title}
                </h1>
                <p className="text-lg lg:text-xl py-4 flex-1">{item.desc}</p>
                <button className="border-2 border-white py-[12px] px-[32px] rounded-2xl mb-[24px]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
