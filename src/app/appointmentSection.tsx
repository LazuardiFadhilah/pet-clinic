import { FiArrowUpRight } from "react-icons/fi";

export default function AppointmentSection() {
  return (
    <>
      {/* Contact Section */}
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-0 h-full items-stretch">
          {/* Left Side - Contact Information */}
          <div className="p-10 bg-lightPurple rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none flex flex-col justify-between h-full">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Would you like us to contact you? <br />
              We&apos;re always in touch
            </h1>
            <div className="flex items-center mt-64">
              <p className="font-light text-lg lg:text-2xl">
                pet.clinic@gmail.com
              </p>
              <FiArrowUpRight
                className="text-primary bg-white rounded-full ml-4"
                size={25}
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white rounded-2xl -mt-5 lg:-mt-0 lg:-ml-10 p-10 flex flex-col justify-between items-start h-full">
            {/* Input for Name */}
            <div className="flex border-b-2 border-secondary focus-within:border-primary w-full">
              <input
                className="w-full p-3 text-black font-light focus:outline-none placeholder:text-gray-400 focus:placeholder-transparent transition-all duration-300"
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
              />
            </div>

            {/* Input for Phone Number */}
            <div className="flex border-b-2 border-secondary focus-within:border-primary w-full">
              <input
                className="w-full p-3 text-black font-light focus:outline-none placeholder:text-gray-400 focus:placeholder:text-transparent transition-all duration-300"
                placeholder="Your Number"
                type="text"
                name="number"
                id="number"
              />
            </div>

            {/* Input for Pet Type */}
            <div className="flex border-b-2 border-secondary focus-within:border-primary w-full">
              <input
                className="w-full p-3 text-black font-light focus:outline-none placeholder:text-gray-400 focus:placeholder:text-transparent transition-all duration-300"
                placeholder="Type of Pet"
                type="text"
                name="pet"
                id="pet"
              />
            </div>

            {/* Input for Call Time */}
            <div className="flex border-b-2 border-secondary focus-within:border-primary w-full">
              <input
                className="w-full p-3 text-black font-light focus:outline-none placeholder:text-gray-400 focus:placeholder:text-transparent transition-all duration-300"
                placeholder="What time should I call you?"
                type="text"
                name="appointment"
                id="appointment"
              />
            </div>

            {/* Submit Button */}
            <button className="group hover:text-primary hover:border-primary text-secondary rounded-full flex items-center border-2 border-secondary mt-10 pl-8 transition-all duration-300">
              Send
              <FiArrowUpRight
                className="text-white bg-secondary rounded-full ml-3 mr-1 my-1 transition-all duration-300 group-hover:bg-primary"
                size={25}
              />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
