"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-black/5" 
          : "bg-white/95 backdrop-blur-md border-b border-black/[0.04] shadow-none"
      }`}
    >
      <div 
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10 transition-all duration-300 ease-out ${
          isScrolled ? "h-20" : "h-24"
        }`}
      >
        
        {/* LOGO + TEXTO CORPORATIVO (Izquierda) */}
        <div className="flex shrink-0 items-center z-10">
          <a 
            href="#home" 
            className="group flex items-center gap-3.5 sm:gap-4 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            {/* Imagen del Logo (Isotipo de la excavadora) */}
            <div className={`relative shrink-0 transition-all duration-300 ease-out ${
              isScrolled ? "h-10 w-12 sm:h-11 sm:w-14" : "h-12 w-14 sm:h-14 sm:w-16"
            }`}>
              <Image 
                src="/logow.png" 
                alt="AEE Logo Icon" 
                fill
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Texto Uniforme y del Mismo Color */}
            <div className="flex flex-col justify-center">
              <span className={`font-extrabold tracking-tight text-brand leading-none transition-all duration-300 ease-out ${
                isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              }`}>
                AEE CONCRETE
              </span>
              <span className={`font-semibold tracking-[0.16em] text-slate-500 leading-none mt-1.5 transition-all duration-300 ease-out group-hover:text-brand/80 ${
                isScrolled ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[11px]"
              }`}>
                & EXCAVATION • DRILLING
              </span>
            </div>
          </a>
        </div>

        {/* MENÚ DE NAVEGACIÓN (Centro) */}
        <nav aria-label="Main" className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10 px-6">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="relative py-1.5 text-sm xl:text-[15px] font-semibold tracking-tight text-slate-600 transition-all duration-200 
                         hover:-translate-y-0.5 hover:text-brand active:scale-95
                         after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full
                         after:bg-brand after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ACCIONES (Derecha) */}
        <div className="hidden shrink-0 items-center justify-end gap-5 xl:gap-6 lg:flex">
          <a 
            href="tel:+19163404542" 
            className="group inline-flex items-center gap-2.5 rounded-xl border border-black/5 bg-slate-50/80 px-3.5 py-2 text-sm font-semibold tracking-tight text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-brand/5 hover:text-brand active:scale-95 whitespace-nowrap"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
              <Phone size={14} />
            </span>
            <span>(916) 340-4542</span>
          </a>
          <a 
            href="#contact" 
            className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-brand font-semibold tracking-tight text-white shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95 ${
              isScrolled ? "text-sm px-5 py-2.5" : "text-sm xl:text-base px-6 py-3"
            }`}
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Botón Hamburguesa (Móviles) */}
        <div className="flex justify-end lg:hidden shrink-0">
          <button
            type="button"
            className="rounded-xl border border-black/5 bg-slate-50/80 p-2.5 text-slate-700 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-sm active:scale-95"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {open && (
        <nav aria-label="Mobile" className="absolute left-0 top-full w-full border-t border-black/5 bg-white/95 backdrop-blur-xl px-6 pb-8 pt-4 lg:hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
          <ul className="flex flex-col divide-y divide-black/5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  onClick={() => setOpen(false)} 
                  className="block py-3.5 text-lg font-semibold tracking-tight text-slate-700 transition-all duration-200 hover:translate-x-1 hover:text-brand active:scale-95"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="tel:+19163404542" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-2.5 py-3.5 text-base font-semibold text-brand transition-all duration-200 active:scale-95"
              >
                <Phone size={16} />
                <span>Call: (916) 340-4542</span>
              </a>
            </li>
          </ul>
          <a 
            href="#contact" 
            onClick={() => setOpen(false)} 
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-brand px-6 py-4 text-center text-base font-semibold tracking-tight text-white shadow-lg shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}