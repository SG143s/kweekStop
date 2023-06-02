import MainNavbar from "../navbar/MainNavbar";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import "./Cart.css";
import OrderSummary from "./OrderSummary";
import { useRouter } from 'next/router';

const Cart = ({products}) => {
    
    return (
        <div>
            <MainNavbar items={products}></MainNavbar>
            <div className="cart-container">
                <div className="cart-header">Shopping Cart</div>
                <div className="select-all-products">
                    <input type="checkbox" id="allproducts" name="allproducts" value="allproducts" />
                    <label for="allproducts">All Products</label>
                </div>
                <hr className="select-cart-div"></hr>
                {products.map((p) => (
                    <div className="product-in-cart">
                        <input type="checkbox" id="aproductsincart1" name="aproductsincart1" value="aproductsincart1" />
                        <label for="productsincart1" className="single-product-in-cart">
                            <div className="single-product-in-cart">
                                <Image src="/png components/products/product-1.png" width={200} height={200} />
                                <div className="single-product-cart-detail">
                                    <p className="product-title">{p.productname}</p>
                                    <p className="order-id">{p.shopid}</p>
                                    <p className="variation-pick"><strong>Variation:</strong> 1 Set</p>
                                    <div className='product-stock-cart'>
                                        <div className='product-stock'>
                                            <div className='product-plus-minus'>
                                                <FaMinusCircle className='minus-svg'/>
                                                <p className='product-amount'>{p.quantity}</p>
                                                <FaPlusCircle className='plus-svg'/>
                                            </div>
                                            <p className='price'>Rp{parseInt(p.price).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
            <div className="order-summary"><OrderSummary items={products}></OrderSummary></div>
        </div>
    );
};

export default Cart;