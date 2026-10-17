import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Compass, Building2 } from "lucide-react";

const trustHighlights = [
  {
    icon: Award,
    value: "16+ Years",
    label: "Proven Field Experience",
  },
  {
    icon: ShieldCheck,
    value: "Licensed & Insured",
    label: "California Code Compliant",
  },
  {
    icon: Compass,
    value: "Laser-Guided",
    label: "Precision Grading & Drilling",
  },
  {
    icon: Building2,
    value: "Turnkey Fleet",
    label: "Commercial & Residential",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] flex-col justify-between overflow-hidden bg-slate-950 pt-24">
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
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40 backdrop-blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
      />

      {/* Contenido principal */}
      <div className="mx-auto flex flex-1 w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
        
        {/* Eyebrow Badge Corporativo */}
        <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-200 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-400 ring-4 ring-blue-400/20" />
          <span>Serving Sacramento &amp; Northern California • Commercial &amp; Residential</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
          Expert Concrete and Excavation Services in{" "}
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            North California
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
          +16 Years of Experience Backing Commercial and Residential Projects with structural precision, heavy earthwork, and foundation drilling.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-brand px-8 py-4 text-center font-semibold tracking-tight text-white shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95"
          >
            <span>Explore Our Services</span>
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold tracking-tight text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-ink hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95"
          >
            Request an Estimate
          </a>
        </div>
      </div>

      {/* Barra de Credibilidad y Métricas (Trust Strip) */}
      <div className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-10">
          {trustHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.value} className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand/30 text-blue-300 shadow-inner">
                  <Icon size={20} aria-hidden />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold tracking-tight text-white">{item.value}</p>
                  <p className="text-xs font-medium text-neutral-400">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}