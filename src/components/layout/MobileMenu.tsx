"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-black flex flex-col"
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col justify-center px-8 gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-3xl font-heading font-bold text-white hover:text-grey transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Bottom */}
          <div className="px-8 pb-10 space-y-6">
            <a
              href="#contact"
              onClick={onClose}
              className="block text-center w-full py-4 rounded-full bg-white text-black font-semibold text-lg"
            >
              Let&apos;s Talk
            </a>
            <div className="flex gap-6 justify-center">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
