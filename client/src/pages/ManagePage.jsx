import ProductForm from "../components/ProductForm";
import ProductGrid from "../components/ProductGrid";

function ManagePage({ products, editingProduct, onSave, onCancel, onEdit, onDelete }) {
  return (
    <main className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-[350px_1fr]">
      <ProductForm
        key={editingProduct ? editingProduct._id : "new"}
        editingProduct={editingProduct}
        onSubmit={onSave}
        onCancel={onCancel}
      />

      <section>
        <p className="eyebrow mb-2">
          Vanity desk
        </p>
        <h2 className="section-heading mb-2">
          Manage products <span className="text-[#b2abc0]">({products.length})</span>
        </h2>
        <p className="mb-6 text-sm text-[#8a8399]">Add, edit, and remove products from the collection.</p>
        <ProductGrid products={products} showActions onEdit={onEdit} onDelete={onDelete} />
      </section>
    </main>
  );
}

export default ManagePage;
