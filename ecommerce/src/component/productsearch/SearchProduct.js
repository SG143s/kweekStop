import MainNavbar from '../navbar/MainNavbar';
import ThumbnailProduct from '../landing page/ThumbnailProduct';
import React from "react";
import { useEffect, useState } from "react";
import '../allproducts/AllProducts.css';
import PreviewSearch from './PreviewSearch';

const AllProducts = ({searchproducts}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [products, setProducts] = useState([]);

      const [selectedOptions, setSelectedOptions] = useState([]);

      console.log("searchproducts:",searchproducts);

  useEffect(() => {
    fetchData();
  }, [selectedOptions]);

  async function fetchData() {
    let endpoint = '/api/products/products';

    if (selectedOptions.includes('highestPrice')) {
      endpoint = '/api/products/sortexpensive';
    } else if (selectedOptions.includes('lowestPrice')) {
      endpoint = '/api/products/sortcheapest';
    } else if (selectedOptions.includes('popular')) {
      endpoint = '/api/products/popular';
    }

    const response = await fetch(endpoint);
    const data = await response.json();
    // Lakukan sesuatu dengan data yang diterima dari API
    console.log(data);
    setProducts(data);
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleFilterClick = () => {
    fetchData();
  };

    // const [product] = useState([
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:4.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 1 (2026)", category: "PlayStation", star:1.4, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 4 (2026)", category: "PlayStation", star:4.7, review:50, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 7 (2026)", category: "PlayStation", star:3.4, review:80, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 8 (2026)", category: "PlayStation", star:4.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:1.8, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 2 (2026)", category: "PlayStation", star:2.4, review:90, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 3 (2026)", category: "PlayStation", star:3.6, review:70, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    //     { imagepath: "Catagory", productname: "PlayStation 6 (2026)", category: "PlayStation", star:5.0, review:30, discprice: "Rp2.999.999", actprice: "Rp3.982.999"},
    // ]);

    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className='allproduct-container'>
            <div className='filter-container'>
                <p>Shopping Options</p>
                <hr />
                <input type="checkbox" id="highestPrice" name="highestPrice" value="highestPrice" onChange={handleCheckboxChange} />
                <label htmlFor="highestPrice">Sort by Highest Price</label><br />
                <input type="checkbox" id="LowestPrice" name="LowestPrice" value="lowestPrice" onChange={handleCheckboxChange} />
                <label htmlFor="LowestPrice">Sort by Lowest Price</label><br />
                <input type="checkbox" id="popular" name="popular" value="popular" onChange={handleCheckboxChange} />
                <label htmlFor="popular">Sort by Popular</label><br />
                <button className='filter-product' onClick={handleFilterClick}>Filter</button>
            </div>
                <div className='product-container'>
                    <div className='product-categories-header'>
                        <p>All Products</p>
                    </div>
                    <div className='thumbnail-products'>
                        {/* <ThumbnailProduct product={products}></ThumbnailProduct> */}
                        <PreviewSearch product={searchproducts ? searchproducts : products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;