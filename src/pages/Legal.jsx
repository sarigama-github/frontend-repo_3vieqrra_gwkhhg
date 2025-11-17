import { Link } from 'react-router-dom'

export default function LegalPage({ type = 'terms' }) {
  const titleMap = {
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    refund: 'Refund Policy',
  }

  // Note: Per request, only text content from the original site should be used.
  // Replace the placeholders below with the exact text from airoastcall.com if provided.
  const content = {
    terms: `Use the exact Terms of Service text from the original site here.`,
    privacy: `Use the exact Privacy Policy text from the original site here.`,
    refund: `Use the exact Refund Policy text from the original site here.`,
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-3xl md:text-5xl font-semibold">{titleMap[type]}</h1>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/80 whitespace-pre-wrap">
          {content[type]}
        </div>
        <div className="mt-8 text-sm text-white/60">
          <Link to="/" className="hover:text-white">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
