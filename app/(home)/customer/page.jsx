import JoinSection from "./components/JoinSection";
import EventsSection from "./components/EventSection";

export default function Home() {
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
                        <button className="btn shadow-none m-2">Cari Jasa</button>
                        <button className="btn shadow-none m-2">
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

            <div className="hero bg-gray-200 h-[91vh]">
                <div className="p-8 max-h-[91vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                        <div className="">
                            <div className="flex items-center mb-6">
                                <div className="w-0.5 h-4 bg-black mr-2"></div>
                                <h2 className="text-sm font-semibold uppercase">What We Do</h2>
                            </div>
                            <h1 className="text-3xl font-bold mb-4">Misi Kami</h1>
                            <p className="text-base text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius enim in eros elementum tristique.
                            </p>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <img
                                        src="https://via.placeholder.com/20x20"
                                        alt="Family Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    <h3 className="text-lg font-bold">Family support</h3>
                                </div>
                                <p className="text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    varius enim in eros.
                                </p>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <img
                                        src="https://via.placeholder.com/20x20"
                                        alt="Health Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    <h3 className="text-lg font-bold">Health benefits</h3>
                                </div>
                                <p className="text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    varius enim in eros.
                                </p>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <img
                                        src="https://via.placeholder.com/20x20"
                                        alt="Scholarship Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    <h3 className="text-lg font-bold">Scholarships</h3>
                                </div>
                                <p className="text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    varius enim in eros.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <img
                                        src="https://via.placeholder.com/20x20"
                                        alt="Therapy Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    <h3 className="text-lg font-bold">Therapy</h3>
                                </div>
                                <p className="text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    varius enim in eros.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="/home2.png"
                                alt="Person Working on Laptop"
                                className="rounded-md max-w-md max-h-[80vh]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <JoinSection />
                <EventsSection />
            </div>

        </div>

    );
}
