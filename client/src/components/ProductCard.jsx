function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-[#e6e0d5] bg-[#fffdfa]
        shadow-[0_4px_16px_rgba(51,62,57,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(51,62,57,0.1)]"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-lg bg-[#fffdfa] px-3 py-1.5 text-sm font-bold text-[#c66b4b] shadow-sm">
          ₱{Number(product.price).toLocaleString()}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-[#26312d]">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[#718078]">{product.description}</p>

        {showActions && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="flex-1 rounded-lg border border-[#d9e1da] bg-[#edf3ee] py-2 text-sm font-semibold text-[#2f5d50] hover:bg-[#dce8df]"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 rounded-lg bg-[#c66b4b] py-2 text-sm font-semibold text-white hover:bg-[#b65d40]"
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
