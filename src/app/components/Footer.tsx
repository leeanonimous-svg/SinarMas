export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sinar Mas
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Agribusiness and Food
              <br />
              Leading global agribusiness since 1938
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-sm uppercase tracking-widest mb-4 text-[#C4D82E]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#business" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  Business Areas
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  Products
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-sm uppercase tracking-widest mb-4 text-[#C4D82E]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact
            </h4>
            <address className="not-italic text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Golden Agri-Resources Ltd.
              <br />
              Singapore Exchange
              <br />
              <a href="mailto:info@sinarmas.com" className="hover:text-white transition-colors">
                info@sinarmas.com
              </a>
            </address>
          </div>

          {/* Certifications */}
          <div>
            <h4 
              className="text-sm uppercase tracking-widest mb-4 text-[#C4D82E]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Certifications
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                RSPO Certified
              </li>
              <li className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                NDPE Compliant
              </li>
              <li className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                ISO Standards
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
            © 2025 Sinar Mas Agribusiness and Food. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-xs text-gray-500 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs text-gray-500 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
