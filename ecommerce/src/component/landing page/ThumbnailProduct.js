<<<<<<< HEAD
// import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import './ProductGroup.css';
import React from "react";
import Image from 'next/image';
=======
import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import './ProductGroup.css';
import React from "react";
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1

const ThumbnailProduct = ({product}) => {
    return (
        <div className="product-preview">
            {product.map((p) => (
                <div className='product-review'>
                    <div className="product-img">
<<<<<<< HEAD
                        <Image src="/png components/products/A white electronic device with a game controller on it..png" width={120} height={95} />
=======
                        <img src={ProductImage} width='120px' />
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1
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