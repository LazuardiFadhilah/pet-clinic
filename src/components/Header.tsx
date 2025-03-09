"use client"; // Gunakan ini jika pakai App Router

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="container mx-auto my-14 flex justify-start items-center gap-8 px-4">
        {/* Tombol Menu untuk Mobile */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <FiMenu size={30} />
        </button>

        <h1 className="flex font-bold text-3xl px-1">Pet.</h1>

        {/* Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-4">
            <li>About Us</li>
            <li>Service</li>
            <li>Doctors</li>
            <li>Equipment</li>
            <li>Charity</li>
            <li>Reviews</li>
          </ul>
        </nav>

        {/* Tombol di Header (hanya tampil di layar besar) */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button className="border-2 border-white rounded-full px-3 py-1">
            Questionnaire
          </button>
          <button className="text-primary bg-white rounded-full px-3 py-2">
            Free Call
          </button>
        </div>
      </header>

      {/* Sidebar untuk Mobile */}
      {isOpen && (
        <div className="fixed inset-0 flex">
          {/* Sidebar Container */}
          <div className="w-64 bg-white rounded-r-xl opacity-90  h-full p-6">
            {/* Tombol Close */}
            <button
              className="mb-4 flex justify-end w-full"
              onClick={() => setIsOpen(false)}
            >
              <FiX color="#183DFF" size={30} />
            </button>

            {/* Navigation List */}
            <nav>
              <ul className="flex flex-col space-y-4 text-primary">
                <li>About Us</li>
                <li>Service</li>
                <li>Doctors</li>
                <li>Equipment</li>
                <li>Charity</li>
                <li>Reviews</li>
              </ul>
            </nav>

            {/* Tombol di Sidebar */}
            <div className="mt-6 flex flex-col space-y-4">
              <button className="border-2 text-primary border-primary rounded-full px-3 py-2">
                Questionnaire
              </button>
              <button className="text-white bg-primary rounded-full px-3 py-2">
                Free Call
              </button>
            </div>
          </div>

          {/* Klik di luar sidebar untuk menutup */}
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
}
