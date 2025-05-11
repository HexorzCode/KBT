"use client"

import JoinSection from "./components/JoinSection";
import EventsSection from "./components/EventSection";
import MisiKami from "./components/Misi";
import RegisterPopup from "./components/RegisterPopup"; // Renamed for clarity if it's indeed a popup
import LoginPopup from "./components/LoginPopup";     // Renamed for clarity
import React, { useState } from "react";

export default function Home() {
  // Single state to manage which modal is active: 'login', 'register', or null
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenLogin = () => setActiveModal('login');
  const handleOpenRegister = () => setActiveModal('register');
  const handleCloseModal = () => setActiveModal(null);

  const handleSwitchToLogin = () => {
    setActiveModal('login'); // Directly switch to login
  };

  const handleSwitchToRegister = () => {
    setActiveModal('register'); // Directly switch to register
  };

  return (
    <div>
      <div
        className="hero min-h-[91vh]"
        style={{
          backgroundImage: "url('/home.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[90vh]">
            <h1 className="mb-5 text-5xl font-bold">
              Temukan Jasa Berkualitas Untuk Membantumu
            </h1>
            {/* Updated onClick to open Login Modal */}
            <button className="btn shadow-none m-2" onClick={handleOpenLogin}>
              Cari Jasa
            </button>
            {/* Updated onClick to open Register Modal */}
            <button className="btn shadow-none m-2" onClick={handleOpenRegister}>
              Daftar Sebagai Freelancer
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-[91vh]">
        <div className="p-5 rounded-md max-w-[800px] mx-auto mt-10">
          <div className="relative flex items-center mb-6">
            <div className="w-[50px] h-[2px] bg-black rounded-md mr-3"></div>
            <h3 className="text-sm font-bold uppercase text-black">
              Know About Us
            </h3>
          </div>
          <h1 className="text-4xl font-bold text-black leading-tight mb-10">
            Kami Menyediakan Platform & Jasa untuk Membantumu dan Berkembang
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="text-lg text-gray-700 mb-15">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
            rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <button className="btn bg-yellow-400">Learn More</button>
        </div>
      </div>

      <MisiKami />

      <div>
        <JoinSection />
        <EventsSection />
      </div>

      {/* Render Modals based on activeModal state */}
      {activeModal === 'register' && (
        <RegisterPopup
          onClose={handleCloseModal}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}

      {activeModal === 'login' && (
        <LoginPopup
          onClose={handleCloseModal}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}
    </div>
  );
}