import './styles/Order.css'

export default function HeaderOrder({ setActiveComponent }) {
    return (
      <div className='header-container'>
        <div>
          <h2>Order</h2>
        </div>
        <div className="btn-navigation order-page">
          <button onClick={() => setActiveComponent("recentOrder")}>Recent Order</button>
          <button onClick={() => setActiveComponent("pengirimanSaya")}>Pengiriman Saya</button>
        </div>
      </div>
    );
  }
  