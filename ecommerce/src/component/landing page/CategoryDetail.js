import "./Categories.css";
// import Catagory from '../png components/categories/Catagory.png';
import React from "react";
import Image from 'next/image';

const CategoryDetail = ({cat}) => {
    return (
        <div className="category-detail">
            {cat.map((c) => (
                <div className="category-detail-container">
                    <Image src="/png components/categories/Catagory.png" width={90} height={90} />
                    <p>{c.name}</p>
                </div>
            ))}
        </div>
    )
};

export default CategoryDetail;