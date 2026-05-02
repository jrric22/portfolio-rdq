"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "MicroSurce Inc.",
    date: "Nov 2024 – Mar 2025",
    description:
      "Collaborated with a local development team to build and enhance a comprehensive construction management system. Contributed to UI development, backend integration, database management, and data validation across modules including Dashboard, Daily Expenses, Timekeeping, Suppliers, and Reporting.",
    tags: [
      "React.js",
      "React Router",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zod",
    ],
  },
  // {
  //   role: 'BS Information Technology Graduate',
  //   company: 'University · Philippines',
  //   date: 'Graduated 2024',
  //   description:
  //     'Completed a rigorous 4-year degree program covering software engineering, database management, networking, systems analysis, and web development fundamentals.',
  //   tags: ['Software Engineering', 'Database Management', 'Web Development', 'Systems Analysis'],
  // },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-navy px-8 md:px-20 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gold" />
        <span className="text-gold text-xs font-semibold tracking-[2px] uppercase">
          Experience
        </span>
      </div>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-12">
        Work History
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            className="bg-navy-card border border-[rgba(201,168,76,0.18)] rounded-lg p-10 relative overflow-hidden hover:border-[rgba(201,168,76,0.4)] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Gold left bar */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gold" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-playfair text-xl text-cream">{exp.role}</h3>
                <p className="text-gold text-sm mt-1">{exp.company}</p>
              </div>
              <span className="inline-flex items-center bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] rounded-full px-4 py-1 text-xs text-muted tracking-wide whitespace-nowrap self-start">
                {exp.date}
              </span>
            </div>

            <p className="text-[#9aa5b8] mb-6">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.18)] text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
