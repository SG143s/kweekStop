import "./styles/Products.css";

export default function HeaderProduct() {
    return(
        <div className="header-product">
            <div>
                <h2>Produk</h2>
            </div>
            <div className="btn-navigation produk-page">
                <button>Produk Saya</button>
                <button>Tambah Produk</button>
                <button>Kategori Produk</button>
                <button>Diskon Produk</button>
            </div>
        </div>
    );
}