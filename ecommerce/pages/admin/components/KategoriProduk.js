import "./styles/Kategori.css";

export default function KategoriProduk() {
    return(
        <div className="kategori-produk-container">
            <h2>Tambah Kategori</h2>
            <div className="add kategori">
                <div className="input-nama-kategori">
                    <p>Nama Kategori</p>
                    <form>
                        <input type="text"/>
                    </form>
                </div>
                <div className="input-foto-kategori">
                    <p>Foto Kategori</p>
                    <form>
                        <input type="file"/>
                    </form>
                </div>
                <div className="kategori-button-submit">
                    <button>Tambah</button>
                </div>
            </div>
            <h2 className="title-list-kategori">List Kategori</h2>
            <div className="tabel kategori">
                <table>
                    <tr>
                        <th>Nama Kategori</th>
                        <th>Foto Kategori</th>
                        <th>Jumlah Produk</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>Kategori 1</td>
                        <td>Foto 1</td>
                        <td>20</td>
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