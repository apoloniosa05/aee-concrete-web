import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[85vh] overflow-hidden bg-ink">
      {/* Imagen de fondo optimizada con Next.js */}
      <Image
        src="/machine.jpg"
        alt="Heavy machinery excavator working on construction site"
        fill
        priority
        className="object-cover object-center -z-20"
        sizes="100vw"
        quality={85}
      />

      {/* Capa de oscurecimiento (Overlay) para asegurar que el texto sea 100% legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/40"
      />

      {/* Contenido principal */}
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
          Expert Concrete and Excavation Services in North California
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-gray-200 sm:text-xl drop-shadow-sm">
          +16 Years of Experience Backing Commercial and Residential Projects
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-md bg-brand px-8 py-3.5 text-center font-semibold text-white shadow-md transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded-md border-2 border-white px-8 py-3.5 text-center font-semibold text-white shadow-md transition-colors hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}