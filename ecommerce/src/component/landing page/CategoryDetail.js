import "./Categories.css";
import Catagory from '../png components/categories/Catagory.png';
import React from "react";

const CategoryDetail = ({cat}) => {
    return (
        <div className="category-detail">
            {cat.map((c) => (
                <div className="category-detail-container">
                    <img src={Catagory} width='90px' />
                    <p>{c.name}</p>
                </div>
            ))}
        </div>
    )
};

export default CategoryDetail;