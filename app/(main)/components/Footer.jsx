import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Section */}
                <div className="mb-6 md:mb-0 flex relative">
                    <h2 className="text-xl font-bold mb-4 mx-5">Wivern</h2>

                    <div className="flex space-y-2 justify-center mx-[20vh]">
                        <div className="mx-10">
                            <p className="font-semibold">Home</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        What we do
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mx-10">
                            <p className="font-semibold">More</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mx-10">
                            <p className="font-semibold">Connect</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Subscribe to get latest updates</h2>
                    <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-400 p-2 rounded-md w-full md:w-80"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 py-2 rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;