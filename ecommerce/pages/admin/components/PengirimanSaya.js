import "./styles/Order.css";

export default function PengirimanSaya(params) {
  return (
    <div className="containter">
      <div className="tabel pengiriman-saya">
        <ul>
          <li>
            <span>No.Pesanan</span>
            <span>Nama Pemesan</span>
            <span>Nama Produk</span>
            <span>Quantity</span>
            <span>Harga Total</span>
            <span>Status</span>
            <span>Aksi</span>
            <span>Jasa Kirim</span>
          </li>
          <li>
            <span>Order-ID</span>
            <span>John Doe</span>
            <span>Sikat gigi</span>
            <span>100</span>
            <span>Rp 1000.000</span>
            <span>Menunggu Pembayaran</span>
            <span>
              <button>Atur Pengiriman</button>
            </span>
            <span>JNE</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
