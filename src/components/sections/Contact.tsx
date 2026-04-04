"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { SITE, SOCIALS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Let's Create Together"
          subtitle="Got a project in mind? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6">
                Contact Info
              </h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 text-grey hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">{SITE.email}</span>
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-4 text-grey hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">{SITE.phone}</span>
                </a>
                <div className="flex items-start gap-4 text-grey">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm leading-relaxed">
                    {SITE.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-grey hover:bg-white/10 hover:text-white transition-all duration-300"
                    aria-label={s.name}
                  >
                    <SocialIcon name={s.name} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
