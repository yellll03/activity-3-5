import ProductCard from "./ProductCard";

function ProductGrid({ products, showActions = false, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-line py-20 text-center text-muted">
        Your vanity is empty, darling.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          showActions={showActions}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
