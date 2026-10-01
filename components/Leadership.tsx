"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

// Arreglo actualizado con los 4 integrantes
const team = [
  { 
    name: "Alberto Salcedo", 
    role: "Chief Executive Officer",
    bio: "With over 16 years of hands-on experience in the construction industry, Alberto leads our corporate vision and strategy with a commitment to unyielding quality, safety, and structural integrity.",
    image: "/user.jpg"
  },
  { 
    name: "Alberto Salcedo Sr.", 
    role: "Field Operations Manager",
    bio: "Bringing decades of proven mastery in the field, Alberto Sr. supervises on-site heavy machinery operations, excavation grading, and concrete pours to ensure absolute precision on every job.",
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
    bio: "Spearheading our digital transformation, Apolonio optimizes field logistics and organizational efficiency through advanced cloud infrastructure, automated systems, and modern technology.",
    image: "/apolonio.png"
  },
];

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("");

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animación al hacer scroll
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

  return (
    <section ref={sectionRef} id="about" className="bg-slate-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección en modo oscuro */}
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

        {/* Cuadrícula adaptada a 4 columnas en pantallas grandes (lg:grid-cols-4) */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <article 
              key={member.name} 
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-1000 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
              }`}
            >
              {/* Barra superior azul */}
              <div className="h-2 w-full bg-brand transition-colors duration-300 group-hover:bg-blue-400" />
              
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar con soporte para imagen o iniciales */}
                  <div className="relative mb-4 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-slate-50 bg-brand shadow-inner">
                    <div className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-white">
                      {initials(member.name)}
                    </div>
                    {member.image && (
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill
                        className="relative z-20 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">{member.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600 text-center">
                  {member.bio}
                </p>

                {/* Enlaces de contacto */}
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

      </div>
    </section>
  );
}