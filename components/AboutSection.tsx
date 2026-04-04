import Image from "next/image";


export default function AboutSection() {
  return (
    <section id="about" className="relative  bg-[#fff8ef] text-black">
      {/* 🔺 TILTED TOP DIVIDER */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-[#d9d2c7]
  [clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]"
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-10 py-32 grid grid-cols-1 md:grid-cols-3  gap-10">
        {/* LEFT */}
        <h2 className="text-5xl font-serif text-[#7a5a1e] text-center md:text-left">
          About <br /> Fillhouse
        </h2>

        {/* CENTER */}
        <div>
          <p className="mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            quam animi impedit tempora incidunt velit quos hic nesciunt culpa
            laboriosam. Tempore tempora unde adipisci, ex natus qui nobis quia
            repellendus ut voluptatem deserunt minima blanditiis pariatur
            deleniti. Fugiat dolore quos quidem nam placeat fugit. Dolorem.
          </p>

          <button className="bg-[#7a5a1e] cursor-pointer text-white px-6 py-3 rounded-full mx-auto md:mx-0 block">
            Contact Us
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <Image
          src="/ModernLobby.avif"
          alt="about"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
