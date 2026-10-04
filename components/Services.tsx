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
      <section ref={sectionRef} id="services" className="bg-gray-50 py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div 
            className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">What We Do</h2>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-brand" />
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Delivering rock-solid results from the ground up with top-tier equipment, precision drilling, and unmatched expertise.
            </p>
          </div>

          {/* CUADRÍCULA UNIFORME */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article 
                  key={service.id} 
                  onClick={() => setActiveModal(service)}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  className={`group relative flex min-h-[450px] cursor-pointer flex-col justify-end overflow-hidden rounded-3xl shadow-lg transition-all duration-1000 hover:shadow-2xl ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 h-full w-full">
                    <Image 
                      src={service.image} 
                      alt={`${service.title} services`} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                  <div className="relative z-10 flex flex-col p-8 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <Icon size={28} aria-hidden />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 line-clamp-2 leading-relaxed text-gray-200">
                      {service.body}
                    </p>

                    <div className="mt-6 flex h-0 items-center gap-2 overflow-hidden text-brand-light opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
                      <span className="font-bold text-blue-300">View Details</span>
                      <ArrowRight size={20} className="text-blue-300" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BANNER INFORMATIVO */}
          <div 
            style={{ transitionDelay: "400ms" }}
            className={`mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand px-8 py-8 shadow-xl md:flex-row lg:px-12 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex gap-3 rounded-full bg-white/20 p-3 text-white backdrop-blur-md" aria-hidden>
                <Building2 size={32} />
                <div className="h-8 w-[2px] bg-white/30" /> 
                <Home size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Commercial & Residential</h4>
                <p className="mt-1 text-blue-100">One crew, one standard of work, whatever the size of the job.</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="whitespace-nowrap rounded-lg bg-white px-8 py-3.5 font-bold text-brand shadow-md transition-all hover:bg-gray-100 hover:shadow-lg active:scale-95"
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
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          />
          
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4 sm:left-8 sm:bottom-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white">
                  <activeModal.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">{activeModal.title} Services</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-gray-600">
                {activeModal.modalDetails}
              </p>
              
              <h4 className="mt-8 text-xl font-bold text-gray-900">Key Capabilities:</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {activeModal.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-gray-100 pt-8 text-right">
                <a 
                  href="#contact" 
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-brand-dark active:scale-95"
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