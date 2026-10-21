import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
      <section
        className="hero-panel mb-14 px-7 py-10 md:px-14 md:py-14"
      >
        <div className="relative z-10 max-w-2xl">
        <p className="eyebrow">
          The dreamiest collection ever
        </p>
        <h2 className="mt-4 max-w-xl font-display text-5xl leading-[1.05] font-medium tracking-[-0.01em] text-[#3b3552] md:text-7xl">
          Life is better<br /> in <span className="font-script text-6xl font-normal text-[#d9849b] md:text-8xl">pink &amp; sparkle.</span>
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f6882] md:text-base">
          Glam up with the Snow Ballet line by Flower Knows: pearly palettes, cotton-candy blush, and a glow so dreamy you'll want to twirl.
        </p>
        <div className="mt-9 flex items-center gap-4">
          <span className="hero-rule w-12"></span>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c46a86]">
            {products.length} {products.length === 1 ? "fabulous find" : "fabulous finds"} · by Leah Jane L. Gregorio
          </p>
        </div>
        </div>
      </section>

      {loading ? (
        <p className="py-20 text-center text-sm font-semibold text-[#8a8399]">Loading products...</p>
      ) : (
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Shop your dream vanity</p>
              <h2 className="section-heading">Pretty in pink picks</h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-5 text-[#8a8399] sm:block">
              Every piece is ready for its close-up, darling.
            </p>
          </div>
          <ProductGrid products={products} />
        </section>
      )}
    </main>
  );
}

export default GalleryPage;
