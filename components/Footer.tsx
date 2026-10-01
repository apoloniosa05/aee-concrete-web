"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 relative overflow-hidden">
      
      {/* Efecto de luz de fondo sutil en la esquina del footer */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8 relative z-10">
        
        {/* Columna 1: Emblema de Marca e Información General */}
        <div className="md:col-span-4 space-y-8">
          
          {/* EMBLEMA DEL LOGO CON EFECTO INTERACTIVO */}
          <div className="group relative inline-block">
            {/* Sombra de resplandor (Glow) trasera */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-brand opacity-0 blur transition duration-500 group-hover:opacity-40" />
            
            {/* Contenedor principal del logo */}
            <div className="relative flex items-center justify-center rounded-2xl bg-white px-6 py-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
              <Image 
                src="/logow.png" /* Cambia a .png si es necesario */
                alt="AEE Concrete and Excavation LLC Logo" 
                width={160} 
                height={70} 
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-400 pr-4">
            Delivering rock-solid concrete and excavation services across North California. 
            One crew, one standard of work, ensuring quality and safety from the first estimate to the final pour.
          </p>
          
          {/* Redes Sociales Corporativas */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="rounded-full bg-slate-900 border border-slate-800 p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/20" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="rounded-full bg-slate-900 border border-slate-800 p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/20" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="rounded-full bg-slate-900 border border-slate-800 p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-brand/20" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Columna 2: Detalles de Contacto y Oficina */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-lg font-bold text-white tracking-wide">Contact & Office</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="group flex items-start gap-4 transition-colors hover:text-slate-200">
              <div className="rounded-lg bg-slate-900/50 p-2 transition-colors group-hover:bg-brand/20">
                <MapPin className="shrink-0 text-brand" size={18} />
              </div>
              <span className="pt-1">
                <strong className="text-slate-200 font-semibold">Headquarters</strong><br />
                1234 Capitol Mall, Suite 400<br />
                Sacramento, CA 95814
              </span>
            </li>
            <li className="group flex items-center gap-4 transition-colors hover:text-slate-200">
              <div className="rounded-lg bg-slate-900/50 p-2 transition-colors group-hover:bg-brand/20">
                <Phone className="shrink-0 text-brand" size={18} />
              </div>
              <span className="font-medium">(916) 555-0198</span>
            </li>
            <li className="group flex items-center gap-4 transition-colors hover:text-slate-200">
              <div className="rounded-lg bg-slate-900/50 p-2 transition-colors group-hover:bg-brand/20">
                <Mail className="shrink-0 text-brand" size={18} />
              </div>
              <a href="mailto:info@aeeconcrete.com" className="font-medium hover:text-brand-light transition-colors">
                info@aeeconcrete.com
              </a>
            </li>
            <li className="group flex items-center gap-4 transition-colors hover:text-slate-200">
              <div className="rounded-lg bg-slate-900/50 p-2 transition-colors group-hover:bg-brand/20">
                <Clock className="shrink-0 text-brand" size={18} />
              </div>
              <span className="font-medium">Mon - Fri: 7:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Mapa de Ubicación */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="text-lg font-bold text-white tracking-wide">Our Location</h4>
          <div className="group relative h-52 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99969.44498308824!2d-121.56455798993876!3d38.56165006738914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad048259020fb%3A0x8e8334a1796c80c3!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AEE Office Location in Sacramento"
              className="grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            ></iframe>
            {/* Borde interior sutil sobre el mapa */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>

      </div>

      {/* Barra Inferior (Legal y Copyright) */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 text-sm text-slate-500 relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} AEE Concrete and Excavation LLC. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}