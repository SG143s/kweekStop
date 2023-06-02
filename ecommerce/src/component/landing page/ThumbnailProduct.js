// import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import './ProductGroup.css';
import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

const ThumbnailProduct = ({product}) => {
    const router = useRouter();

    const handleClick = (productId) => {
        router.push(`/single-product?id=${productId}`);
    };
    
    return (
        <div className="product-preview">
            {product.map((p) => (
                <div className='product-review' key={p.productid} onClick={() => handleClick(p.productid)}>
                    <div className="product-img">
                        <Image src="/png components/products/A white electronic device with a game controller on it..png" width={120} height={95} />
                    </div>
                    <div className="product-detail">
                        <p className='product-name'>{p.productname}</p>
                        <p className='category'>{p.name}</p>
                        <div className='feedback'>
                            <p className='star'><AiFillStar />{(p.stock+2) % 5}</p>
                            <p className='review'>| {p.stock}+ reviews</p>
                        </div>
                        <div className='product-price'>
                            <p className='discount-price'>Rp{p.price},-</p>
                            <p className='actual-price'>Rp{p.price * 1.3},-</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ThumbnailProduct;