// import EmojiFire from '../png components/emoji fire.png';
import './ProductGroup.css';
import React from "react";
import { useEffect, useState } from "react";
import ThumbnailProduct from './ThumbnailProduct';
import Image from 'next/image';

const ProductGroup = ({titleGroup}) => {
    // const [product] = useState([
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:4.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 1 (2026)", category: "PlayStation", star:1.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 4 (2026)", category: "PlayStation", star:4.7, review:50, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 7 (2026)", category: "PlayStation", star:3.4, review:80, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 8 (2026)", category: "PlayStation", star:4.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:1.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 3 (2026)", category: "PlayStation", star:3.6, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:5.0, review:30, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    // ]);

    // const [isChecked, setIsChecked] = useState(false);
    const [products, setProducts] = useState([]);

    // const handleCheckboxChange = () => {
    //     setIsChecked(!isChecked);
    // };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/products");
            const data = await response.json();
            let filteredData = data;

            if (titleGroup=="Hot deals") {
                filteredData = data.filter(product => product.price > 900000);
            } else if (titleGroup=="What's new?") {
                filteredData = data.slice(-20); 
            } else if (titleGroup=="Under 100k") {
                filteredData = data.filter(product => product.price < 100000);
            }

            const formattedData = filteredData.map(product => ({
                ...product,
                price: parseInt(product.price).toLocaleString('en-US', { useGrouping: true }).replace(',', '.'),
            }));
            setProducts(formattedData);
        }
    
        fetchData();
    }, []);

    return (
        <div>
            <div className="productgroup-container">
                <div className="title">
                    <p className='group-name'>{titleGroup} <Image src="/png components/emoji fire.png" width={10} height={13} /></p>
                    <div className='thumbnail-products'>
                        <ThumbnailProduct product={products}></ThumbnailProduct>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductGroup;