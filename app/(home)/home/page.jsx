import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure correct path to Navbar

export default function Home() {
    

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/home.png")' }}>
                <div className="container mx-auto flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold mb-4">Temukan Jasa Berkualitas Untuk Membantumu</h1>
                    <p className="text-xl mb-8">Dapatkan layanan profesional di berbagai kategori.</p>
                    <form className="flex justify-center border border-gray-300 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Cari Jasa"
                            className="p-3 rounded-l-lg w-96 focus:outline-none"/>
                        <button className="bg-blue-800 text-white p-3 rounded-r-lg">
                            Cari
                        </button>
                    </form>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Kategori Jasa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <Image src="/placeholder.png" alt="Category 1" width={50} height={50} />
                            <h3 className="text-xl font-semibold mt-2">Graphic & Design</h3>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <Image src="/placeholder.png" alt="Category 2" width={50} height={50} />
                            <h3 className="text-xl font-semibold mt-2">Programming & Tech</h3>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <Image src="/placeholder.png" alt="Category 3" width={50} height={50} />
                            <h3 className="text-xl font-semibold mt-2">Essay & Research Writing</h3>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <Image src="/placeholder.png" alt="Category 4" width={50} height={50} />
                            <h3 className="text-xl font-semibold mt-2">Presentation</h3>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <Image src="/placeholder.png" alt="Category 5" width={50} height={50} />
                            <h3 className="text-xl font-semibold mt-2">Homework Help</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Services Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Jasa yang Sedang Populer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <h3 className="text-lg font-semibold">Web Development</h3>
                            <p className="text-gray-600 mt-2">Buat website profesional dengan cepat.</p>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <h3 className="text-lg font-semibold">Logo Design</h3>
                            <p className="text-gray-600 mt-2">Desain logo unik untuk bisnismu.</p>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <h3 className="text-lg font-semibold">Essay Writing</h3>
                            <p className="text-gray-600 mt-2">Bantuan menulis esai akademik.</p>
                        </div>
                        <div className="bg-gray-200 shadow-md p-6 rounded-lg text-center">
                            <h3 className="text-lg font-semibold">Language Translation</h3>
                            <p className="text-gray-600 mt-2">Terjemahan profesional ke berbagai bahasa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}