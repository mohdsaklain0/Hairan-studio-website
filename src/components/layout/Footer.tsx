import Image from "next/image";
import { SITE, SOCIALS, NAV_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-dark-footer border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/images/logo-icon-white.png"
                alt="Hairan Studio"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                Hairan Studio
              </span>
            </a>
            <p className="text-grey text-sm leading-relaxed max-w-xs">
              AI-powered creative agency building the future of brand
              storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/60">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-grey hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/60">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-grey">
              <p>{SITE.email}</p>
              <p>{SITE.phone}</p>
            </div>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey hover:text-white transition-colors duration-300"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.name} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-grey">
            &copy; 2026 Hairan Studio. All rights reserved.
          </p>
          <p className="text-xs text-grey">
            Made with AI + Human Imagination
          </p>
        </div>
      </div>
    </footer>
  );
}
