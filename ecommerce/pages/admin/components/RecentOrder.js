import "./styles/Order.css";
import "./styles/Products.css";

export default function RecentOrder() {
  return (
    <div className="container">
      <div className="tabel recent-order">
        <h3>Recent Order</h3>
        <ul>
          <li>
            <span>No</span>
            <span>Nama Produk</span>
            <span>Harga Produk</span>
            <span>Total Produk</span>
            <span>Total Harga</span>
          </li>
          <li>
            <span>1</span>
            <span>John Doe</span>
            <span>12/12/2020</span>
            <span>Rp. 100.000</span>
            <span>Menunggu Pembayaran</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
