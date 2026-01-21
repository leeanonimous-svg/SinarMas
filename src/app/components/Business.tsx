export function Business() {
  const areas = [
    {
      title: "Upstream Operations",
      description: "Sustainable palm cultivation across thousands of hectares with a focus on environmental stewardship and community development.",
      features: [
        "Extensive plantation management",
        "Advanced agricultural practices",
        "Smallholder partnership programs",
        "Biodiversity conservation"
      ]
    },
    {
      title: "Midstream Processing",
      description: "State-of-the-art palm oil mills and refining facilities ensuring quality and efficiency throughout the production process.",
      features: [
        "Modern milling operations",
        "Advanced refining technology",
        "Quality control systems",
        "Efficient supply chain"
      ]
    },
    {
      title: "Downstream Manufacturing",
      description: "Production of consumer-ready products including cooking oil, margarine, shortening, and specialty fats for various industries.",
      features: [
        "Branded consumer products",
        "Industrial food ingredients",
        "Custom formulations",
        "Global distribution network"
      ]
    }
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32" id="business">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <header className="mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-[#C4D82E]/20 text-[#C4D82E] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            What We Do
          </div>
          <h2 
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Integrated Value Chain
          </h2>
        </header>

        {/* Business Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <article 
              key={index}
              className="border border-gray-700 p-8 hover:border-[#C4D82E] transition-colors"
            >
              <h3 
                className="text-2xl md:text-3xl uppercase tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {area.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                {area.description}
              </p>

              <ul className="space-y-3">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-[#C4D82E] mt-1 flex-shrink-0">•</span>
                    <span className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
