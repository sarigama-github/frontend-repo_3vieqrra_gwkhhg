import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sent!')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact</h1>
        <p className="mt-4 text-white/70">Reach out via the email listed on the original site. This form is a placeholder.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input type="text" placeholder="Name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" />
          <input type="email" placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" />
          <textarea placeholder="Message" rows="5" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" />
          <button className="rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30">Send</button>
          {status && <p className="text-sm text-white/60">{status}</p>}
        </form>
      </div>
    </div>
  )
}
