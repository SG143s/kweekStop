import { useState } from "react";
import HeaderOrder from "../components/HeaderOrder.js";
import Navbar from "../components/Navbar.js";
import PengirimanSaya from "../components/PengirimanSaya.js";
import RecentOrder from "../components/RecentOrder.js";

export default function OrderPage(params) {
  const [activeComponent, setActiveComponent] = useState("recentOrder");

  const renderComponent = () => {
    switch (activeComponent) {
      case "recentOrder":
        return <RecentOrder />;
      case "pengirimanSaya":
        return <PengirimanSaya />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <HeaderOrder setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
}
