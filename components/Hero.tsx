import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[90vh] overflow-hidden bg-slate-950">
      {/* Imagen de fondo optimizada con Next.js */}
      <Image
        src="/machine.jpg"
        alt="Heavy machinery excavator working on construction site"
        fill
        priority
        className="object-cover object-center -z-20 scale-[1.02] transition-transform duration-1000"
        sizes="100vw"
        quality={85}
      />

      {/* Capa de oscurecimiento (Overlay) para asegurar que el texto sea 100% legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35 backdrop-blur-[1px]"
      />

      {/* Contenido principal */}
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-32 sm:px-8 lg:px-10">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
          Expert Concrete and Excavation Services in North California
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
          +16 Years of Experience Backing Commercial and Residential Projects
        </p>
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <a
            href="#services"
            className="rounded-xl border border-white/10 bg-brand px-8 py-4 text-center font-semibold tracking-tight text-white shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold tracking-tight text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-ink hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}