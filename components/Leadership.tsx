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

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("");

function TeamAvatar({ name, image }: { name: string; image?: string }) {
  const [imageError, setImageError] = useState(false);

  if (!image || imageError) {
    return (
      <div className="relative mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-brand text-2xl font-bold text-white shadow-inner">
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="relative mb-4 h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-slate-50 bg-slate-100 shadow-inner">
      <Image 
        src={image} 
        alt={name} 
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
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
    <section ref={sectionRef} id="about" className="bg-slate-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div 
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Our Leadership</h2>
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Backed by Experience</h3>
          <div className="mt-6 h-1 w-20 rounded-full bg-brand" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            For over 16 years, our family-run team has built and prepared job sites across North California. 
            We stand behind every project with quality workmanship, safe practices, and clear communication 
            from the first estimate to the final pour.
          </p>
        </div>

        {/* 1. CUADRÍCULA DIRECTIVA (4 COLUMNAS) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member, index) => (
            <article 
              key={`leader-${member.name}-${index}`} 
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-1000 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
              }`}
            >
              <div className="h-2 w-full bg-brand transition-colors duration-300 group-hover:bg-blue-400" />
              
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-col items-center text-center">
                  <TeamAvatar name={member.name} image={member.image} />
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">{member.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600 text-center">
                  {member.bio}
                </p>

                <div className="mt-6 flex justify-center gap-4 border-t border-slate-100 pt-5">
                  <a href="#" className="text-slate-400 transition-colors hover:text-brand" aria-label={`LinkedIn de ${member.name}`}>
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-slate-400 transition-colors hover:text-brand" aria-label={`Email a ${member.name}`}>
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 2. SUBSECCIÓN: PROJECT DESIGN & ESTIMATING */}
        <div className="mt-28 border-t border-slate-800 pt-20">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/20">
              Precision Takeoffs & Cost Certainty
            </span>
            <h4 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Project Design & Estimating
            </h4>
            {/* Párrafo descriptivo breve */}
            <p className="mt-3 max-w-xl text-base text-slate-400">
              Accurate planning and clear estimates to keep your project on schedule and on budget.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {designEstimatingTeam.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={`estimator-${member.name}-${index}`}
                  className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-2xl border border-slate-800 bg-slate-800/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand hover:bg-slate-800"
                >
                  <div className="relative shrink-0">
                    <TeamAvatar name={member.name} image={member.image} />
                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white shadow-md">
                      <Icon size={14} />
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h5 className="text-xl font-bold text-white">{member.name}</h5>
                    </div>
                    <p className="text-sm font-semibold text-blue-400 mt-0.5">{member.role}</p>
                    <span className="inline-block mt-2 rounded bg-slate-700/60 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {member.specialty}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
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