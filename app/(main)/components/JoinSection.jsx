const JoinSection = () => {
    return (
        <div className="hero h-[91vh]">
            <div
                className="relative bg-cover bg-center h-[300px] rounded-lg overflow-hidden min-w-5xl"
                style={{
                    backgroundImage: `url('/home3.png')`,
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content Container */}
                <div className="relative flex items-center justify-center h-full px-4">
                    {/* Text */}
                    <div className="text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Bergabung Sebagai Freelancer dan Mulai
                        </h2>
                        <p className="text-3xl font-bold mb-8">
                            Hasilkan Pengalaman dan Penghasilan
                        </p>

                        {/* Button */}
                        <button className="cursor-pointer bg-yellow-500 text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8">
                {/* Header */}
                <h2 className="text-xl font-bold mb-6">Our Events</h2>

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Event Card */}
                    <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center justify-between">
                        {/* Date and Title */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">13</span>
                                <div>
                                    <p className="text-sm uppercase">Apr</p>
                                    <p className="text-xs uppercase">Next Events</p>
                                </div>
                            </div>
                            <p className="mt-2 text-base">A day with our wonderful children</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>

                    {/* Second Event Card */}
                    <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center justify-between">
                        {/* Date and Title */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">25</span>
                                <div>
                                    <p className="text-sm uppercase">Apr</p>
                                    <p className="text-xs uppercase">Next Events</p>
                                </div>
                            </div>
                            <p className="mt-2 text-base">Seminar: Caring for children with autism</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8">
                {/* Header */}
                <h2 className="text-xl font-bold mb-6">Our Events</h2>

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Event Card */}
                    <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center justify-between">
                        {/* Date and Title */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">13</span>
                                <div>
                                    <p className="text-sm uppercase">Apr</p>
                                    <p className="text-xs uppercase">Next Events</p>
                                </div>
                            </div>
                            <p className="mt-2 text-base">A day with our wonderful children</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>

                    {/* Second Event Card */}
                    <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center justify-between">
                        {/* Date and Title */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">25</span>
                                <div>
                                    <p className="text-sm uppercase">Apr</p>
                                    <p className="text-xs uppercase">Next Events</p>
                                </div>
                            </div>
                            <p className="mt-2 text-base">Seminar: Caring for children with autism</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinSection