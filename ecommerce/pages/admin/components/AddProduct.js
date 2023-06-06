import "./styles/Products.css"

export default function AddProduct() {
    return(
        <div className="add-product-container">
            <div className="add product">
                <h2>Tambah Produk Baru</h2>
                <div className="input-nama-produk">
                    <p>Nama Produk</p>
                    <form>
                        <input type="text"/>
                    </form>
                </div>
                <div className="input-deskripsi-produk">
                    <p>Deskripsi Produk</p>
                    <form>
                        <textarea rows="4" cols="50"/>
                    </form>
                </div>
                <div className="input-kategori-produk">
                    <p>Kategori</p>
                    <form>
                        <select>
                            <option value="1">Kategori 1</option>
                            <option value="2">Kategori 2</option>
                            <option value="3">Kategori 3</option>
                            <option value="4">Kategori 4</option>
                        </select>
                    </form>
                </div>
                <div className="input-harga-produk">
                    <p>Harga</p>
                    <form>
                        <input type="number" min="0"/>
                    </form>
                </div>
                <div className="input-stok-produk">
                    <p>Stok</p>
                    <form>
                        <input type="number" min="0"/>
                    </form>
                </div>
                <div className="input-foto-produk">
                    <p>Foto Produk</p>
                    <form>
                        <input type="file"/>
                    </form>
                </div>
                <div className="button-submit">
                    <button>Tambah</button>
                </div>
            </div>
        </div>
    );
}
