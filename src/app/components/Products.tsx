export function Products() {
  const products = [
    {
      title: "Cooking Oil",
      description: "High-quality refined cooking oil for households and food service industries. Our cooking oil products meet the highest standards of purity and taste, perfect for everyday cooking needs.",
      image: "https://www.smart-tbk.com/wp-content/uploads/2025/06/Filma-Cooking-Oil.jpg"
    },
    {
      title: "Margarine",
      description: "Premium margarine products for baking, cooking, and spreading. Our margarine range offers excellent taste, texture, and functionality for both consumer and industrial applications.",
      image: "https://www.smart-tbk.com/wp-content/uploads/2025/06/Filma-Margarine-Tub.jpg"
    },
    {
      title: "Shortening",
      description: "Professional-grade shortening for bakery and confectionery industries. Delivers consistent performance, excellent texture, and superior results in baked goods and pastries.",
      image: "https://www.goldenagri.com.sg/wp-content/uploads/2025/06/FILMA-Goodfry-Semi-Liquid-Frying-Oil.jpg"
    },
    {
      title: "Specialty Fats",
      description: "Customized specialty fats for various industrial applications including confectionery, bakery, and food manufacturing. Tailored solutions to meet specific product requirements.",
      image: "https://www.smart-tbk.com/wp-content/uploads/2025/06/i-soc-PCF-40.jpg"
    }
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32" id="products">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <header className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#C4D82E]/10 text-[#8BA91F] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Our Products
          </div>
          <h2 
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Quality Products
          </h2>
        </header>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <article 
              key={index}
              className="bg-white group"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl md:text-2xl uppercase tracking-tight mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
