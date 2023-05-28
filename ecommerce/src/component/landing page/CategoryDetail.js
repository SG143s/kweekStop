import "./Categories.css";
<<<<<<< HEAD
// import Catagory from '../png components/categories/Catagory.png';
import React from "react";
import Image from 'next/image';
=======
import Catagory from '../png components/categories/Catagory.png';
import React from "react";
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1

const CategoryDetail = ({cat}) => {
    return (
        <div className="category-detail">
            {cat.map((c) => (
                <div className="category-detail-container">
<<<<<<< HEAD
                    <Image src="/png components/categories/Catagory.png" width={90} height={90} />
=======
                    <img src={Catagory} width='90px' />
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1
                    <p>{c.name}</p>
                </div>
            ))}
        </div>
    )
};

export default CategoryDetail;