import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="how" className="relative bg-black py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(500px_circle_at_80%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
          <div className="relative mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-center">How it works</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Set your vibe',
                  desc: 'Choose tone, guardrails, and goals so the AI stays brand-safe and on-message.',
                },
                {
                  step: '2',
                  title: 'Upload leads',
                  desc: 'Import prospects or connect your stack to start the playful roast outreach.',
                },
                {
                  step: '3',
                  title: 'Review results',
                  desc: 'Scan notes, scores, and replies. Move qualified leads straight into your pipeline.',
                },
              ].map((c) => (
                <div key={c.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 flex items-center justify-center font-semibold">
                    {c.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
