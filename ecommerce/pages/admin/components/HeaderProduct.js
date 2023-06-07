import "./styles/Products.css";

export default function HeaderProduct({ setActiveComponent }) {
  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="header-product">
      <div>
        <h2>Produk</h2>
      </div>
      <div className="btn-navigation produk-page">
        <button onClick={() => handleClick("produkSaya")}>Produk Saya</button>
        <button onClick={() => handleClick("addProduct")}>Tambah Produk</button>
        <button onClick={() => handleClick("kategoriProduk")}>Kategori Produk</button>
        <button onClick={() => handleClick("diskonProduk")}>Diskon Produk</button>
      </div>
    </div>
  );
}
