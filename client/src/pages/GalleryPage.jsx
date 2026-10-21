import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
      <section
        className="hero-panel mb-14 px-7 py-10 md:px-14 md:py-14"
      >
        <div className="relative z-10 max-w-2xl">
        <p className="eyebrow">
          The latest edit · 01
        </p>
        <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.9] font-bold tracking-[-0.07em] text-[#171b35] md:text-7xl">
          Useful things,<br /> thoughtfully chosen.
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#5f6680] md:text-base">
          A considered collection of everyday pieces for work, home, and the moments in between.
        </p>
        <div className="mt-9 flex items-center gap-4">
          <span className="hero-rule w-12"></span>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3155d9]">
            {products.length} {products.length === 1 ? "item" : "items"} in the collection
          </p>
        </div>
        </div>
      </section>

      {loading ? (
        <p className="py-20 text-center text-sm font-semibold text-[#71758a]">Loading products...</p>
      ) : (
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Browse the collection</p>
              <h2 className="section-heading">Selected objects</h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-5 text-[#71758a] sm:block">
              Small details, practical forms, and pieces made to stay in your orbit.
            </p>
          </div>
          <ProductGrid products={products} />
        </section>
      )}
    </main>
  );
}

export default GalleryPage;
