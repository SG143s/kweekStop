import "./styles/Products.css";

export default function HeaderProduct({ setActiveComponent }) {
  return (
    <div className="header-product">
      <div>
        <h2>Produk</h2>
      </div>
      <div className="btn-navigation produk-page">
        <button onClick={() => setActiveComponent("produkSaya")}>Produk Saya</button>
        <button onClick={() => setActiveComponent("addProduct")}>Tambah Produk</button>
        <button onClick={() => setActiveComponent("kategoriProduk")}>Kategori Produk</button>
        <button onClick={() => setActiveComponent("diskonProduk")}>Diskon Produk</button>
      </div>
    </div>
  );
}
