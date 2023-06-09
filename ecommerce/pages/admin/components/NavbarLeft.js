import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { BsPass } from "react-icons/bs";
import "./styles/NavbarLeft.css";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function NavbarLeft() {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!isExpanded);
    };
    
    return (
        <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
                <button className="arrow-right" onClick={handleExpand}>
                    <MdOutlineArrowForwardIos className={`icon-navbar-left-arrow ${isExpanded ? 'expanded' : ''}`}/>
                </button>
                <div className="divider"></div>
                <button className="home-btn" onClick={() => window.location.href = "/admin"}>
                    <AiOutlineHome className={`icon-navbar-left ${isExpanded ? 'expanded' : ''}`}/>
                    <span className={isExpanded ? "icon-text show" : "icon-text"}>Home</span>
                </button>
                <button className="products-btn" onClick={() => window.location.href = "/admin/produk"}>
                    <HiOutlineBookmarkAlt className={`icon-navbar-left ${isExpanded ? 'expanded' : ''}`}/>
                    <div className={isExpanded ? "icon-text show" : "icon-text"}>
                        <span>Products</span> 
                        {/* <RiArrowDownSLine/> */}
                    </div>
                </button>
                <button className="orders-btn" onClick={()=> window.location.href = "/admin/order"}>
                    <BsPass className={`icon-navbar-left ${isExpanded ? 'expanded' : ''}`}/>
                    <span className={isExpanded ? "icon-text show" : "icon-text"}>Orders</span>
                </button>
        </div>
    );
}