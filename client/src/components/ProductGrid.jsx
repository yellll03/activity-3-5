import ProductCard from "./ProductCard";

function ProductGrid({ products, showActions = false, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="empty-state py-20 text-center text-[#89938d]">
        <p className="font-display text-2xl font-semibold text-[#38564b]">Nothing here yet</p>
        <p className="mt-2 text-sm">Add your first product to start the collection.</p>
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
