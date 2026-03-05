"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import content from "@/data/content.json";

export default function ContactPage() {
  const { contact } = content;

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-coffee-brown dark:bg-coffee-brown/90 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-warm-beige/80 text-sm uppercase tracking-[0.3em] mb-4 font-body">
              Find Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-4">
              Visit Café Regina
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-cream/50 max-w-xl mx-auto font-body">
              We&apos;d love to welcome you. Stop by for a cup of coffee and experience
              the warmth of Café Regina.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24 md:py-32 bg-cream dark:bg-soft-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-coffee-brown dark:text-cream mb-8">
                  Get in Touch
                </h2>
              </ScrollReveal>

              {/* Address */}
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 mb-8"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-latte dark:bg-soft-black/60 flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-beige" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-brown dark:text-cream mb-1 font-body">
                      Address
                    </h3>
                    <p className="text-coffee-brown/60 dark:text-cream/60 font-body">
                      {contact.address}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal delay={0.15}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 mb-8"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-latte dark:bg-soft-black/60 flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-beige" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-brown dark:text-cream mb-1 font-body">
                      Phone
                    </h3>
                    <p className="text-coffee-brown/60 dark:text-cream/60 font-body">
                      {contact.phone}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 mb-8"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-latte dark:bg-soft-black/60 flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-beige" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-brown dark:text-cream mb-1 font-body">
                      Email
                    </h3>
                    <p className="text-coffee-brown/60 dark:text-cream/60 font-body">
                      {contact.email}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Instagram */}
              <ScrollReveal delay={0.25}>
                <motion.a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 mb-12 group"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-latte dark:bg-soft-black/60 flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-beige" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-brown dark:text-cream mb-1 font-body">
                      Instagram
                    </h3>
                    <p className="text-coffee-brown/60 dark:text-cream/60 group-hover:text-coffee-brown dark:group-hover:text-cream transition-colors font-body">
                      @caferegina
                    </p>
                  </div>
                </motion.a>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={0.3}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-brown dark:text-cream mb-4 font-body">
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  {contact.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-warm-beige/10 dark:border-warm-beige/5"
                    >
                      <span className="text-sm text-coffee-brown/70 dark:text-cream/70 font-body">
                        {h.days}
                      </span>
                      <span className="text-sm font-medium text-coffee-brown dark:text-cream font-body">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Map */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="rounded-2xl overflow-hidden h-full min-h-[400px] bg-latte dark:bg-soft-black/60 border border-warm-beige/10 dark:border-warm-beige/5">
                <iframe
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Café Regina Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
