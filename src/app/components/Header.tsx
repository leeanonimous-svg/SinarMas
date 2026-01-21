export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#hero"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://mma.prnasia.com/media2/1685848/Sinarmas_Agribusiness_Logo.jpg?p=medium600" 
                alt="Sinar Mas Agribusiness and Food"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a 
                href="#about" 
                className="text-sm uppercase tracking-wide hover:text-[#8BA91F] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#business" 
                className="text-sm uppercase tracking-wide hover:text-[#8BA91F] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Business
              </a>
            </li>
            <li>
              <a 
                href="#products" 
                className="text-sm uppercase tracking-wide hover:text-[#8BA91F] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#impact" 
                className="text-sm uppercase tracking-wide hover:text-[#8BA91F] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Impact
              </a>
            </li>
            <li>
              <a 
                href="#sustainability" 
                className="text-sm uppercase tracking-wide hover:text-[#8BA91F] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Sustainability
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="bg-[#C4D82E] text-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-[#8BA91F] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}