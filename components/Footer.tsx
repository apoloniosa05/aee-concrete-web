"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-white/10">
      
      {/* Efecto de luz de fondo sutil en la esquina del footer */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:gap-16 px-6 py-24 sm:px-8 md:grid-cols-12 lg:px-10 relative z-10">
        
        {/* Columna 1: Emblema de Marca e Información General */}
        <div className="md:col-span-4 space-y-8">
          
          {/* EMBLEMA DEL LOGO CON EFECTO INTERACTIVO */}
          <div className="group relative inline-block">
            {/* Sombra de resplandor (Glow) trasera */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-brand opacity-0 blur-md transition duration-300 group-hover:opacity-45" />
            
            {/* Contenedor principal del logo */}
            <div className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-white px-7 py-4 shadow-xl transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-2xl">
              <Image 
                src="/logow.png" /* Cambia a .png si es necesario */
                alt="AEE Concrete and Excavation LLC Logo" 
                width={160} 
                height={70} 
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-400 pr-4">
            Delivering rock-solid concrete and excavation services across North California. 
            One crew, one standard of work, ensuring quality and safety from the first estimate to the final pour.
          </p>
          
          {/* Redes Sociales Corporativas */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="rounded-full bg-white/[0.03] border border-white/10 p-3 text-slate-400 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/25" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="rounded-full bg-white/[0.03] border border-white/10 p-3 text-slate-400 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/25" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="rounded-full bg-white/[0.03] border border-white/10 p-3 text-slate-400 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/25" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Columna 2: Detalles de Contacto y Oficina */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-lg font-bold text-white tracking-tight">Contact & Office</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="group flex items-start gap-4 transition-all duration-200 hover:translate-x-0.5 hover:text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md transition-all duration-200 group-hover:border-brand/40 group-hover:bg-brand/20">
                <MapPin className="shrink-0 text-blue-400" size={18} />
              </div>
              <span className="pt-0.5 leading-relaxed">
                <strong className="text-white font-semibold">Headquarters</strong><br />
                1234 Capitol Mall, Suite 400<br />
                Sacramento, CA 95814
              </span>
            </li>
            <li className="group flex items-center gap-4 transition-all duration-200 hover:translate-x-0.5 hover:text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md transition-all duration-200 group-hover:border-brand/40 group-hover:bg-brand/20">
                <Phone className="shrink-0 text-blue-400" size={18} />
              </div>
              <span className="font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">(916) 340-4542</span>
            </li>
            <li className="group flex items-center gap-4 transition-all duration-200 hover:translate-x-0.5 hover:text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md transition-all duration-200 group-hover:border-brand/40 group-hover:bg-brand/20">
                <Mail className="shrink-0 text-blue-400" size={18} />
              </div>
              <a href="mailto:info@aeeconcrete.com" className="font-semibold text-slate-300 hover:text-blue-400 transition-colors duration-200">
                info@aeeconcrete.com
              </a>
            </li>
            <li className="group flex items-center gap-4 transition-all duration-200 hover:translate-x-0.5 hover:text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md transition-all duration-200 group-hover:border-brand/40 group-hover:bg-brand/20">
                <Clock className="shrink-0 text-blue-400" size={18} />
              </div>
              <span className="font-medium text-slate-400">Mon - Fri: 7:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Mapa de Ubicación */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-lg font-bold text-white tracking-tight">Our Location</h4>
          <div className="group relative h-56 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99969.44498308824!2d-121.56455798993876!3d38.56165006738914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad048259020fb%3A0x8e8334a1796c80c3!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AEE Office Location in Sacramento"
              className="grayscale opacity-75 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            ></iframe>
            {/* Borde interior sutil sobre el mapa */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>

      </div>

      {/* Barra Inferior (Legal y Copyright) */}
      <div className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-8 text-sm text-neutral-400 relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:px-8 md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} AEE Concrete and Excavation LLC. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}