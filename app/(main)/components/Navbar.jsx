'use client';

import { useState } from 'react';
// Corrected import statements:
import RegisterPopup from './RegisterPopup'; // Import your Register modal component
import LoginPopup from './LoginPopup';     // Import your Login modal component

export default function Navbar() {
    const [activeModal, setActiveModal] = useState(null);

    const handleOpenLogin = () => setActiveModal('login'); // Added for completeness if you need to open Login directly
    const handleOpenRegister = () => setActiveModal('register');
    const handleCloseModal = () => setActiveModal(null);

    const handleSwitchToLogin = () => {
        setActiveModal('login');
    };

    const handleSwitchToRegister = () => {
        setActiveModal('register');
    };


    return (
        <>
            <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" // DaisyUI recommends z-[1] for dropdowns
                        >
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn bg-transparent border-transparent shadow-none text-xl">Wivern</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li><a>Become a Freelancer</a></li>
                        {/* You might want a Login link here as well */}
                        {/* <li><a onClick={handleOpenLogin}>Login</a></li> */}
                        <li>
                            <details>
                                <summary>Contact</summary>
                                <ul className="p-2">
                                    <li><a>Instagram</a></li>
                                    <li><a>Whatsapp</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <button
                        className="btn bg-black text-white dark:bg-white dark:text-black"
                        onClick={handleOpenRegister} // This will open the Register Modal
                    >
                        Join
                    </button>
                    {/* Optionally, add a Login button if needed directly in navbar */}
                    {/* <button
                        className="btn btn-ghost ml-2"
                        onClick={handleOpenLogin}
                    >
                        Login
                    </button> */}
                </div>
            </nav>

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
        </>
    );
}