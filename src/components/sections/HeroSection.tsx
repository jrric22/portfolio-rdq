"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-8 md:px-20 pt-32 pb-16 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 left-8 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-1/2 border-l border-[rgba(201,168,76,0.1)] pointer-events-none hidden md:block" />

      {/* Text */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)] rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        <h1 className="font-playfair text-5xl md:text-6xl font-black leading-[1.05] text-cream mb-3">
          Ricardo
          <br />
          De Quiroz <span className="text-gold">Jr.</span>
        </h1>

        <p className="text-muted text-lg font-light tracking-wide mb-6">
          Junior Software Engineer &nbsp;·&nbsp; Full-Stack Developer
        </p>

        <p className="text-[#b0b8c8] max-w-lg mb-10">
          BS Information Technology graduate passionate about building robust
          web applications. Experienced with React.js, TypeScript, PostgreSQL,
          and modern full-stack ecosystems.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-gold text-navy font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded hover:bg-gold-light transition-all hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-[rgba(201,168,76,0.35)] text-gold font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded hover:bg-[rgba(201,168,76,0.1)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="relative z-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative w-72 h-[400px]">
          {/* Gold border frame */}
          <div className="absolute -top-3 -right-3 w-full h-full border border-gold rounded pointer-events-none" />
          {/* Corner accent */}
          <div className="absolute -bottom-5 -left-5 w-14 h-14 border-b-2 border-l-2 border-gold pointer-events-none" />

          <Image
            src="/images/profile.jpg"
            alt="Ricardo De Quiroz Jr."
            fill
            className="object-cover object-top rounded"
            priority
          />

          {/* Stat badge */}
          <div className="absolute bottom-6 -left-10 bg-navy-card border border-[rgba(201,168,76,0.25)] rounded px-4 py-2 z-10">
            <div className="font-playfair text-3xl text-gold font-bold">25</div>
            <div className="text-muted text-xs tracking-wide">Years Old</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
