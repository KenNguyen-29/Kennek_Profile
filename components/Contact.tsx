"use client";

import { useState, FormEvent } from "react";
import { Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
    ...(profile.github
      ? [{ icon: Github, label: "GitHub", value: "github.com/huannek", href: profile.github }]
      : []),
  ];

  const inputClass =
    "w-full min-h-[44px] rounded-xl border border-emerald-400/10 bg-white/[0.04] px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 outline-none backdrop-blur-sm transition-colors focus:border-emerald-400/30 focus:ring-1 focus:ring-emerald-500/20 sm:text-sm";

  return (
    <SectionReveal id="contact">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to connect? Feel free to reach out."
          align="center"
        />

        <div className="mt-12 grid min-w-0 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-5 md:gap-10 lg:gap-12">
          <div className="min-w-0 space-y-4 md:col-span-2">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass-card-hover flex min-w-0 items-center gap-4 p-4 transition-all duration-300 hover:shadow-emerald-500/10 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    <p className="break-words text-sm font-medium text-slate-100 transition-colors group-hover:text-emerald-300 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block min-w-0"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="min-w-0">
                  {content}
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card min-w-0 space-y-5 p-5 sm:p-6 md:col-span-3 md:p-8"
          >
            <div className="grid min-w-0 gap-5 md:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium uppercase tracking-wider text-slate-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium uppercase tracking-wider text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium uppercase tracking-wider text-slate-500"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Project inquiry"
                className={inputClass}
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium uppercase tracking-wider text-slate-500"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClass} min-h-[120px] resize-none`}
              />
            </div>

            <button type="submit" className="btn-primary">
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

            <p className="text-sm text-slate-600">
              This is a static demo form. For real inquiries, email me directly.
            </p>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
