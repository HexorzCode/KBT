"use client";
import React, { useState, useEffect } from "react";

const EmailRegisterModal = ({ isOpen, onClose, onRegister, onSwitchToLoginFromEmailForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAgreedToTerms(false);
            setError('');
        } else {
            const emailInput = document.getElementById('modal-email-register');
            if (emailInput) emailInput.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        if (!agreedToTerms) {
            setError('You must agree to the terms and conditions.');
            return;
        }
        if (onRegister) onRegister({ email, password });
    };

    return (
        <div
            className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[60] p-4 transition-opacity duration-300"
            onClick={onClose} // Close on backdrop click
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-register-modal-title"
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 m-auto transform transition-all duration-300 ease-out opacity-100 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the backdrop
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 id="email-register-modal-title" className="text-xl sm:text-2xl font-bold text-gray-800">
                        Create Account with Email
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                        aria-label="Close email registration modal"
                    >
                        × {/* Changed from 'x' to × for better visuals */}
                    </button>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4 text-sm" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="modal-email-register" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="modal-email-register"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-password-register" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="modal-password-register"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="8"
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                            placeholder="Create a password (min. 8 chars)"
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-confirm-password-register" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="modal-confirm-password-register"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="modal-agreeToTerms-register"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                        />
                        <label htmlFor="modal-agreeToTerms-register" className="ml-2 block text-xs sm:text-sm text-gray-700">
                            I agree to the <a href="#" className="font-medium text-blue-600 hover:underline">Terms</a> and <a href="#" className="font-medium text-blue-600 hover:underline">Privacy Policy</a>.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white rounded-md py-3 font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Create Account
                    </button>
                </form>
                {onSwitchToLoginFromEmailForm && ( // Conditionally render this section
                    <p className="text-sm text-center mt-6 text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={() => {
                                if (onClose) onClose();
                                onSwitchToLoginFromEmailForm();
                            }}
                            className="font-semibold text-black hover:underline"
                        >
                            Sign In
                        </button>
                    </p>
                )}
            </div>
        </div>
    );
};

export default EmailRegisterModal;