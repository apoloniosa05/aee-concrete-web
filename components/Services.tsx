"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { BrickWall, Shovel, Building2, Home, ArrowRight, X, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { 
  id: string;
  title: string; 
  icon: LucideIcon; 
  body: string; 
  image: string;
  modalDetails: string;
  features: string[];
}[] = [
  {
    id: "concrete",
    title: "Concrete",
    icon: BrickWall,
    body: "Foundations, slabs, retaining walls, driveways, and decorative finishes. We pour structural concrete built to carry the load.",
    image: "/concrete.jpg",
    modalDetails: "Our concrete division handles everything from complex commercial foundations to residential decorative patios. We ensure structural integrity, proper curing, and aesthetic perfection for every pour.",
    features: [
      "Structural Foundations & Slabs", 
      "Retaining Walls & Parapets", 
      "Decorative & Stamped Concrete", 
      "Commercial Driveways & Curbs", 
      "Seismic Retrofitting & Tie-Ins"
    ],
  },
  {
    id: "excavation-drilling",
    title: "Excavation & Drilling",
    icon: Shovel,
    body: "Site preparation, foundation pier drilling, trenching, and grading. Precision earthwork and heavy drilling equipment ready for any site.",
    image: "/excavation.jpg",
    modalDetails: "From rough terrain grading to precision pier and caisson drilling, our heavy equipment team prepares your site to exact engineering specifications. We ensure safe, efficient, and laser-guided ground operations.",
    features: [
      "Foundation Pier & Caisson Drilling", 
      "Mass Earthmoving & Rough Grading", 
      "Utility Trenching & Pipeline Excavation", 
      "Drilled Retaining Wall Post Holes", 
      "Laser-Guided Compaction & Leveling"
    ],
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<typeof services[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { 
      document.body.style.overflow = "auto"; 
    };
  }, [activeModal]);

  return (
    <>
      <section ref={sectionRef} id="services" className="bg-slate-50/70 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          
          <div 
            className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">What We Do</h2>
            <div className="mt-5 h-1.5 w-20 rounded-full bg-brand" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Delivering rock-solid results from the ground up with top-tier equipment, precision drilling, and unmatched expertise.
            </p>
          </div>

          {/* CUADRÍCULA UNIFORME */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article 
                  key={service.id} 
                  onClick={() => setActiveModal(service)}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  className={`group relative flex min-h-[480px] cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-black/5 ring-1 ring-inset ring-white/10 shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgb(11,61,145,0.18)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 h-full w-full">
                    <Image 
                      src={service.image} 
                      alt={`${service.title} services`} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  <div className="relative z-10 flex flex-col p-8 sm:p-10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-brand/90 text-white shadow-lg shadow-brand/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand">
                      <Icon size={28} aria-hidden />
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight text-white">{service.title}</h3>
                    <p className="mt-3 line-clamp-2 leading-relaxed text-neutral-300">
                      {service.body}
                    </p>

                    <div className="mt-6 flex h-0 items-center gap-2 overflow-hidden text-brand-light opacity-0 transition-all duration-300 group-hover:h-6 group-hover:opacity-100">
                      <span className="text-sm font-semibold tracking-tight text-blue-300">View Details</span>
                      <ArrowRight size={18} className="text-blue-300 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BANNER INFORMATIVO */}
          <div 
            style={{ transitionDelay: "400ms" }}
            className={`mt-20 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-brand px-8 py-10 shadow-2xl shadow-brand/20 md:flex-row lg:px-12 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md shadow-inner" aria-hidden>
                <Building2 size={30} />
                <div className="h-8 w-[1px] bg-white/25" /> 
                <Home size={30} />
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-white">Commercial & Residential</h4>
                <p className="mt-1.5 text-base text-blue-100/85">One crew, one standard of work, whatever the size of the job.</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="whitespace-nowrap rounded-xl border border-black/5 bg-white px-8 py-4 font-semibold tracking-tight text-brand shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl active:scale-95"
            >
              Work with us
            </a>
          </div>

        </div>
      </section>

      {/* MODAL INTERACTIVO */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModal(null)}
          />
          
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_24px_80px_rgb(0,0,0,0.25)] animate-in fade-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-black/40 p-2.5 text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/65 hover:shadow-lg active:scale-95"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 w-full sm:h-72">
              <Image 
                src={activeModal.image} 
                alt={activeModal.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4 sm:left-10 sm:bottom-8">
                <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/15 bg-brand p-3 text-white shadow-lg backdrop-blur-md">
                  <activeModal.icon size={26} />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{activeModal.title} Services</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-slate-600">
                {activeModal.modalDetails}
              </p>
              
              <h4 className="mt-8 text-xl font-bold tracking-tight text-slate-900">Key Capabilities:</h4>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {activeModal.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3.5 rounded-xl border border-black/5 bg-slate-50/70 p-3.5 transition-all duration-200 hover:bg-slate-100/80">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                    <span className="font-semibold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-black/5 pt-8 text-right">
                <a 
                  href="#contact" 
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-brand px-7 py-3.5 font-semibold tracking-tight text-white shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 active:scale-95"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}