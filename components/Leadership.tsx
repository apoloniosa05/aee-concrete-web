"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Linkedin, Mail, Calculator, Compass } from "lucide-react";

// 1. Equipo Directivo Principal
const leadershipTeam = [
  { 
    name: "Alberto Salcedo", 
    role: "Chief Executive Officer",
    bio: "With over 16 years of hands-on experience in the construction industry, Alberto leads corporate vision and strategy with an unyielding commitment to quality, safety, and structural integrity.",
    image: "/user.jpg"
  },
  { 
    name: "Alberto Salcedo Sr.", 
    role: "Field Operations Manager",
    bio: "Bringing decades of proven mastery in the field, Alberto Sr. supervises on-site heavy machinery operations, grading, and concrete pours to ensure absolute precision on every job.",
    image: "/user.jpg"
  },
  { 
    name: "Ivonne Salcedo", 
    role: "Office & Logistics Manager",
    bio: "Ivonne ensures our operations run seamlessly from the back office to the job site. She coordinates supply chains, client communications, and project scheduling with precision.",
    image: "/user_female.png"
  },
  { 
    name: "Apolonio Salcedo", 
    role: "Director of IT & Operations",
    bio: "Spearheading our digital transformation, Apolonio optimizes field logistics and organizational efficiency through modern cloud infrastructure, automated workflows, and data-driven systems.",
    image: "/apolonio.png"
  },
];

// 2. Equipo de Project Design & Estimating (VERSIÓN CONCISA)
const designEstimatingTeam = [
  {
    name: "Ivonne Salcedo",
    role: "Estimating & Client Coordination",
    specialty: "Cost Analysis & Proposals",
    bio: "Prepares detailed, transparent budgets and guides clients through material selection, permitting, and project timelines.",
    image: "/user_female.png",
    icon: Calculator
  },
  {
    name: "Apolonio Salcedo",
    role: "Project Design & Technical Takeoffs",
    specialty: "Site Layouts & Calculations",
    bio: "Transforms architectural plans into precise field layouts, material quantities, and excavation models before breaking ground.",
    image: "/apolonio.png",
    icon: Compass
  }
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter((part) => !part.includes("."))
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

function TeamAvatar({ name, image }: { name: string; image?: string }) {
  const [imageError, setImageError] = useState(false);
  const isStockPlaceholder = !image || image.includes("/user.jpg") || image.includes("/user_female.png");

  if (isStockPlaceholder || imageError) {
    return (
      <div className="relative mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/20 ring-4 ring-brand/15 bg-gradient-to-br from-brand via-blue-800 to-slate-900 text-xl font-extrabold tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="relative mb-5 h-20 w-20 shrink-0 overflow-hidden rounded-full border border-black/5 ring-4 ring-brand/15 bg-slate-100 shadow-md">
      <Image 
        src={image} 
        alt={name} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default function Leadership() {
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

  return (
    <section ref={sectionRef} id="about" className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
      {/* Resplandor ambiental sutil */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-brand/15 blur-[140px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div 
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Our Leadership</h2>
          <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Backed by Experience</h3>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-brand" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            For over 16 years, our family-run team has built and prepared job sites across North California. 
            We stand behind every project with quality workmanship, safe practices, and clear communication 
            from the first estimate to the final pour.
          </p>
        </div>

        {/* 1. CUADRÍCULA DIRECTIVA (4 COLUMNAS) */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member, index) => (
            <article 
              key={`leader-${member.name}-${index}`} 
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgb(0,0,0,0.35)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
              }`}
            >
              <div className="h-1.5 w-full bg-brand transition-colors duration-300 group-hover:bg-blue-500" />
              
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <TeamAvatar name={member.name} image={member.image} />
                  <h4 className="text-lg font-bold tracking-tight text-slate-900 leading-snug">{member.name}</h4>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-brand">{member.role}</p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-500 text-center">
                  {member.bio}
                </p>

                <div className="mt-7 flex justify-center gap-3 border-t border-black/5 pt-5">
                  <a
                    href="#contact"
                    className="rounded-lg border border-black/5 bg-slate-50 p-2 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-brand/5 hover:text-brand"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:info@aeeconcrete.com"
                    className="rounded-lg border border-black/5 bg-slate-50 p-2 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-brand/5 hover:text-brand"
                    aria-label={`Email a ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 2. SUBSECCIÓN: PROJECT DESIGN & ESTIMATING */}
        <div className="mt-32 border-t border-white/10 pt-24">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
              Precision Takeoffs &amp; Cost Certainty
            </span>
            <h4 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Project Design &amp; Estimating
            </h4>
            {/* Párrafo descriptivo breve */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              Accurate planning and clear estimates to keep your project on schedule and on budget.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {designEstimatingTeam.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={`estimator-${member.name}-${index}`}
                  className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-9 backdrop-blur-md shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl"
                >
                  <div className="relative shrink-0">
                    <TeamAvatar name={member.name} image={member.image} />
                    <div className="absolute -bottom-0.5 -right-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-brand text-white shadow-md">
                      <Icon size={14} />
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h5 className="text-xl font-bold tracking-tight text-white">{member.name}</h5>
                    </div>
                    <p className="text-sm font-semibold text-blue-400 mt-1">{member.role}</p>
                    <span className="inline-block mt-2.5 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                      {member.specialty}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}