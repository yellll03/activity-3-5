import { useState } from "react";
import ImageUpload from "./ImageUpload";

const emptyForm = { name: "", price: "", description: "", image: "" };
const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 outline-none " +
  "transition focus:border-rose focus:ring-4 focus:ring-petal";

function ProductForm({ editingProduct, onSubmit, onCancel }) {
  const [form, setForm] = useState(editingProduct || emptyForm);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const { name, price, description, image } = form;
    if (!name.trim() || price === "" || !image) {
      return setError("Name, price, and image are required.");
    }
    setSaving(true);
    try {
      await onSubmit({
        name: name.trim(), price: Number(price), description, image,
      });
      setForm(emptyForm);
      setError("");
      formElement.reset();
    } catch {
      setError("Could not save the product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1
        ring-line lg:sticky lg:top-24"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
        {editingProduct ? "Glam it up" : "Add some sparkle"}
      </p>
      <h2 className="font-display text-2xl font-medium italic text-ink">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <ImageUpload
        image={form.image}
        onChange={(image) => setForm((prev) => ({ ...prev, image }))}
        onError={setError}
      />

      <input name="name" placeholder="Product name" className={inputClass}
        value={form.name} onChange={handleChange} />
      <input name="price" type="number" min="0" placeholder="Price (₱)"
        className={inputClass} value={form.price} onChange={handleChange} />
      <textarea name="description" rows="3" placeholder="Short description"
        className={inputClass} value={form.description}
        onChange={handleChange} />

      {error && (
        <p className="rounded-2xl bg-petal p-3 text-sm text-rose-deep">{error}</p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 rounded-full bg-linear-to-r from-rose to-orchid py-3 font-semibold
            text-white transition hover:brightness-95 disabled:opacity-50"
        >
          {saving ? "Saving..." : editingProduct ? "Update" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-full bg-lilac py-3 font-semibold
              text-ink transition hover:bg-line"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
