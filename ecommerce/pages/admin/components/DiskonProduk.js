import "./styles/DiskonProduk.css";

export default function DiskonProduk(params) {
    return(
        <div className="container">
            <h2>Tambah Diskon</h2>
            <div className="add discount">
                <div className="input-kode-diskon">
                    <p>Kode Diskon</p>
                    <form>
                        <input type="text"/>
                    </form>
                </div>
                <div className="input-nilai-diskon">
                    <p>Diskon (persentase)</p>
                    <form>
                        <input type="number"/>
                    </form>
                </div>
                <div className="input-min-pembelian">
                    <p>Min. Pembelian</p>
                    <form>
                        <input type="number" min="0"/>
                    </form>
                </div>
                <div className="input-max-diskon">
                    <p>Maksimal Diskon</p>
                    <form>
                        <input type="number" min="0"/>
                    </form>
                </div>
                <div className="button-submit diskon">
                    <button>Tambah</button>
                </div>
            </div>
            <div className="tabel diskon">
                <table>
                    <tr>
                        <th>Kode Diskon</th>
                        <th>Diskon</th>
                        <th>Min. Pembelian</th>
                        <th>Maksimal Diskon</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>DISKON20</td>
                        <td>20%</td>
                        <td>Rp 100.000</td>
                        <td>Rp 50.000</td>
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