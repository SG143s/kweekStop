import "./styles/Order.css";
import "./styles/Products.css";

export default function RecentOrder(){
    return(
        <div className="recent-order">
            <div className="tabel recent-order">           
                <h3>Recent Order</h3>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Harga Produk</th>
                        <th>Total Produk</th>
                        <th>Total Harga</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>12/12/2020</td>
                        <td>Rp. 100.000</td>
                        <td>Menunggu Pembayaran</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}