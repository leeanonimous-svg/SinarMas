export function Sustainability() {
  const initiatives = [
    {
      title: "Responsible Sourcing & Traceability",
      items: [
        "98% traceability to plantation (TTP) by end-2022",
        "NDPE policies across the palm supply chain",
        "Comprehensive mapping of critical palm suppliers in Indonesia",
        "NDPE and traceability data externally assured by third party",
        "Strengthened readiness for EU Anti-Deforestation Regulation (EUDR)"
      ]
    },
    {
      title: "Climate Action & Emissions",
      items: [
        "Signatory to Agriculture Sector Roadmap to 1.5°C (COP27)",
        "Target for all palm oil volumes to reach 'Delivering' status by 2025",
        "Over 90% 'Delivering' status for CPO and PKO achieved",
        "Implementing TCFD recommendations",
        "First-time disclosure of scope 3 and LULUCF emissions",
        "Ongoing strategies to reduce greenhouse gas emissions"
      ]
    },
    {
      title: "Transparency & Reporting",
      items: [
        "Annual sustainability reporting with externally assured indicators",
        "Enhanced transparency on traceability and climate performance",
        "Regular disclosure of sustainability metrics"
      ]
    },
    {
      title: "Community & Livelihoods",
      items: [
        "76 community economic empowerment projects across Indonesia",
        "Support for rural livelihoods through training and income diversification",
        "37 MSMEs established through community programmes",
        "MSME development for sustainable local economies"
      ]
    },
    {
      title: "Environmental Protection & Fire Prevention",
      items: [
        "Fire prevention programme covering over 100 villages (DMPA)",
        "GeoSMART app deployment detecting fire hotspots 3x faster",
        "Strengthened preparedness for El Niño-related fire and haze risks"
      ]
    },
    {
      title: "NDPE Implementation",
      items: [
        "No Deforestation, No Peat, No Exploitation policies",
        "Comprehensive supply chain monitoring",
        "Protection of high conservation value forests",
        "Commitment to sustainable palm oil production"
      ]
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32" id="sustainability">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Content */}
          <article>
            <div className="inline-block px-4 py-2 bg-[#C4D82E]/10 text-[#8BA91F] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Sustainability
            </div>
            <h2 
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] uppercase tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Environmental
              <br />
              Commitment
            </h2>
            
            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Sustainability is at the core of everything we do. We recognize that our long-term success depends on our ability to operate responsibly and minimize our environmental footprint while maximizing positive social impact.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Our sustainability framework encompasses environmental stewardship, social responsibility, and economic viability. We continuously invest in research and innovation to improve our practices and contribute to global sustainability goals.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Through collaboration with international organizations, government agencies, and local communities, we work towards creating shared value and lasting positive change in the regions where we operate.
            </p>
          </article>

          {/* Image */}
          <div className="relative h-[500px]">
            <img
              src="https://i.ytimg.com/vi/OzCPur4tBVQ/maxresdefault.jpg"
              alt="Sustainable agriculture practices"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-8">
              <p className="text-sm mb-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>RSPO</p>
              <p className="text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Certified</p>
            </div>
          </div>
        </div>

        {/* Initiatives */}
        <div>
          <h3 
            className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] uppercase tracking-tight mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sustainability Initiatives
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <article
                key={index}
                className="border-t-4 border-[#C4D82E] pt-6"
              >
                <h4 
                  className="text-xl md:text-2xl uppercase tracking-tight mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {initiative.title}
                </h4>
                
                <ul className="space-y-3">
                  {initiative.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-[#C4D82E] mt-1.5 flex-shrink-0 text-lg">•</span>
                      <span className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
