"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import content from "@/data/content.json";
import menuData from "@/data/menu.json";
import reviewsData from "@/data/reviews.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-warm-beige" : "text-warm-beige/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getFeaturedItems() {
  const allItems = menuData.categories.flatMap((cat) => cat.items);
  return content.featuredItems
    .map((id) => allItems.find((item) => item.id === id))
    .filter(Boolean);
}

export default function Home() {
  const featuredItems = getFeaturedItems();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-brown -mt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-brown/90 via-coffee-brown/70 to-coffee-brown/90 z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoNnptLTI0IDB2Nmg2VjM0SDEyem0xMi0xMnY2aDZWMjJoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-warm-beige/80 text-sm uppercase tracking-[0.3em] mb-6 font-body">
              Est. 2018
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-cream mb-6 leading-tight"
          >
            Café Regina
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-cream/70 font-light mb-4 font-heading italic"
          >
            {content.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-cream/50 max-w-2xl mx-auto mb-10 font-body"
          >
            {content.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-warm-beige text-coffee-brown font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-cream transition-all duration-300 hover:scale-105"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-cream/10 transition-all duration-300"
            >
              Visit Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cream/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-cream dark:bg-soft-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
              Welcome to
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream mb-8">
              A Place Where Coffee<br />Becomes an Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-coffee-brown/60 dark:text-cream/60 max-w-2xl mx-auto leading-relaxed font-body">
              {content.about.story[0]}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/about"
              className="inline-block mt-10 px-8 py-3 border border-coffee-brown/20 dark:border-cream/20 text-coffee-brown dark:text-cream text-sm uppercase tracking-wider rounded-full hover:bg-coffee-brown hover:text-cream dark:hover:bg-cream dark:hover:text-coffee-brown transition-all duration-300"
            >
              Our Story
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 md:py-32 bg-latte dark:bg-soft-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
                Our Selection
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream">
                Featured Items
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item, index) => (
              <ScrollReveal key={item!.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-cream dark:bg-soft-black rounded-2xl overflow-hidden shadow-lg shadow-coffee-brown/5 dark:shadow-black/20 group"
                >
                  <div className="aspect-[4/3] img-placeholder relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-coffee-brown/20 dark:text-cream/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/10 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-coffee-brown dark:text-cream mb-2">
                      {item!.name}
                    </h3>
                    <p className="text-sm text-coffee-brown/60 dark:text-cream/60 mb-4 line-clamp-2 font-body">
                      {item!.description}
                    </p>
                    <p className="text-lg font-semibold text-warm-beige font-body">
                      ${item!.price.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-block px-8 py-3 bg-coffee-brown dark:bg-cream text-cream dark:text-coffee-brown text-sm uppercase tracking-wider rounded-full hover:bg-coffee-brown/90 dark:hover:bg-cream/90 transition-all duration-300 hover:scale-105"
              >
                View Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-32 bg-cream dark:bg-soft-black">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream">
                What Our Guests Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.reviews.slice(0, 3).map((review, index) => (
              <ScrollReveal key={review.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-latte dark:bg-soft-black/60 rounded-2xl p-8 border border-warm-beige/20 dark:border-warm-beige/10"
                >
                  <StarRating rating={review.rating} />
                  <p className="text-coffee-brown/70 dark:text-cream/70 mt-4 mb-6 text-sm leading-relaxed italic font-body">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-coffee-brown dark:text-cream font-body">
                    {review.name}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 md:py-32 bg-latte dark:bg-soft-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-warm-beige mb-4 font-body">
                @caferegina
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-coffee-brown dark:text-cream">
                Follow Our Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {content.instagramPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.08}>
                <motion.a
                  href={content.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square img-placeholder rounded-xl overflow-hidden relative group block"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-coffee-brown/15 dark:text-cream/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-coffee-brown dark:bg-coffee-brown/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoNnptLTI0IDB2Nmg2VjM0SDEyem0xMi0xMnY2aDZWMjJoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-cream mb-6">
              Come Visit Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-cream/60 mb-4 font-body">
              {content.contact.address}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-cream/50 text-sm font-body mb-10">
              {content.contact.hours.map((h, i) => (
                <span key={i}>
                  {h.days}: {h.time}
                  {i < content.contact.hours.length - 1 && <span className="hidden sm:inline ml-3">•</span>}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-warm-beige text-coffee-brown font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-cream transition-all duration-300 hover:scale-105"
            >
              Get Directions
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
