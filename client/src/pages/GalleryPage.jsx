import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
      <section
        className="relative mb-10 overflow-hidden rounded-[2rem] bg-[#dce8df] px-7 py-10
          shadow-sm md:px-14 md:py-14"
      >
        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[28px] border-[#f7f4ee]/60"></div>
        <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#2f5d50]">
          The latest edit
        </p>
        <h2 className="relative mt-3 max-w-xl font-display text-4xl leading-tight font-bold text-[#26312d] md:text-6xl">
          Useful things, thoughtfully chosen.
        </h2>
        <p className="relative mt-4 max-w-lg text-base leading-7 text-[#5f7067]">
          A calm collection of everyday pieces for work, home, and the moments in between.
        </p>
        <p className="relative mt-7 text-sm font-semibold text-[#2f5d50]">
          {products.length} {products.length === 1 ? "item" : "items"} in the collection
        </p>
      </section>

      {loading ? (
        <p className="py-20 text-center text-slate-400">Loading products...</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
}

export default GalleryPage;
