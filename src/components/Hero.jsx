import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.2),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-wider uppercase">AI Phone Roast Assistant</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              AI-powered roast calls that turn cold leads into warm conversations.
            </h1>
            <p className="mt-5 text-white/80 md:text-lg">
              Automate your outbound with an AI that roasts, jokes, and qualifies leads in seconds — all while staying on brand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="pointer-events-auto rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30">Get Started</a>
              <a href="#features" className="pointer-events-auto rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10">See Features</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
