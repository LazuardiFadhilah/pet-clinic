import { FiArrowUpRight } from "react-icons/fi";

export default function ReviewSection() {
  return (
    <section className="relative container mx-auto py-20">
      {/* Judul utama */}
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
        Our clients are always satisfied
      </h1>

      {/* Grid container untuk review */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-4">
        {/* Review 1 */}
        <div className="bg-white rounded-2xl p-7 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-[url(/avatar.png)] bg-cover bg-center w-10 h-10" />
            <p className="text-black font-semibold text-lg lg:text-xl mr-auto p-2">
              Robert Kerry
            </p>
            <p className="text-gray-600 font-light text-lg lg:text-xl">13.05.2025</p>
          </div>
          <p className="text-black font-light text-lg lg:text-xl p-2">
            I&apos;ve been bringing my pets to this veterinary clinic for years and
            have never been disappointed. The vets are highly skilled and
            provide personalized care for each animal.
          </p>
        </div>

        {/* Review 2 */}
        <div className="row-start-2 mt-4 lg:mt-0 bg-white rounded-2xl p-7 lg:flex flex-col">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-[url(/avatar1.png)] bg-cover bg-center w-10 h-10" />
            <p className="text-black font-semibold text-lg lg:text-xl mr-auto p-2">Fioni</p>
            <p className="text-gray-600 font-light text-lg lg:text-xl">13.05.2025</p>
          </div>
          <p className="text-black font-light text-lg lg:text-xl p-2">
            I recently had a positive experience at this veterinary clinic. The staff
            was friendly and efficient, making the check-in process a breeze. The
            vet was very patient in answering my questions and provided clear
            instructions for my pet&apos;s care.
          </p>
        </div>

        {/* Review 3 (Hidden on mobile) */}
        <div className="hidden bg-white rounded-2xl p-7 lg:flex flex-col">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-[url(/avatar2.png)] bg-cover bg-center w-10 h-10" />
            <p className="text-black font-semibold text-lg lg:text-xl mr-auto p-2">Charles</p>
            <p className="text-gray-600 font-light text-lg lg:text-xl">13.05.2025</p>
          </div>
          <p className="text-black font-light text-lg lg:text-xl p-2">
            As a satisfied client, I highly recommend this veterinary clinic. The
            staff is friendly and knowledgeable, and the vets are skilled and
            compassionate. From routine check-ups to complex surgeries, they
            provide top-notch care for all types of pets.
          </p>
        </div>

        {/* Review 4 (Hidden on mobile) */}
        <div className="hidden bg-white rounded-2xl p-7 lg:flex flex-col">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-[url(/avatar3.png)] bg-cover bg-center w-10 h-10" />
            <p className="text-black font-semibold text-lg lg:text-xl mr-auto p-2">Arthur Dill</p>
            <p className="text-gray-600 font-light text-lg lg:text-xl">13.05.2025</p>
          </div>
          <p className="text-black font-light text-lg lg:text-xl p-2">
            I recently visited this veterinary clinic for the first time and was
            thoroughly impressed. The staff was welcoming and attentive, making my
            furry friend feel right at home.
          </p>
        </div>
      </div>

      {/* Tombol View All Reviews dengan gradient background */}
      <div className="absolute flex items-end justify-center inset-0 bottom-20 top-30 z-10 bg-gradient-to-b from-transparent from-0% to-primary to-90%">
        <div className="flex flex-row justify-center items-center bg-white rounded-full text-primary font-semibold text-lg lg:text-xl pl-8">
          View All Reviews
          <FiArrowUpRight className="bg-primary text-white rounded-full ml-3 m-1 p-2" size={40} />
        </div>
      </div>
    </section>
  );
}
