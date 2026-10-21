function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <article
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-line
        transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/20"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-lilac">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-rose-deep shadow">
          ₱{Number(product.price).toLocaleString()}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-medium text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.description}</p>

        {showActions && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="flex-1 rounded-full bg-lilac py-2 text-sm font-medium text-ink hover:bg-line"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 rounded-full bg-rose py-2 text-sm font-medium text-white hover:bg-rose-deep"
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
