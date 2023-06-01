import MainNavbar from '../navbar/MainNavbar';
import ThumbnailProduct from '../landing page/ThumbnailProduct';
import React from "react";
import { useEffect, useState } from "react";
import './AllProducts.css';

const AllProducts = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [products, setProducts] = useState([]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
    
        fetchData();
    }, []);


    // const [product] = useState([
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:4.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 1 (2026)", category: "PlayStation", star:1.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 4 (2026)", category: "PlayStation", star:4.7, review:50, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 7 (2026)", category: "PlayStation", star:3.4, review:80, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 8 (2026)", category: "PlayStation", star:4.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:1.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 3 (2026)", category: "PlayStation", star:3.6, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:5.0, review:30, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    // ]);

    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className='allproduct-container'>
                <div className='filter-container'>
                    <p>Shopping Options</p>
                    <hr />
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label for="vehicle2"> I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                    <label for="vehicle3"> I have a boat</label><br />
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <div>
                        {isChecked ? <p>Checkbox is checked</p> : <p>Checkbox is not checked</p>}
                    </div>
                    <button className='filter-product'>Filter</button>
                </div>
                <div className='product-container'>
                    <div className='product-categories-header'>
                        <p>All Products</p>
                    </div>
                    <div className='thumbnail-products'>
                        <ThumbnailProduct product={products}></ThumbnailProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;