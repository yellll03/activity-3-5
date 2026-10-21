function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <article
      className="product-card group"
    >
      <div className="product-image relative">
        <img
          src={product.image}
          alt={product.name}
          className=""
        />
        <span className="price-tag">
          ₱{Number(product.price).toLocaleString()}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-bold leading-none tracking-[-0.04em] text-[#171b35]">{product.name}</h3>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#989bb0]">Object</span>
        </div>
        <p className="text-sm leading-6 text-[#718078]">{product.description}</p>

        {showActions && (
          <div className="mt-5 flex gap-2 border-t border-[#ebe6dc] pt-4">
            <button
              onClick={() => onEdit(product)}
              className="secondary-action flex-1 py-2 text-sm font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="danger-action flex-1 py-2 text-sm font-bold"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
