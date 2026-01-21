export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-black text-white mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://www.smart-tbk.com/wp-content/uploads/2021/01/Alternative-Livelihood.jpg"
          alt="Sinar Mas Agribusiness facility"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <h1 
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-8 uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Leading Global
          <br />
          <span className="text-[#C4D82E]">Agribusiness</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-90"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Sinar Mas Agribusiness and Food — Operating across the palm oil value chain since 1938
        </p>

        <div className="flex items-center justify-center gap-4">
          <a 
            href="#about" 
            className="bg-[#C4D82E] text-black px-8 py-4 text-sm uppercase tracking-wide hover:bg-white transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Learn More
          </a>
          <a 
            href="#sustainability" 
            className="border border-white text-white px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Sustainability
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
}