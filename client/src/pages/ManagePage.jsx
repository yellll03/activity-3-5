import ProductForm from "../components/ProductForm";
import ProductGrid from "../components/ProductGrid";

function ManagePage({ products, editingProduct, onSave, onCancel, onEdit, onDelete }) {
  return (
    <main className="mx-auto grid max-w-6xl items-start gap-8 px-6 py-10 lg:grid-cols-[360px_1fr]">
      <ProductForm
        key={editingProduct?._id || "new"}
        editingProduct={editingProduct}
        onSubmit={onSave}
        onCancel={onCancel}
      />

      <section>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">Dream closet</p>
        <h2 className="mb-5 font-display text-3xl font-medium italic text-ink">
          Manage Products <span className="text-rose">({products.length})</span>
        </h2>
        <ProductGrid products={products} showActions onEdit={onEdit} onDelete={onDelete} />
      </section>
    </main>
  );
}

export default ManagePage;
