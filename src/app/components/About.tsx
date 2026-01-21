export function About() {
  const timeline = [
    { year: "1938", event: "Founded as part of the Sinar Mas Group" },
    { year: "1996", event: "Golden Agri-Resources Ltd. listed on the Singapore Exchange" },
    { year: "2011", event: "Implemented comprehensive NDPE policy framework" },
    { year: "2015", event: "Achieved RSPO certification for sustainable palm oil" },
    { year: "2020", event: "Reached 98% traceability to plantation" },
    { year: "2023", event: "Leading sustainable palm oil production globally" }
  ];

  return (
    <section className="bg-white py-24 md:py-32" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <header className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#C4D82E]/10 text-[#8BA91F] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            About Us
          </div>
          <h2 
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] uppercase tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Heritage of
            <br />
            Excellence
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <article>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Sinar Mas Agribusiness and Food is one of the world's leading agribusiness groups, operating across the entire palm oil value chain since 1938.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              As part of the Sinar Mas Group through Golden Agri-Resources Ltd., which is listed on the Singapore Exchange, we are committed to sustainable palm oil production that benefits communities, protects the environment, and delivers quality products globally.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              With decades of experience, we have grown into a fully integrated operation encompassing plantations, mills, refineries, and consumer brands, serving markets across Asia, Europe, and beyond.
            </p>

            {/* Image */}
            <div className="relative h-[400px] w-full">
              <img
                src="https://images.ft.com/v3/image/raw/https%3A%2F%2Fcms-image-bucket-productionv3-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%2Fimages%2F0%2F1%2F4%2F4%2F19084410-3-eng-GB%2FCropped-1548536786RTS2ATG2.jpg?width=780&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms&format=auto"
                alt="Modern agricultural practices at Sinar Mas"
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          {/* Timeline */}
          <div>
            <h3 
              className="text-2xl md:text-3xl uppercase tracking-tight mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Journey
            </h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <article 
                  key={index}
                  className="flex gap-6 border-l-2 border-gray-200 pl-6 hover:border-[#C4D82E] transition-colors"
                >
                  <div className="flex-shrink-0">
                    <span 
                      className="text-3xl md:text-4xl text-[#C4D82E]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-2">
                    <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.event}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
