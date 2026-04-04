"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUDGET_OPTIONS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const WEB3FORMS_KEY = "c0f09f70-5f94-4980-a84b-3dd0b0aa9943";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email";
    if (!form.get("description")) errs.description = "Tell us about your project";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    setSubmitError("");

    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    form.append("access_key", WEB3FORMS_KEY);
    form.append("subject", `New enquiry from ${form.get("name")} — Hairan Studio`);
    form.append("from_name", "Hairan Studio Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyles =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <CheckCircle size={48} className="text-white/60 mb-4" />
          <h3 className="font-heading text-2xl font-bold mb-2">
            Thank you!
          </h3>
          <p className="text-grey text-sm mb-6">
            We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setErrors({});
              setSubmitError("");
            }}
            className="text-sm text-white/40 hover:text-white underline underline-offset-4 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className={inputStyles}
              aria-label="Your Name"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className={inputStyles}
              aria-label="Email Address"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <input
              name="company"
              type="text"
              placeholder="Company Name (optional)"
              className={inputStyles}
              aria-label="Company Name"
            />
          </div>

          {/* Budget */}
          <div>
            <select
              name="budget"
              className={`${inputStyles} appearance-none cursor-pointer`}
              defaultValue=""
              aria-label="Budget Range"
            >
              <option value="" disabled className="bg-black">
                Budget Range
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-black">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <textarea
              name="description"
              placeholder="Tell us about your project..."
              rows={4}
              className={`${inputStyles} resize-none`}
              aria-label="Project Description"
            />
            {errors.description && (
              <p className="text-red-400 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Submit Error */}
          {submitError && (
            <p className="text-red-400 text-xs">{submitError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/80 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
