import "./styles/Products.css";

export default function ProdukSaya(params) {
    return(
        <div>
            <div className="search-product">
                <div className="search-product-left">
                    <div className="nama-produk-input">
                        <p>Nama Produk</p>
                        <form>
                            <input type="text"/>
                        </form>
                    </div>
                    <div className="stok-input">
                        <p className="title-stok">Stok</p>
                        <form>
                            <input type="number" min="0"/>
                        </form>
                        <p>&nbsp;-&nbsp;</p>
                        <form>
                            <input type="number" min="1"/>
                        </form>
                    </div>
                    <div className="total-produk">
                        <p>Total: 27 Produk</p>
                    </div>
                </div>
                <div className="search-product-center">
                    <div className="kategori-input">
                        <p>Kategori</p>
                        <form>
                            <input type="text"/>
                        </form>
                    </div>
                    <div className="penjualan-input">
                        <p className="penjualan-title">Penjualan</p>
                        <form>
                            <input type="number" min="0"/>
                        </form>
                        <p>&nbsp;-&nbsp;</p>
                        <form>
                            <input type="number" min="1"/>
                        </form>
                    </div>
                </div>
                <div className="search-product-right">
                    <div className="search-btn">
                        <button>Cari</button>
                        <button>Atur Ulang</button>
                    </div>
                </div>
            </div>
            <div className="tabel produk">
                <table>
                    <tr>
                        <th>Nama Produk</th>
                        <th>Deskripsi Produk</th>
                        <th>Kategori</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>Produk 1</td>
                        <td>Kategori 1</td>
                        <td>10</td>
                        <td>10</td>
                        <td>Rp 100.000</td>
                        <td>
                            <button>Edit</button>
                            <button>Hapus</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}