"use client"

import JoinSection from "./components/JoinSection";
import EventsSection from "./components/EventSection";
import MisiKami from "./components/Misi";
import RegisterPopup from "./components/RegisterPopup"; // Assuming this component exists and works
import LoginPopup from "./components/LoginPopup";
import EmailRegisterModal from "./components/EmailRegisterModal";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const router = useRouter();

  const handleOpenLogin = () => setActiveModal('login');
  const handleOpenRegister = () => setActiveModal('register');
  const handleOpenEmail = () => setActiveModal('email');

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Closes the currently active modal by setting the active modal state to null.
 * Logs a message indicating that the modal has been closed.
 */

/*******  3021ae9d-9ffc-4f1b-8a07-6dd5bf59ffb5  *******/  const handleCloseModal = () => {
    setActiveModal(null);
    console.log("Modal closed");
  };

  const handleSwitchToLogin = () => {
    console.log("Switching to Login Modal");
    setActiveModal('login');
  };

  const handleSwitchToRegister = () => {
    console.log("Switching to Register Modal");
    setActiveModal('register');
  };

  const handleSwitchToEmail = () => {
    console.log("Home.js: handleSwitchToEmail CALLED. Current activeModal:", activeModal);
    setActiveModal('email');
    console.log("Home.js: activeModal SET to 'email' by handleSwitchToEmail");
  };


  const handleActualEmailRegister = (formData) => {
    console.log("Registering with email data:", formData);
    alert(`Registration attempt for ${formData.email}. Check console for details. (This is a placeholder)`);
    handleCloseModal();
    setActiveModal('login');
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width < 1280 || height < 720) {
        router.push('/405'); // Ensure '/405' is a valid route
      }
    };
    checkScreenSize();
    // If you want this to re-check on window resize:
    // window.addEventListener('resize', checkScreenSize);
    // return () => window.removeEventListener('resize', checkScreenSize);
  }, [router]); // Added router to dependency array

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
            <button className="btn shadow-none m-2" onClick={handleOpenLogin}>
              Cari Jasa
            </button>
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
          <button className="btn bg-yellow-400" >Learn More</button>
        </div>
      </div>

      <MisiKami />

      <div>
        <JoinSection />
        <EventsSection />
      </div>

      {activeModal === 'register' && (
        <RegisterPopup
          onClose={handleCloseModal}
          onSwitchToLogin={handleSwitchToLogin}
          onEmailRegister={handleOpenEmail}
        />
      )}

      {activeModal === 'login' && (
        <LoginPopup
          onClose={handleCloseModal}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {activeModal === 'email' && (
        <EmailRegisterModal
          isOpen={activeModal === 'email'}
          onClose={handleCloseModal}
          onRegister={handleActualEmailRegister}
          onSwitchToLoginFromEmailForm={handleSwitchToLogin}
        />
      )}
    </div>
  );
}