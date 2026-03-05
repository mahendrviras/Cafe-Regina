"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import content from "@/data/content.json";

export default function AboutPage() {
  const { about } = content;

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-coffee-brown dark:bg-coffee-brown/90 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-warm-beige/80 text-sm uppercase tracking-[0.3em] mb-4 font-body">
              Since 2018
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-4">
              {about.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-cream/50 max-w-xl mx-auto font-body italic text-lg">
              {about.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-cream dark:bg-soft-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[3/4] img-placeholder rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-coffee-brown/15 dark:text-cream/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            <div>
              {about.story.map((paragraph, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <p className="text-coffee-brown/70 dark:text-cream/70 mb-6 leading-relaxed font-body">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-latte dark:bg-soft-black/90">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
                What We Believe
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream mb-6">
                {about.philosophy.title}
              </h2>
              <p className="text-coffee-brown/60 dark:text-cream/60 max-w-2xl mx-auto leading-relaxed font-body">
                {about.philosophy.text}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.philosophy.values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-cream dark:bg-soft-black rounded-2xl p-8 text-center border border-warm-beige/10 dark:border-warm-beige/5"
                >
                  <h3 className="text-xl font-heading font-semibold text-coffee-brown dark:text-cream mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-coffee-brown/60 dark:text-cream/60 leading-relaxed font-body">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Gallery */}
      <section className="py-24 md:py-32 bg-cream dark:bg-soft-black">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
                The Space
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream">
                Our Atmosphere
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className={`img-placeholder rounded-xl overflow-hidden relative ${
                    i === 1 || i === 4 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-10 h-10 text-coffee-brown/15 dark:text-cream/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
