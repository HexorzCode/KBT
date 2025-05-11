// components/RegisterPopup.jsx
"use client";
import React from "react";

// Assuming your modal structure is similar to what was provided earlier
const RegisterPopup = ({ onClose, onSwitchToLogin }) => { // <<<< Ensure onSwitchToLogin is a prop
    return (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-[2px] transition-opacity duration-300 flex justify-center items-center z-50">
            <div className="flex w-full max-w-5xl min-h-[70vh] bg-white rounded-lg overflow-hidden shadow-lg border-2 transform transition-all duration-500 ease-out opacity-0 scale-95 animate-fadeIn">
                <div className="relative w-1/2 hidden md:block">
                    <img
                        src="/home3.png"
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
                        <h2 className="text-white text-4xl font-bold mb-4">Lorem Ipsum</h2>
                        <h2 className="text-white text-4xl font-bold mb-4">Lorem Ipsum</h2>
                        <h2 className="text-white text-4xl font-bold mb-4">Lorem Ipsum’</h2>
                        <h2 className="text-white text-4xl font-bold">Lorem Ipsu</h2>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <button className="self-end text-xl mb-4 hover:cursor-pointer" onClick={onClose}>✕</button>
                    <h2 className="text-2xl font-bold mb-1">Buat Akun Baru</h2>
                    <p className="mb-4 text-gray-600">
                        Sudah memiliki Akun?{" "}
                        <a
                            className="text-black font-semibold hover:underline hover:cursor-pointer" // Changed from in-hover:cursor-pointer
                            onClick={() => {
                                if (onClose) onClose(); // Close this modal
                                if (onSwitchToLogin) onSwitchToLogin(); // Then trigger opening the login modal
                            }}
                        >
                            Sign In
                        </a>
                    </p>

                    <button className="w-full py-2 mb-3 border flex items-center justify-center gap-2 rounded-md hover:bg-gray-100">
                        <img src="/google.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    <button className="w-full py-2 mb-3 border flex items-center justify-center gap-2 rounded-md hover:bg-gray-100">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Continue with email
                    </button>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t" />
                        <span className="px-3 text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-t" />
                    </div>

                    <div className="flex gap-3">
                        <button className="w-full py-2 border rounded-md hover:bg-gray-100 flex items-center justify-center gap-2">
                            <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                            Apple
                        </button>
                        <button className="w-full py-2 border rounded-md hover:bg-gray-100 flex items-center justify-center gap-2">
                            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPopup;