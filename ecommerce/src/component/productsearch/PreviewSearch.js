// import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'
import { AiFillStar } from "react-icons/ai";
import '../landing page/ProductGroup.css';
import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

const PreviewSearch = ({product}) => {
    const router = useRouter();

    const handleClick = (productId) => {
        router.push(`/single-product?id=${productId}`);
    };
    
    return (
        <div className="product-preview">
            {product.map((p) => (
                <div className='product-review' key={p.id} onClick={() => handleClick(p.id)}>
                    <div className="product-img">
                        <Image src={p.productimg[0].imagepath} width={120} height={95} />
                    </div>
                    <div className="product-detail">
                        <p className='product-name'>{p.productname}</p>
                        <p className='category'>{p.categoryprod[0].category.name}</p>
                        <div className='feedback'>
                            <p className='star'><AiFillStar />{p.stock%5}</p>
                            <p className='review'>| {p.stock}+ reviews</p>
                        </div>
                        <div className='product-price'>
                            <p className='discount-price'>Rp{parseInt(p.price).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                            <p className='actual-price'>Rp{parseInt(p.price*1.2).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PreviewSearch;