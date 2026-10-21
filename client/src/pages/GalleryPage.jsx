import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section
        className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-br from-petal
          via-lilac to-sky p-10 text-ink shadow-xl shadow-rose/10 md:p-14"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/50"></div>
        <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-rose-deep">
          The dreamiest collection ever
        </p>
        <h2 className="relative mt-3 font-display text-4xl font-medium md:text-6xl">
          Life is better in <span className="font-script text-rose">pink &amp; sparkle.</span>
        </h2>
        <p className="relative mt-3 max-w-lg text-muted">
          Glam up with the Snow Ballet line by Flower Knows: pearly palettes, cotton-candy blush,
          and a glow so dreamy you'll want to twirl.
        </p>
        <p className="relative mt-3 text-sm font-semibold text-rose-deep">
          {products.length} fabulous finds · by Leah Jane L. Gregorio
        </p>
      </section>

      {loading ? (
        <p className="py-20 text-center text-muted">Loading products...</p>
      ) : (
        <>
          <h2 className="mb-5 font-display text-3xl font-medium italic text-ink">Pretty in pink picks</h2>
          <ProductGrid products={products} />
        </>
      )}
    </main>
  );
}

export default GalleryPage;
