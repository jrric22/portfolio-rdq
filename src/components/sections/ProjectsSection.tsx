"use client";

import { motion } from "framer-motion";

const projects = [
  {
    icon: "🏗️",
    name: "Construction Management System",
    description:
      "A comprehensive platform with modules for dashboard analytics, daily expenses tracking, employee timekeeping, supplier management, and detailed reporting — built during tenure at MicroSurce Inc.",
    stack: ["React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
  },
  // {
  //   icon: '📊',
  //   name: 'Expense & Timekeeping Module',
  //   description:
  //     'Designed and implemented the daily expenses and timekeeping sub-systems, including data validation via Zod and database schema management through Prisma ORM.',
  //   stack: ['Zod', 'Prisma', 'Tailwind CSS', 'React'],
  // },
  {
    icon: "🌐",
    name: "Responsive Web-Portfolio",
    description:
      "A responsive, animated portfolio built with Next.js, React, and Tailwind CSS. Designed with a luxury editorial aesthetic showcasing professional experience and skills.",
    stack: ["Next.js", "Vite", "Tailwind", "Framer Motion"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-navy px-8 md:px-20 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gold" />
        <span className="text-gold text-xs font-semibold tracking-[2px] uppercase">
          Projects
        </span>
      </div>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-12">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="bg-navy-card border border-[rgba(201,168,76,0.18)] rounded-lg p-8 flex flex-col gap-4 hover:-translate-y-1 hover:border-[rgba(201,168,76,0.4)] transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-11 h-11 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-xl">
              {project.icon}
            </div>
            <h3 className="font-playfair text-lg text-cream">{project.name}</h3>
            <p className="text-muted text-sm flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-semibold text-gold bg-[rgba(201,168,76,0.08)] px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
