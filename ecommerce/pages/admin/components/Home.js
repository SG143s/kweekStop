import { BsPass } from "react-icons/bs";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <button className="orders" onClick={() => window.location.href = "admin/order"}>
        <BsPass className="orders-icon" />
        <span>Orders</span>
      </button>
      <button className="products" onClick={() => window.location.href = "admin/produk"}>
        <HiOutlineBookmarkAlt className="products-icon" />
        <span>Products</span>
      </button>
      <button className="reports">
        <FaChartLine className="reports-icon" />
        <span>Reports</span>
      </button>
    </div>
  );
}
