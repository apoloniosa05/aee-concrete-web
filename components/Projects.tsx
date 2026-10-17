"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MapPin, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

type Category = "All" | "Structural Concrete" | "Excavation & Drilling" | "Residential";

const categories: Category[] = [
  "All",
  "Structural Concrete",
  "Excavation & Drilling",
  "Residential",
];

const projects = [
  {
    id: "sacramento-commercial-slab",
    title: "Industrial Distribution Center Foundation",
    category: "Structural Concrete" as Category,
    clientType: "Commercial",
    location: "Sacramento, CA",
    image: "/concrete.jpg",
    metric: "24,000 sq. ft. Slab",
    summary:
      "High-load reinforced concrete slab-on-grade, perimetergrade beams, and heavy-duty loading dock aprons engineered for logistics traffic.",
    highlights: ["4,500 PSI High-Strength Mix", "Laser Screed Leveling", "Seismic Anchor Bolts"],
  },
  {
    id: "folsom-caisson-drilling",
    title: "Hillside Retaining Wall & Pier Drilling",
    category: "Excavation & Drilling" as Category,
    clientType: "Commercial",
    location: "Folsom, CA",
    image: "/excavation.jpg",
    metric: "58 Drilled Caissons",
    summary:
      "Deep foundation pier drilling through rocky terrain and mass earthwork grading for a multi-level commercial office development.",
    highlights: ["36-Inch Diameter Piers", "Laser-Guided Grading", "Spoil Hauling & Compaction"],
  },
  {
    id: "roseville-site-development",
    title: "Retail Plaza Earthwork & Utility Trenching",
    category: "Excavation & Drilling" as Category,
    clientType: "Commercial",
    location: "Roseville, CA",
    image: "/machine.jpg",
    metric: "12,500 cu. yds. Moved",
    summary:
      "Complete site clearing, precision pad grading, storm drain trenching, and concrete curb-and-gutter installation.",
    highlights: ["95% Relative Compaction", "Underground Utility Prep", "ADA Curb & Walkways"],
  },
  {
    id: "elk-grove-custom-estate",
    title: "Custom Estate Foundation & Architectural Patio",
    category: "Residential" as Category,
    clientType: "Residential",
    location: "Elk Grove, CA",
    image: "/concrete.jpg",
    metric: "6,200 sq. ft. Pour",
    summary:
      "Turnkey residential pad preparation, stepped footing foundation, and decorative stamped concrete driveway and outdoor living terrace.",
    highlights: ["Stepped Perimeter Footings", "Architectural Stamped Finish", "Drainage & Grading"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={sectionRef} id="projects" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* ENCABEZADO Y FILTROS */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Proven Track Record
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-5 h-1.5 w-20 rounded-full bg-brand" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Explore representative commercial and residential groundwork executed across the Greater Sacramento region.
          </p>

          {/* Barra de Filtros */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-black/5 bg-slate-100/80 p-2 backdrop-blur-md">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 ${
                    active
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "text-slate-600 hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* CUADRÍCULA DE PROYECTOS */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgb(11,61,145,0.12)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              {/* Imagen con Badges Superpuestos */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-white/15 bg-slate-950/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-brand/90 px-3.5 py-1.5 text-xs font-bold tracking-tight text-white shadow-md backdrop-blur-md">
                    <Layers size={13} />
                    {project.metric}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
                  <MapPin size={15} className="text-blue-400" />
                  <span>{project.location}</span>
                  <span className="mx-1.5 text-white/30">•</span>
                  <span className="text-blue-300">{project.clientType}</span>
                </div>
              </div>

              {/* Contenido Técnico */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
                    {project.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-black/5 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 size={13} className="text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Delivered on Schedule
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-brand transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-dark"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
