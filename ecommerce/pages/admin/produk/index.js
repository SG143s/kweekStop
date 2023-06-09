import { useState } from "react";
import NavbarLeft from "../components/NavbarLeft";
import Navbar from "../components/Navbar";
import HeaderProduct from "../components/HeaderProduct.js";
import ProdukSaya from "../components/ProdukSaya";
import AddProduct from "../components/AddProduct";
import KategoriProduk from "../components/KategoriProduk";
import DiskonProduk from "../components/DiskonProduk";
import "../components/styles/index.css"

export default function ProductPage(params) {
  const [activeComponent, setActiveComponent] = useState("produkSaya");

  const renderComponent = () => {
    switch (activeComponent) {
      case "produkSaya":
        return <ProdukSaya />;
      case "addProduct":
        return <AddProduct />;
      case "kategoriProduk":
        return <KategoriProduk />;
      case "diskonProduk":
        return <DiskonProduk />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar className="navbar" />
      <div className="navbar-left-page">
        <NavbarLeft/>
        <div className = "base-page">
          <HeaderProduct setActiveComponent={setActiveComponent} />
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
