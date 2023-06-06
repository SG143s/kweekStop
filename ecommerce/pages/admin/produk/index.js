import NavbarLeft from "../components/NavbarLeft";
import Navbar from "../components/Navbar";
import HeaderProduct from "../components/HeaderProduct.js";
import ProdukSaya from "../components/ProdukSaya";
import AddProduct from "../components/AddProduct";
import KategoriProduk from "../components/KategoriProduk";
import DiskonProduk from "../components/DiskonProduk";

export default function ProductPage(params) {
    return(
        <div>
            <Navbar className="navbar"/>
            <HeaderProduct/>
            <ProdukSaya/>
            <AddProduct/> 
            <KategoriProduk/>
            <DiskonProduk/>
        </div>
    );
}