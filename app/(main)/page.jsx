export default function Home() {
  return (
    <div
      className="hero min-h-[91vh]"
      style={{
        backgroundImage: "url('/home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
  );
}
