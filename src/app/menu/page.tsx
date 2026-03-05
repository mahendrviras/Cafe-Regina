"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import menuData from "@/data/menu.json";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = menuData.categories;
  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-coffee-brown dark:bg-coffee-brown/90 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-warm-beige/80 text-sm uppercase tracking-[0.3em] mb-4 font-body">
              Our Selection
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-4">
              The Menu
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-cream/50 max-w-xl mx-auto font-body">
              Every item is crafted with care, using the finest ingredients
              sourced locally and from around the world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[72px] z-40 bg-cream/95 dark:bg-soft-black/95 backdrop-blur-md border-b border-warm-beige/20 dark:border-warm-beige/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-coffee-brown dark:bg-cream text-cream dark:text-coffee-brown"
                  : "text-coffee-brown/60 dark:text-cream/60 hover:bg-warm-beige/20"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-coffee-brown dark:bg-cream text-cream dark:text-coffee-brown"
                    : "text-coffee-brown/60 dark:text-cream/60 hover:bg-warm-beige/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 md:py-24 bg-cream dark:bg-soft-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 last:mb-0"
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-coffee-brown dark:text-cream mb-2">
                    {category.name}
                  </h2>
                  <p className="text-coffee-brown/50 dark:text-cream/50 font-body">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 0.05}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-5 bg-latte dark:bg-soft-black/60 rounded-2xl p-5 border border-warm-beige/10 dark:border-warm-beige/5 group"
                      >
                        <div className="w-24 h-24 flex-shrink-0 img-placeholder rounded-xl overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-coffee-brown/15 dark:text-cream/15"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/5 transition-all duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-base font-heading font-semibold text-coffee-brown dark:text-cream">
                              {item.name}
                            </h3>
                            <span className="text-base font-semibold text-warm-beige whitespace-nowrap font-body">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-sm text-coffee-brown/50 dark:text-cream/50 mt-1 line-clamp-2 font-body">
                            {item.description}
                          </p>
                          {item.tags.length > 0 && (
                            <div className="flex gap-1.5 mt-2 flex-wrap">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-warm-beige/20 text-coffee-brown/60 dark:text-cream/60 font-body"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
