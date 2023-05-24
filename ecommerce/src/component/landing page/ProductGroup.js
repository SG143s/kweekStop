import EmojiFire from '../png components/emoji fire.png';
import './ProductGroup.css';
import { useState } from "react";
import ThumbnailProduct from './ThumbnailProduct';
import React from "react";

const ProductGroup = ({titleGroup}) => {
    const [product] = useState([
        { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:4.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 1 (2026)", category: "PlayStation", star:1.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 4 (2026)", category: "PlayStation", star:4.7, review:50, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 7 (2026)", category: "PlayStation", star:3.4, review:80, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 8 (2026)", category: "PlayStation", star:4.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:1.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 3 (2026)", category: "PlayStation", star:3.6, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
        { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:5.0, review:30, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    ]);

    return (
        <div>
            <div className="productgroup-container">
                <div className="title">
                    <p className='group-name'>{titleGroup} <img src={EmojiFire} width='10px' /></p>
                    <div className='thumbnail-products'>
                        <ThumbnailProduct product={product}></ThumbnailProduct>
                    </div>
                </div>
                    
            </div>
        </div>
    )
};

export default ProductGroup;