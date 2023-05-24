import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import './ProductGroup.css';
import React from "react";

const ThumbnailProduct = ({product}) => {
    return (
        <div className="product-preview">
            {product.map((p) => (
                <div className='product-review'>
                    <div className="product-img">
                        <img src={ProductImage} width='120px' />
                    </div>
                    <div className="product-detail">
                        <p className='product-name'>{p.productname}</p>
                        <p className='category'>{p.category}</p>
                        <div className='feedback'>
                            <p className='star'><AiFillStar />{p.star}</p>
                            <p className='review'>| {p.review}+ reviews</p>
                        </div>
                        <div className='product-price'>
                            <p className='discount-price'>{p.discprice}</p>
                            <p className='actual-price'>{p.actprice}</p>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    )
};

export default ThumbnailProduct;