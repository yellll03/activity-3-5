import { useState } from "react";
import ImageUpload from "./ImageUpload";

const emptyForm = { name: "", price: "", description: "", image: "" };
const inputClass =
  "w-full rounded-xl border border-[#d9e1da] bg-[#fffdfa] px-4 py-3 text-[#26312d] " +
  "outline-none transition placeholder:text-[#a2aaa4] focus:border-[#2f5d50] focus:ring-4 focus:ring-[#dce8df]";

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
    const numericPrice = Number(price);
    if (
      !name.trim() ||
      price === "" ||
      isNaN(numericPrice) ||
      numericPrice < 0 ||
      !description.trim() ||
      !image
    ) {
      return setError("Name, price, description, and image are required.");
    }
    setSaving(true);
    try {
      await onSubmit({
        name: name.trim(), price: numericPrice, description: description.trim(), image,
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
      className="space-y-4 rounded-2xl border border-[#e6e0d5] bg-[#fffdfa] p-6
        shadow-[0_4px_16px_rgba(51,62,57,0.04)] lg:sticky lg:top-24"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c66b4b]">
        {editingProduct ? "Update listing" : "New listing"}
      </p>
      <h2 className="font-display text-2xl font-bold text-[#26312d]">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <ImageUpload
        image={form.image}
        onChange={(image) => setForm((prev) => ({ ...prev, image }))}
        onError={setError}
      />

      <input name="name" placeholder="Product name" required className={inputClass}
        value={form.name} onChange={handleChange} />
      <input name="price" type="number" min="0" placeholder="Price (₱)"
        required className={inputClass} value={form.price} onChange={handleChange} />
      <textarea name="description" rows="3" placeholder="Short description"
        required className={inputClass} value={form.description}
        onChange={handleChange} />

      {error && (
        <p className="rounded-xl bg-[#fff0eb] p-3 text-sm text-[#a94e35]">{error}</p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 rounded-xl bg-[#2f5d50] py-3 font-semibold
            text-white transition hover:bg-[#244a3f] disabled:opacity-50"
        >
          {saving ? "Saving..." : editingProduct ? "Update" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl border border-[#d9e1da] bg-[#edf3ee] py-3 font-semibold
              text-[#2f5d50] transition hover:bg-[#dce8df]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
