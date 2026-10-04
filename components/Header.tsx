"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200" 
          : "bg-white border-b border-transparent shadow-none"
      }`}
    >
      <div 
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
          isScrolled ? "h-20" : "h-28"
        }`}
      >
        
        {/* LOGO + TEXTO CORPORATIVO UNIFORME (Izquierda) */}
        <div className="flex shrink-0 items-center z-10">
          <a 
            href="#home" 
            className="group flex items-center gap-3 sm:gap-3.5 transition-all duration-300 active:scale-95"
          >
            {/* Imagen del Logo (Isotipo de la retroexcavadora) */}
            <div className={`relative shrink-0 transition-all duration-500 ease-in-out ${
              isScrolled ? "h-10 w-12 sm:h-11 sm:w-14" : "h-14 w-14 sm:h-16 sm:w-18"
            }`}>
              <Image 
                src="/logow.png" 
                alt="AEE Logo Icon" 
                fill
                className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Texto Uniforme y del Mismo Color (Azul Corporativo) */}
            <div className="flex flex-col justify-center">
              <span className={`font-black tracking-tight text-brand leading-none transition-all duration-500 ease-in-out ${
                isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl lg:text-[26px]"
              }`}>
                AEE CONCRETE
              </span>
              <span className={`font-bold tracking-[0.18em] text-brand leading-none mt-1 transition-all duration-500 ease-in-out ${
                isScrolled ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-[13px]"
              }`}>
                & EXCAVATIONS
              </span>
            </div>
          </a>
        </div>

        {/* MENÚ DE NAVEGACIÓN (Centro) */}
        <nav aria-label="Main" className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 px-4">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="relative text-base font-bold text-gray-800 transition-all duration-300 
                         hover:text-brand active:scale-95
                         after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-0 
                         after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ACCIONES (Derecha) */}
        <div className="hidden shrink-0 items-center justify-end gap-6 lg:flex">
          <a 
            href="#contact" 
            className="text-base font-bold text-gray-800 transition-colors hover:text-brand active:scale-95 whitespace-nowrap"
          >
            (916) 340-4542
          </a>
          <a 
            href="#contact" 
            className={`whitespace-nowrap rounded-md bg-brand font-bold text-white transition-all duration-300 hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95 ${
              isScrolled ? "text-sm px-5 py-2.5" : "text-base px-6 py-3"
            }`}
          >
            Get a Quote
          </a>
        </div>

        {/* Botón Hamburguesa (Móviles) */}
        <div className="flex justify-end lg:hidden shrink-0">
          <button
            type="button"
            className="rounded-md p-2 text-gray-800 transition-colors hover:bg-gray-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {open && (
        <nav aria-label="Mobile" className="absolute left-0 top-full w-full border-t border-gray-200 bg-white px-4 pb-6 pt-2 lg:hidden shadow-xl">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  onClick={() => setOpen(false)} 
                  className="block py-3 text-lg font-bold text-gray-800 active:text-brand active:scale-95 transition-transform"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="block py-3 text-lg font-bold text-brand active:scale-95 transition-transform"
              >
                Call: (916) 340-4542
              </a>
            </li>
          </ul>
          <a 
            href="#contact" 
            onClick={() => setOpen(false)} 
            className="mt-4 block w-full rounded-md bg-brand px-5 py-3.5 text-center text-lg font-bold text-white active:scale-95 transition-transform shadow-md"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}