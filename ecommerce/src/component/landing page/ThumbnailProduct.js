// import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import './ProductGroup.css';
import React from "react";
import Image from 'next/image';

const ThumbnailProduct = ({product}) => {
    return (
        <div className="product-preview">
            {product.map((p) => (
                <div className='product-review'>
                    <div className="product-img">
                        <Image src="/png components/products/A white electronic device with a game controller on it..png" width={120} height={95} />
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