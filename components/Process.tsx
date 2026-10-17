"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, Shovel, BrickWall, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Technical Takeoff & Estimate",
    subtitle: "Blueprint Review & Cost Certainty",
    description:
      "We analyze your engineering plans, calculate exact material quantities, and deliver a transparent, itemized proposal with clear timelines.",
    icon: FileSpreadsheet,
  },
  {
    number: "02",
    title: "Site Prep, Grading & Drilling",
    subtitle: "Laser-Guided Earthwork",
    description:
      "Our heavy machinery crew clears, trenches, drills foundation caissons, and compacts the pad to exact engineering elevations.",
    icon: Shovel,
  },
  {
    number: "03",
    title: "Reinforcement & Structural Pour",
    subtitle: "Built to Carry the Load",
    description:
      "Precision formwork, rebar tying, seismic tie-ins, and high-strength concrete placement executed with strict slump and curing control.",
    icon: BrickWall,
  },
  {
    number: "04",
    title: "Inspection & Final Handover",
    subtitle: "Code Compliant & Job-Ready",
    description:
      "We walk the site with inspectors and project managers, ensuring spotless cleanup, verified tolerances, and on-budget completion.",
    icon: ShieldCheck,
  },
];

export default function Process() {
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

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-slate-50/80 py-24 sm:py-32 border-t border-black/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* ENCABEZADO */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            How We Work
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            From Blueprint Takeoff to Final Pour
          </h2>
          <div className="mt-5 h-1.5 w-20 rounded-full bg-brand" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            A streamlined, four-stage execution workflow designed to keep general contractors, developers, and homeowners on schedule.
          </p>
        </div>

        {/* PASOS DEL PROCESO */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 shadow-[0_12px_36px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-[0_24px_48px_rgb(11,61,145,0.1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-brand/10 bg-brand/5 p-3.5 text-brand transition-all duration-200 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/25">
                      <Icon size={24} />
                    </div>
                    <span className="text-3xl font-extrabold tracking-tight text-slate-200 transition-colors duration-200 group-hover:text-brand/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-black/5 pt-4 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-brand transition-colors duration-200">
                  <span>Stage {step.number}</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
