const MisiKami = () => {
    return (
        <div className="hero bg-gray-200 h-[91vh]">
            <div className="p-5 max-h-[91vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                    <div className="">
                        <div className="flex items-center mb-6">
                            <div className="w-0.5 h-4 bg-black mr-2"></div>
                            <h2 className="text-sm font-semibold uppercase">What We Do</h2>
                        </div>
                        <h1 className="text-3xl font-bold mb-4">Misi Kami</h1>
                        <p className="text-base text-gray-600 mb-8">
                            Wivern bertujuan menjadi platform edukatif 
                            yang memudahkan siswa dan mahasiswa dalam menyelesaikan tugas-tugas 
                            akademik secara efisien dan bertanggung jawab, sambil membuka peluang produktif 
                            bagi para freelancer pelajar.
                        </p>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img
                                    src="https://via.placeholder.com/20x20"
                                    alt="Family Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <h3 className="text-lg font-bold">Akses Mudah dan Cepat</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Memfasilitasi layanan bantuan tugas secara cepat, mudah, dan 
                                fleksibel melalui sistem pencocokan otomatis antara customer dan freelancer.
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img
                                    src="https://via.placeholder.com/20x20"
                                    alt="Health Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <h3 className="text-lg font-bold">Meningkatkan Produktivitas Pelajar</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Membantu pelajar dan mahasiswa menyelesaikan tugas dengan lebih efisien 
                                agar bisa fokus pada pengembangan diri lainnya.
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img
                                    src="https://via.placeholder.com/20x20"
                                    alt="Scholarship Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <h3 className="text-lg font-bold">Peluang Freelance untuk Pelajar</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Memberikan kesempatan bagi pelajar/mahasiswa untuk mendapatkan penghasilan 
                                dan membangun portofolio melalui pekerjaan freelance yang bermakna.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <img
                                    src="https://via.placeholder.com/20x20"
                                    alt="Therapy Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <h3 className="text-lg font-bold">Ekosistem Belajar Kolaboratif</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Mewujudkan komunitas pelajar yang saling mendukung, belajar, 
                                dan berkembang bersama melalui kerja sama antar pengguna di platform.
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
    )
}

export default MisiKami