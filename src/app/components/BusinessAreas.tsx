const businessAreas = [
  {
    number: "01",
    title: "UPSTREAM ACTIVITIES",
    description: "Managing and cultivating oil palm plantations across hundreds of thousands of hectares in Indonesia, including partnerships with smallholder and plasma farmers. We harvest fresh fruit bunches (FFB) from oil palms using sustainable practices."
  },
  {
    number: "02",
    title: "PROCESSING & PRODUCTION",
    description: "Converting FFB into crude palm oil (CPO) and palm kernel (PK), then producing value-added products including cooking oil, margarine, shortening, biodiesel, oleochemicals, and other industrial fats."
  },
  {
    number: "03",
    title: "DISTRIBUTION & MARKETING",
    description: "Selling both consumer brands and bulk industrial palm products domestically and internationally through our extensive distribution network."
  }
];

export function BusinessAreas() {
  return (
    <section className="bg-black text-white py-32 px-12" id="business" aria-labelledby="business-heading">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#C4D82E]/10 text-[#C4D82E] rounded-full mb-6 uppercase tracking-wider text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            What We Do
          </div>
          <h2 
            id="business-heading"
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6 uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            KEY BUSINESS AREAS
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl" style={{ fontFamily: 'var(--font-body)' }}>
            Sinar Mas Agribusiness and Food operates across the full palm oil value chain, delivering integrated solutions from plantation to consumer products.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {businessAreas.map((area) => (
            <article
              key={area.number}
              className="border-l-2 border-[#C4D82E] pl-8 py-6 hover:border-l-4 transition-all"
            >
              <div className="text-[#C4D82E] text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {area.number}
              </div>
              <h3 
                className="text-3xl mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {area.title}
              </h3>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}