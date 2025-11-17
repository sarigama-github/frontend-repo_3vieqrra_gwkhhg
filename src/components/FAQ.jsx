import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is AI Roast Call?',
    a: 'An AI-powered calling assistant that places playful roast calls to prospects while gathering key qualification data.',
  },
  {
    q: 'Is it compliant and safe?',
    a: 'You control tone and guardrails. The system is designed to be brand-safe and configurable to your needs.',
  },
  {
    q: 'Can I integrate it with my CRM?',
    a: 'Yes, export results and notes to your workflow. Integrations are available on paid plans.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5">
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-white">{q}</span>
          <span className="text-white/60">{open ? '−' : '+'}</span>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden text-sm text-white/70 pt-3"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(500px_circle_at_80%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
