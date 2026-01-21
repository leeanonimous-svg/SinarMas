export function Impact() {
  const stats = [
    { number: "500,000+", label: "Hectares under management" },
    { number: "98%", label: "Traceability to plantation" },
    { number: "76", label: "Community empowerment projects" },
    { number: "50+", label: "Countries served worldwide" },
    { number: "RSPO", label: "Certified operations" },
    { number: "1938", label: "Years of heritage" }
  ];

  return (
    <section className="bg-[#C4D82E] text-black py-24 md:py-32" id="impact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <header className="mb-16 text-center">
          <h2 
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] uppercase tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Impact
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Driving sustainable growth and positive change across communities and the environment
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <article 
              key={index}
              className="text-center"
            >
              <div 
                className="text-[clamp(2rem,4vw,3.5rem)] leading-none mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <p className="text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
