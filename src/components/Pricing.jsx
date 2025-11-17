import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['100 AI roast minutes', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    features: ['500 AI roast minutes', 'Advanced analytics', 'Priority support'],
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    features: ['2000 AI roast minutes', 'Team features', 'Dedicated success'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(500px_circle_at_80%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-center"
        >
          Simple pricing
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="text-white/60 mb-2">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-block w-full text-center rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30">Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
