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
                <div className='product-review' key={p.base.pid} onClick={() => handleClick(p.base.pid)}>
                    <div className="product-img">
                        <Image src={p.imgpath} width={120} height={95} />
                    </div>
                    <div className="product-detail">
                        <p className='product-name'>{p.base.pname}</p>
                        <p className='category'>{p.base.pcat}</p>
                        <div className='feedback'>
                            <p className='star'><AiFillStar />{p.base.prate}</p>
                            <p className='review'>| {p.base.psrev}+ reviews</p>
                        </div>
                        <div className='product-price'>
                            {/* <p className='discount-price'>Rp{parseInt(p.discprice).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p> */}
                            <p className='discount-price'>Rp{p.discprice},-</p>
                            <p className='actual-price'>Rp{parseInt(p.base.orprice*1.2).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ThumbnailProduct;