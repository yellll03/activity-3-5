import { useState } from "react";
import ImageUpload from "./ImageUpload";

const emptyForm = { name: "", price: "", description: "", image: "" };
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
      className="form-panel space-y-4 p-6 lg:sticky lg:top-24"
    >
      <p className="eyebrow">
        {editingProduct ? "Glam it up" : "Add some sparkle"}
      </p>
      <h2 className="font-display text-3xl font-medium italic text-[#3b3552]">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <ImageUpload
        image={form.image}
        onChange={(image) => setForm((prev) => ({ ...prev, image }))}
        onError={setError}
      />

      <input name="name" placeholder="Product name" required       className="field"
        value={form.name} onChange={handleChange} />
      <input name="price" type="number" min="0" placeholder="Price (₱)"
        required className="field" value={form.price} onChange={handleChange} />
      <textarea name="description" rows="3" placeholder="Short description"
        required className="field" value={form.description}
        onChange={handleChange} />

      {error && (
        <p className="border border-[#edc9bc] bg-[#fff0eb] p-3 text-sm text-[#a94e35]">{error}</p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="primary-action flex-1 py-3 font-bold disabled:opacity-50"
        >
          {saving ? "Saving..." : editingProduct ? "Update" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="secondary-action flex-1 py-3 font-bold"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
