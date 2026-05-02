'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const contactItems = [
  { icon: '📍', label: 'Location', value: 'Imus, Cavite, Philippines' },
  { icon: '🎓', label: 'Education', value: 'BS Information Technology' },
  { icon: '💼', label: 'Experience', value: 'Junior Software Engineer · MicroSurce Inc.' },
  { icon: '🔗', label: 'Availability', value: 'Open to Full-Time Opportunities' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Integrate EmailJS or your preferred mail service
    // Example: emailjs.send('service_id', 'template_id', form, 'public_key')
    setSent(true)
  }

  return (
    <section id="contact" className="bg-navy-mid px-8 md:px-20 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gold" />
        <span className="text-gold text-xs font-semibold tracking-[2px] uppercase">Contact</span>
      </div>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">Let's Connect</h2>
      <p className="text-muted mb-12 max-w-xl">
        I'm open to junior to mid-level software engineering roles. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Contact info */}
        <div className="flex flex-col gap-4">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 bg-navy border border-[rgba(201,168,76,0.18)] rounded px-5 py-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-[10px] text-muted tracking-widest uppercase">{item.label}</div>
                <div className="text-cream text-sm mt-0.5">{item.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        {sent ? (
          <div className="bg-navy border border-[rgba(201,168,76,0.3)] rounded-lg p-10 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-playfair text-xl text-gold mb-2">Message Sent!</h3>
            <p className="text-muted text-sm">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-navy border border-[rgba(201,168,76,0.18)] rounded px-4 py-3 text-cream text-sm outline-none focus:border-gold transition-colors placeholder-muted"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-navy border border-[rgba(201,168,76,0.18)] rounded px-4 py-3 text-cream text-sm outline-none focus:border-gold transition-colors placeholder-muted"
            />
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="bg-navy border border-[rgba(201,168,76,0.18)] rounded px-4 py-3 text-cream text-sm outline-none focus:border-gold transition-colors placeholder-muted"
            />
            <textarea
              placeholder="Your message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-navy border border-[rgba(201,168,76,0.18)] rounded px-4 py-3 text-cream text-sm outline-none focus:border-gold transition-colors placeholder-muted resize-y"
            />
            <button
              type="submit"
              className="self-start bg-gold text-navy font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded hover:bg-gold-light transition-all hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
