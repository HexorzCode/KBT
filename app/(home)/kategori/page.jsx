import Image from "next/image";
import Navbar from "../../components/Navbar"; // Ensure correct path to Navbar

export default function DesignAndPresentation() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-[50vh] border-2" style={{ backgroundImage: 'url("/category.jpg")' }}>
                <div className="container mx-auto flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold mb-4">Jasa Pembuatan Tugas Desain & Presentasi</h1>
                    <p className="text-xl mb-8">Dapatkan layanan profesional untuk tugas desain dan presentasi Anda.</p>
                    <form className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Cari Jasa"
                            className="p-3 rounded-l-lg w-96 focus:outline-none"
                        />
                        <button className="bg-blue-800 text-white p-3 rounded-r-lg">
                            Cari
                        </button>
                    </form>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Desain */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Desain</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/design-software-development.png" alt="Software Development" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Grafis</h3>
                                <p className="text-gray-600 mt-2">Membuat desain grafis profesional untuk berbagai kebutuhan.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/design-web-development.png" alt="Web Development" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain UI/UX</h3>
                                <p className="text-gray-600 mt-2">Mengembangkan desain pengalaman pengguna yang intuitif.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/design-mobile-apps.png" alt="Mobile Apps" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Infografis</h3>
                                <p className="text-gray-600 mt-2">Membuat infografis menarik untuk komunikasi visual.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/design-games.png" alt="Games" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Logo</h3>
                                <p className="text-gray-600 mt-2">Membuat logo unik untuk bisnis atau merek Anda.</p>
                            </div>
                        </div>
                    </div>

                    {/* Presentasi */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Presentasi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/presentation-powerpoint.png" alt="PowerPoint" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Presentasi PowerPoint</h3>
                                <p className="text-gray-600 mt-2">Membuat presentasi PowerPoint profesional.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/presentation-keynote.png" alt="Keynote" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Presentasi Keynote</h3>
                                <p className="text-gray-600 mt-2">Membuat presentasi Keynote elegan.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/presentation-google-slides.png" alt="Google Slides" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Presentasi Google Slides</h3>
                                <p className="text-gray-600 mt-2">Membuat presentasi Google Slides interaktif.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/presentation-video.png" alt="Video Presentation" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Video Presentasi</h3>
                                <p className="text-gray-600 mt-2">Membuat video presentasi berkualitas tinggi.</p>
                            </div>
                        </div>
                    </div>

                    {/* Layanan Spesial */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Layanan Spesial</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/special-service.png" alt="Special Service" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Animasi</h3>
                                <p className="text-gray-600 mt-2">Membuat animasi berkualitas untuk presentasi.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/special-service.png" alt="Special Service" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Infografis Interaktif</h3>
                                <p className="text-gray-600 mt-2">Membuat infografis dengan elemen interaktif.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/special-service.png" alt="Special Service" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Buku Putih</h3>
                                <p className="text-gray-600 mt-2">Membuat buku putih profesional untuk bisnis Anda.</p>
                            </div>
                            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                                <Image src="/special-service.png" alt="Special Service" width={150} height={150} />
                                <h3 className="text-xl font-semibold mt-2">Desain Brosur</h3>
                                <p className="text-gray-600 mt-2">Membuat desain brosur menarik untuk promosi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Call to Action */}
            <section className="bg-cover bg-center h-screen mt-12" style={{ backgroundImage: 'url("/cta-background.jpg")' }}>
                <div className="container mx-auto flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-3xl font-bold mb-4">Bergabung Sebagai Freelancer dan Mulai Hasilkan Pengalaman dan Penghasilan</h2>
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg mt-4">
                        Bergabung Sekarang
                    </button>
                </div>
            </section>
        </div>
    );
}