import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-fuchsia-500 to-blue-500 rounded-lg" />
              <span className="text-white font-semibold">AI Roast Call</span>
            </div>
            <p className="mt-3 text-sm text-white/60">Automated roast calls to qualify leads with personality.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="text-white font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Status</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/test" className="hover:text-white">System Test</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} AI Roast Call. All rights reserved.</div>
      </div>
    </footer>
  )
}
