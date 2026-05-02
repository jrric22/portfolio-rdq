'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 90 },
      { name: 'TypeScript', pct: 80 },
      { name: 'Tailwind CSS', pct: 88 },
      { name: 'Next.js', pct: 72 },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'PostgreSQL', pct: 78 },
      { name: 'Prisma ORM', pct: 75 },
      { name: 'Zod (Validation)', pct: 80 },
      { name: 'REST APIs', pct: 78 },
    ],
  },
  {
    title: 'Tools & More',
    skills: [
      { name: 'Git / GitHub', pct: 85 },
      { name: 'React Router', pct: 82 },
      { name: 'Vite', pct: 76 },
      { name: 'Agile / Teamwork', pct: 88 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-navy-mid px-8 md:px-20 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gold" />
        <span className="text-gold text-xs font-semibold tracking-[2px] uppercase">Technical Skills</span>
      </div>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-12">My Tech Stack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="bg-navy border border-[rgba(201,168,76,0.18)] rounded-lg p-7 hover:border-[rgba(201,168,76,0.4)] transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.12 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gold text-[10px] font-bold tracking-[2px] uppercase">{group.title}</span>
              <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
            </div>

            <div className="flex flex-col gap-4">
              {group.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5 text-sm">
                    <span className="text-cream">{skill.name}</span>
                    <span className="text-muted text-xs">{skill.pct}%</span>
                  </div>
                  <div className="h-[3px] bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: si * 0.1 + gi * 0.05, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
