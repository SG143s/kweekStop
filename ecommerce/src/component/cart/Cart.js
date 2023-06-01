import MainNavbar from "../navbar/MainNavbar";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import "./Cart.css";
import OrderSummary from "./OrderSummary";

const Cart = (props) => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className="cart-container">
                <div className="cart-header">Shopping Cart</div>
                <div className="select-all-products">
                    <input type="checkbox" id="allproducts" name="allproducts" value="allproducts" />
                    <label for="allproducts">All Products</label>
                </div>
                <hr className="select-cart-div"></hr>
                <div className="product-in-cart">
                    <input type="checkbox" id="aproductsincart1" name="aproductsincart1" value="aproductsincart1" />
                    <label for="productsincart1" className="single-product-in-cart">
                        <div className="single-product-in-cart">
                            <Image src="/png components/products/product-1.png" width={200} height={200} />
                            <div className="single-product-cart-detail">
                                <p className="product-title">NCAA Illinois Fighting Illini Circo Cheese Cutting Board & Tools Set - Brown</p>
                                <p className="order-id">ORD294Y</p>
                                <p className="variation-pick"><strong>Variation:</strong> 1 Set</p>
                                <div className='product-stock-cart'>
                                    <div className='product-stock'>
                                        <div className='product-plus-minus'>
                                            <FaMinusCircle className='minus-svg'/>
                                            <p className='product-amount'>0</p>
                                            <FaPlusCircle className='plus-svg'/>
                                        </div>
                                        <p className='price'>Rp59.850</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div className="order-summary"><OrderSummary></OrderSummary></div>
        </div>
    );
};

export default Cart;