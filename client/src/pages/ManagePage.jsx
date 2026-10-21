import ProductForm from "../components/ProductForm";
import ProductGrid from "../components/ProductGrid";

function ManagePage({ products, editingProduct, onSave, onCancel, onEdit, onDelete }) {
  return (
    <main className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-[350px_1fr]">
      <ProductForm
        key={editingProduct ? editingProduct._id : "new"}
        editingProduct={editingProduct}
        onSubmit={onSave}
        onCancel={onCancel}
      />

      <section>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c66b4b]">
          Your catalogue
        </p>
        <h2 className="mb-6 font-display text-3xl font-bold text-[#26312d]">
          Manage products <span className="text-[#89938d]">({products.length})</span>
        </h2>
        <ProductGrid products={products} showActions onEdit={onEdit} onDelete={onDelete} />
      </section>
    </main>
  );
}

export default ManagePage;
