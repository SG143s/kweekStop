import HeaderOrder from "../components/HeaderOrder.js";
import Navbar from "../components/Navbar.js";
import PengirimanSaya from "../components/PengirimanSaya.js";
import RecentOrder from "../components/RecentOrder.js";

export default function OrderPage(params) {
    return(
        <div>
            <Navbar/>
            <HeaderOrder /> 
            <RecentOrder/>
            <PengirimanSaya/>
        </div>
    );
}