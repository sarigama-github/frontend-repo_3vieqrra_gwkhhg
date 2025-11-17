import { motion } from 'framer-motion'
import { Cpu, Phone, MessageSquare, Shield, Zap, Bot } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'AI Roast Calling',
    desc: 'Place automated roast calls that break the ice and qualify prospects instantly.',
  },
  {
    icon: Bot,
    title: 'Conversational Intelligence',
    desc: 'Natural dialog that keeps it playful while collecting the info that matters.',
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    desc: 'Smart scoring and notes you can act on right away.',
  },
  {
    icon: Shield,
    title: 'Compliance & Safety',
    desc: 'Controls to keep things brand-safe and aligned with your tone.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(500px_circle_at_80%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-center"
        >
          Built for playful, productive outreach
        </motion.h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-fuchsia-500/40 to-blue-500/40 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
