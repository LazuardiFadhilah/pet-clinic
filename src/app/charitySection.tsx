import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

// Definisi tipe untuk properti komponen
interface StatCardProps {
  number: string;
  text: string;
}

interface CharityCardProps {
  name: string;
  image: string;
}

export default function CharitySection() {
  return (
    <section className="container mx-auto px-4 my-20">
      {/* Judul utama section */}
      <h1 className="flex items-start justify-start font-semibold text-4xl lg:text-5xl lg:w-1/2 text-left">
        We collaborate with charities around the world
      </h1>

      {/* Grid untuk menampilkan statistik */}
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 max-h-[230px] lg:max-h-[120px] my-10">
        <div className="col-span-2 flex items-center justify-left">
          <p className="my-10 text-lg lg:text-xl text-left max-w-xl">
            Our vet clinic prioritizes community involvement and animal welfare through regular charity events benefiting local animal shelters, rescue organizations, and related causes.
          </p>
        </div>
        <StatCard number="110+" text="Animals saved all time" />
        <StatCard number="64" text="Charitable events held" />
      </div>

      {/* Grid untuk menampilkan daftar charity yang berkolaborasi */}
      <div className="grid grid-cols-1 grid-rows-8 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        <h2 className="lg:col-span-1 text-xl lg:text-2xl font-light">
          Collaborate with <br /> popular brands
        </h2>
        {charities.map((charity, index) => (
          <CharityCard key={index} name={charity.name} image={charity.image} />
        ))}
        <ContactCard />
      </div>
    </section>
  );
}

// Komponen untuk menampilkan statistik
const StatCard: React.FC<StatCardProps> = ({ number, text }) => (
  <div className="border-l-2 border-white p-4 flex flex-col items-start justify-between">
    <h1 className="text-4xl lg:text-5xl font-semibold">{number}</h1>
    <p className="text-lg lg:text-xl">{text}</p>
  </div>
);

// Komponen untuk menampilkan informasi charity
const CharityCard: React.FC<CharityCardProps> = ({ name, image }) => (
  <div className="bg-lightPurple rounded-2xl p-4 flex flex-row items-center justify-center">
    <p className="text-lg lg:text-xl font-bold text-secondary mr-4">{name}</p>
    <div className="relative w-[64px] h-[64px]">
  <Image src={image} alt={name} fill className="object-contain" />
</div>
  </div>
);

// Komponen untuk menampilkan kartu kontak
const ContactCard: React.FC = () => (
  <div className="flex flex-row items-center justify-center border-2 rounded-2xl p-4 cursor-pointer hover:bg-gray-100 transition">
    <p className="text-lg lg:text-xl font-light mr-4">Contact us for cooperation</p>
    <FiArrowUpRight className="text-primary bg-white rounded-full" size={30} />
  </div>
);

// Daftar charity yang berkolaborasi
const charities: CharityCardProps[] = [
  { name: "Happy Smile Foundation", image: "/charity.png" },
  { name: "Healthy Atmosphere Foundation", image: "/charity1.png" },
  { name: "Friendly Hand Foundation", image: "/charity2.png" },
  { name: "We Are Together Foundation", image: "/charity3.png" },
  { name: "Circle of Life Foundation", image: "/charity4.png" },
  { name: "Good Hands Foundation", image: "/charity5.png" },
];
