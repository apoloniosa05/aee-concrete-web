"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "Commercial",
    serviceNeeded: "Concrete & Excavation",
    city: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Quote Request] ${formData.projectType} - ${formData.serviceNeeded} (${formData.city || "North CA"})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company || "N/A"}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nService Needed: ${formData.serviceNeeded}\nProject City: ${formData.city}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:info@aeeconcrete.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32 border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN EJECUTIVA DE CONTACTO */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Request an Estimate
              </span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Let’s Build Your Next Project
              </h2>
              <div className="mt-5 h-1.5 w-20 rounded-full bg-brand" />
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-500">
                Share your project scope or architectural plans. Our estimating team provides detailed, transparent proposals for commercial and residential jobs across Northern California.
              </p>
            </div>

            {/* Tarjetas de Contacto Directo */}
            <div className="space-y-4">
              <a
                href="tel:+19163404542"
                className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-slate-50/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/20 transition-transform duration-200 group-hover:scale-105">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Dispatch &amp; Estimating
                  </p>
                  <p className="mt-0.5 text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-brand transition-colors">
                    (916) 340-4542
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@aeeconcrete.com"
                className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-slate-50/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Plans &amp; Bid Invitations
                  </p>
                  <p className="mt-0.5 text-base font-bold tracking-tight text-slate-900 group-hover:text-brand transition-colors">
                    info@aeeconcrete.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-slate-50/80 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sacramento Headquarters
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">
                    1234 Capitol Mall, Suite 400, Sacramento, CA 95814
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock size={13} className="text-brand" />
                    <span>Mon – Fri: 7:00 AM – 5:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sello de Garantía */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-brand/15 bg-brand/[0.04] p-4 text-sm text-slate-700">
              <ShieldCheck size={24} className="shrink-0 text-brand" />
              <span>
                <strong className="font-semibold text-slate-900">Fast Turnaround:</strong> Most residential and commercial takeoff inquiries receive an initial response within 24 business hours.
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE COTIZACIÓN */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgb(0,0,0,0.07)]">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Project Quote Request
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">
                Fill out the details below and our estimating team will prepare your consultation.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-50/70 p-8 text-center">
                  <CheckCircle2 size={44} className="mx-auto text-emerald-600" />
                  <h4 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
                    Quote Request Ready
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Your email client has been opened with your project specifications pre-filled for{" "}
                    <strong className="font-semibold text-slate-900">info@aeeconcrete.com</strong>. You can also call us directly at{" "}
                    <a href="tel:+19163404542" className="font-bold text-brand underline">
                      (916) 340-4542
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Edit Project Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company / Contractor (Optional)
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        placeholder="Builders Inc. or Homeowner"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="(916) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="quote-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Sector
                      </label>
                      <select
                        id="quote-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm font-medium text-slate-900 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Industrial / Public">Industrial / Public</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Primary Scope
                      </label>
                      <select
                        id="quote-service"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm font-medium text-slate-900 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="Concrete & Excavation">Concrete &amp; Excavation</option>
                        <option value="Structural Concrete Only">Structural Concrete</option>
                        <option value="Excavation & Pier Drilling">Excavation &amp; Drilling</option>
                        <option value="Project Takeoff / Estimate">Takeoff &amp; Estimating</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-city" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Job Site City *
                      </label>
                      <input
                        id="quote-city"
                        type="text"
                        required
                        placeholder="e.g. Sacramento, CA"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Project Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="quote-details"
                      rows={4}
                      required
                      placeholder="Describe approximate square footage, drilling depth, grading requirements, or target start date..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-black/10 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-brand px-8 py-4 text-base font-semibold tracking-tight text-white shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/35 active:scale-95"
                  >
                    <span>Submit Estimate Request</span>
                    <Send size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
