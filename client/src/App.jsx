import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import ManagePage from "./pages/ManagePage";
import { getProducts, createProduct, updateProduct, deleteProduct } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("gallery");
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load products. Refresh in 1 minute.");
        setLoading(false);
      });
  }, []);

  const saveProduct = async (data) => {
    if (editingProduct) {
      const updated = await updateProduct(editingProduct._id, data);
      setProducts((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );
      setEditingProduct(null);
    } else {
      const created = await createProduct(data);
      setProducts((prev) => [created, ...prev]);
    }
  };

  const removeProduct = async (id) => {
    if (!confirm("Delete this product?")) return;
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      if (editingProduct && editingProduct._id === id) {
        setEditingProduct(null);
      }
    } catch {
      setError("Could not delete the product.");
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar view={view} onChangeView={setView} />

      {error && (
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <p className="border border-[#edc9bc] bg-[#fff0eb] p-4 text-[#a94e35]">{error}</p>
        </div>
      )}

      {view === "gallery" ? (
        <GalleryPage products={products} loading={loading} />
      ) : (
        <ManagePage
          products={products}
          editingProduct={editingProduct}
          onSave={saveProduct}
          onCancel={() => setEditingProduct(null)}
          onEdit={startEdit}
          onDelete={removeProduct}
        />
      )}

      <footer className="mt-8 border-t border-[#ece3f1] py-10 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#8a8399]">
        Made by Leah Jane L. Gregorio · INF 239
      </footer>
    </div>
  );
}

export default App;
