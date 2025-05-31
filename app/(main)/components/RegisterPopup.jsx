// components/RegisterPopup.jsx
"use client";
import React from "react";
import GoogleRegisButton from "./button/google_register";

const RegisterPopup = ({ onClose,onSwitchToLogin, onEmailRegister }) => {

    return (
        <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-[2px] transition-opacity duration-300 flex justify-center items-center z-50"
            onClick={onClose} // Add onClick here to close when backdrop is clicked
        >
            <div
                className="flex w-full max-w-5xl min-h-[70vh] bg-white rounded-lg overflow-hidden shadow-lg border-2 transform transition-all duration-500 ease-out opacity-0 scale-95 animate-fadeIn"
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the backdrop
            >
                <div className="relative w-1/2 hidden md:block">
                    <img
                        src="/home3.png" // Ensure this path is correct, often public assets don't need the leading / but it depends on setup
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
                        {/* Placeholder text, can be updated */}
                        <h2 className="text-white text-4xl font-bold mb-4">Join Our Community</h2>
                        <p className="text-white text-xl mb-4">Discover new opportunities and connect with professionals.</p>
                        <p className="text-white text-xl">Sign up to get started!</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <button className="self-end text-xl mb-4 hover:cursor-pointer" onClick={onClose}>✕</button>
                    <h2 className="text-2xl font-bold mb-1">Buat Akun Baru</h2>
                    <p className="mb-4 text-gray-600">
                        Sudah memiliki Akun?{" "}
                        <a
                            className="text-black font-semibold hover:underline hover:cursor-pointer"
                            onClick={() => {
                                if (onClose) onClose();
                                if (onSwitchToLogin) onSwitchToLogin();
                            }}
                        >
                            Sign In
                        </a>
                    </p>

                    <GoogleRegisButton/>

                    <button
                        className="w-full py-2 mb-3 border flex items-center justify-center gap-2 rounded-md hover:bg-gray-100"
                        onClick={() => {
                            if (onClose) {
                                onClose();
                            }
                            if (onEmailRegister) {
                                console.log("RegisterPopup: Calling onEmailRegister");
                                onEmailRegister();
                            }
                        }}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
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