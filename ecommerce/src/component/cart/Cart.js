// import MainNavbar from "../navbar/MainNavbar";
// import Image from "next/image";
// import { FaPlusCircle } from "react-icons/fa";
// import { FaMinusCircle } from "react-icons/fa";
// import "./Cart.css";
// import OrderSummary from "./OrderSummary";
// import { useRouter } from 'next/router';

// const Cart = ({products}) => {
    
//     return (
//         <div>
//             <MainNavbar items={products}></MainNavbar>
//             <div className="cart-container">
//                 <div className="cart-header">Shopping Cart</div>
//                 <div className="select-all-products">
//                     <input type="checkbox" id="allproducts" name="allproducts" value="allproducts" />
//                     <label for="allproducts">All Products</label>
//                 </div>
//                 <hr className="select-cart-div"></hr>
//                 {products.map((p) => (
//                     <div className="product-in-cart">
//                         <input type="checkbox" id="aproductsincart1" name="aproductsincart1" value="aproductsincart1" />
//                         <label for="productsincart1" className="single-product-in-cart">
//                             <div className="single-product-in-cart">
//                                 <Image src="/png components/products/product-1.png" width={200} height={200} />
//                                 <div className="single-product-cart-detail">
//                                     <p className="product-title">{p.productname}</p>
//                                     <p className="order-id">{p.shopid}</p>
//                                     <p className="variation-pick"><strong>Variation:</strong> 1 Set</p>
//                                     <div className='product-stock-cart'>
//                                         <div className='product-stock'>
//                                             <div className='product-plus-minus'>
//                                                 <FaMinusCircle className='minus-svg'/>
//                                                 <p className='product-amount'>{p.quantity}</p>
//                                                 {/* <p className='product-amount'>{p.id}</p> */}
//                                                 <FaPlusCircle className='plus-svg'/>
//                                             </div>
//                                             <p className='price'>Rp{parseInt(p.price).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </label>
//                     </div>
//                 ))}
//             </div>
//             <div className="order-summary"><OrderSummary items={products}></OrderSummary></div>
//         </div>
//     );
// };

// export default Cart;

import MainNavbar from "../navbar/MainNavbar";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import "./Cart.css";
import OrderSummary from "./OrderSummary";

const Cart = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const uniqueProducts = products.filter((product, index) => {
    // Cari indeks pertama dari entri dengan productid yang sama
    const firstIndex = products.findIndex((p) => p.productid === product.productid);
    // Pilih hanya entri dengan indeks pertama
    return index === firstIndex;
  });
  

  const handleCheckboxChange = (event, productId) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((id) => id !== productId)
      );
    }
  };

  return (
    <div>
      <MainNavbar items={uniqueProducts}></MainNavbar>
      <div className="cart-container">
        <div className="cart-header">Shopping Cart</div>
        <div className="select-all-products">
          <input
            type="checkbox"
            id="allproducts"
            name="allproducts"
            value="allproducts"
          />
          <label htmlFor="allproducts">All Products</label>
        </div>
        <hr className="select-cart-div"></hr>
        {uniqueProducts.map((p) => (
          <div className="product-in-cart" key={p.id}>
            <input
              type="checkbox"
              id={`productsincart${p.id}`}
              name={`productsincart${p.id}`}
              value={`productsincart${p.id}`}
              onChange={(event) => handleCheckboxChange(event, p.id)}
            />
            <label
              htmlFor={`productsincart${p.id}`}
              className="single-product-in-cart"
            >
              <div className="single-product-in-cart">
                <Image
                  src={p.imagepath}
                  width={200}
                  height={200}
                />
                <div className="single-product-cart-detail">
                  <p className="product-title">{p.productname}</p>
                  <p className="order-id">{p.shopid}</p>
                  <p>{p.imagepath}</p>
                  <p className="variation-pick">
                    <strong>Variation:</strong> 1 Set
                  </p>
                  <div className="product-stock-cart">
                    <div className="product-stock">
                      <div className="product-plus-minus">
                        <FaMinusCircle className="minus-svg" />
                        <p className="product-amount">{p.quantity}</p>
                        <FaPlusCircle className="plus-svg" />
                      </div>
                      <p className="price">
                        Rp{parseInt(p.price).toLocaleString("en-US", {
                          useGrouping: true,
                        })}
                        ,-
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <OrderSummary
          items={uniqueProducts.filter((p) => selectedProducts.includes(p.id))}
        ></OrderSummary>
      </div>
    </div>
  );
};

export default Cart;
