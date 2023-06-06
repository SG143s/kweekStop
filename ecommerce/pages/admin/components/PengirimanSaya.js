import "./styles/Order.css"

export default function PengirimanSaya(params) {
    return(
        <div className="containter">
            <div className="tabel pengiriman-saya">
                <table>
                    <tr>
                        <th>No.Pesanan</th>
                        <th>Nama Pemesan</th>
                        <th>Nama Produk</th>
                        <th>Quantity</th>
                        <th>Harga Total</th>
                        <th>Status</th>
                        <th>Aksi</th>
                        <th>Jasa Kirim</th>
                    </tr>
                    <tr>
                        <td>Order-ID</td>
                        <td>John Doe</td>
                        <td>Sikat gigi</td>
                        <td>100</td>
                        <td>Rp 1000.000</td>
                        <td>Menunggu Pembayaran</td>
                        <td>
                            <button>Atur Pengiriman</button>
                        </td>
                        <td>JNE</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}