import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
      <section
        className="hero-panel mb-14 px-7 py-10 md:px-14 md:py-14"
      >
        <div className="relative z-10 max-w-2xl">
        <p className="eyebrow">
          Winter fairytale collection
        </p>
        <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] font-semibold italic tracking-[-0.01em] text-[#3b3552] md:text-7xl">
          Soft colors for<br /> a snowy ballet.
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f6882] md:text-base">
          Featuring the Snow Ballet makeup line by Flower Knows: pearly palettes, airy blush, and gentle glow in icy pastel shades.
        </p>
        <div className="mt-9 flex items-center gap-4">
          <span className="hero-rule w-12"></span>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c46a86]">
            {products.length} {products.length === 1 ? "item" : "items"} available · by Leah Jane L. Gregorio
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
              <p className="eyebrow mb-2">Browse the collection</p>
              <h2 className="section-heading">Snow Ballet favorites</h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-5 text-[#8a8399] sm:block">
              Delicate makeup pieces in pinks, pearls, and icy blues.
            </p>
          </div>
          <ProductGrid products={products} />
        </section>
      )}
    </main>
  );
}

export default GalleryPage;
