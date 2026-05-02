'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '4', label: 'Years BSIT Degree' },
  { num: '5+', label: 'Months Industry Exp.' },
  { num: '10+', label: 'Technologies Used' },
  { num: '∞', label: 'Willingness to Learn' },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy-mid px-8 md:px-20 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gold" />
        <span className="text-gold text-xs font-semibold tracking-[2px] uppercase">About Me</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
            Passionate Developer.<br />Problem Solver.
          </h2>
          <p className="text-[#b0b8c8] mb-4">
            I'm Ricardo De Quiroz Jr., a 25-year-old BS Information Technology graduate with hands-on
            experience building full-stack web applications. I thrive at the intersection of clean UI
            design and solid backend engineering.
          </p>
          <p className="text-[#b0b8c8] mb-4">
            My professional experience at MicroSurce Inc gave me exposure to real-world product
            development — from database design with Prisma and PostgreSQL to crafting responsive UIs
            in React.js and validating data with Zod.
          </p>
          <p className="text-[#b0b8c8]">
            I'm constantly learning and excited to take on new challenges in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-navy border border-[rgba(201,168,76,0.18)] rounded p-6 hover:border-gold transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-playfair text-4xl text-gold font-bold">{s.num}</div>
              <div className="text-muted text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
