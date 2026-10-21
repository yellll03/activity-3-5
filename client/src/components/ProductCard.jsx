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
          <h3 className="font-display text-xl font-medium leading-snug text-[#3b3552]">{product.name}</h3>
          <span className="mt-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b2abc0]">Glam</span>
        </div>
        <p className="text-sm leading-6 text-[#8a8399]">{product.description}</p>

        {showActions && (
          <div className="mt-5 flex gap-2 border-t border-[#f3ecf5] pt-4">
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
