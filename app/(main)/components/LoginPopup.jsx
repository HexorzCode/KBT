// components/LoginPopup.jsx
"use client";
import React from "react";

// Assuming this is structured similarly to the LoginModal I provided earlier
const LoginPopup = ({ onClose, onSwitchToRegister }) => { // <<<< Ensure onSwitchToRegister is a prop
    return (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-[2px] transition-opacity duration-300 flex justify-center items-center z-50">
            <div className="flex w-full max-w-5xl min-h-[70vh] bg-white rounded-lg overflow-hidden shadow-lg border-2 transform transition-all duration-500 ease-out opacity-0 scale-95 animate-fadeIn">
                <div className="relative w-1/2 hidden md:block">
                    <img
                        src="home3.png" 
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
                        <h2 className="text-white text-4xl font-bold mb-4">Welcome Back!</h2>
                        <p className="text-white text-xl">Login to continue.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <button className="self-end text-xl mb-4 hover:cursor-pointer" onClick={onClose}>✕</button>
                    <h2 className="text-2xl font-bold mb-1">Login</h2>
                    <p className="mb-4 text-gray-600">
                        Don't have an account?{" "}
                        <a
                            className="text-black font-semibold hover:underline hover:cursor-pointer"
                            onClick={() => {
                                if (onClose) onClose(); // Close this modal
                                if (onSwitchToRegister) onSwitchToRegister(); // Then trigger opening the register modal
                            }}
                        >
                            Sign Up
                        </a>
                    </p>

                    <button className="w-full py-2 mb-3 border flex items-center justify-center gap-2 rounded-md hover:bg-gray-100">
                        <img src="/google.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-500 text-xs uppercase">Or login with email</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                            <label htmlFor="email-login" className="sr-only">Email address</label>
                            <input
                                id="email-login"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password-login" className="sr-only">Password</label>
                            <input
                                id="password-login"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>

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

export default LoginPopup;