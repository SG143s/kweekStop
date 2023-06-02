import './Product.css';
import MainNavbar from '../navbar/MainNavbar';
import { FaAngleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ProductGroup from '../landing page/ProductGroup';
// import ExampleProduct from '../png components/products/product-1.png';
// import ExampleExtraProduct from '../png components/products/Rectangle 52.png';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Image from 'next/image';
import Footer from '../footer/TextFooter';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const Product = ({productdata}) => {
    const [amount, setAmount] = useState(1);
    const { loggedIn, userData } = useContext(AuthContext);

    const decreaseAmount = () => {
        if (amount > 1) {
        setAmount(amount - 1);
    }
    };

    const increaseAmount = () => {
        setAmount(amount + 1);
    };

    const handleAddToCart = async () => {
        try {
          const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount, productdata, userData }),
          });
    
          if (response.ok) {
            // Cart item added successfully
            console.log('Item added to cart');
          } else {
            // Handle error response
            console.error('Error adding item to cart');
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error adding item to cart', error);
        }
      };

    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className='breadcrumbs'>
                <p>Home <FaAngleRight /> Movies, Music & Books <FaAngleRight />  Books <FaAngleRight />  Kid's Books <FaAngleRight />  Elementary Kid's Books</p>
            </div>
            <div className='product-container'>
                <div className='product-image'>
                    <div className='product-image-extra'>
                        <Image src="/png components/products/Rectangle 52.png" width={120} height={120} />
                        <Image src="/png components/products/Rectangle 52.png" width={120} height={120} />
                        <Image src="/png components/products/Rectangle 52.png" width={120} height={120} />
                        <Image src="/png components/products/Rectangle 52.png" width={120} height={120} />
                    </div>
                    <div className='product-image-main'>
                        <Image src="/png components/products/product-1.png" width={600} height={600} />
                    </div>
                </div>
                <div className='product-detail-container'>
                    <p className='brand-name'>{productdata.name}</p>
                    <p className='product-title'>{productdata.productname}</p>
                    <p className='star-review'>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                        <span>{productdata.categoryid} reviews</span></p>
                    <p className='product-price'>Rp{parseInt(productdata.price).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                    <p className='product-desc'>{productdata.description}</p>
                    <div className='variation'>
                        <p className='variation-title'>Variation</p>
                        <form>
                            <input type="button" value="Tools" />
                            <input type="button" value="1 Set" />
                            <input type="button" value="Cutting Board" />
                        </form>
                    </div>
                    <div className='product-stock-cart'>
                        <div className='product-stock'>
                            <div className='product-plus-minus'>
                                <FaMinusCircle className='minus-svg' onClick={decreaseAmount}/>
                                <p className='product-amount'>{amount}</p>
                                <FaPlusCircle className='plus-svg'onClick={increaseAmount} />
                            </div>
                            <p className='current-stock'><span>{productdata.stock - amount}</span> in stock</p>
                            <div className='add-to-cart' onClick={handleAddToCart}>
                                <FaShoppingCart />
                                <p>Add to Cart</p>
                            </div>
                        </div>
                        <button className='buy-now' onClick={handleAddToCart}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='product-more-detail-container'>
                <div className='detail-header'>
                    <p className='additional-info'>Additional Information</p>
                    <p className='product-reviews'>Reviews ({productdata.categoryid})</p>
                </div>
                <hr className='detail-divider'></hr>
                <div className='additional-detail'>
                    <table className='additional-detail'>
                        <tbody>
                            <tr className='number-of-pieces'>
                                <th className='table-column'>Number of Pieces:</th>
                                <td>{productdata.stock}</td>
                            </tr>
                            <tr>
                                <th className='table-column'>Weight:</th>
                                <td>{productdata.categoryid % 5 * 1.2} g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='product-related'>
                    <ProductGroup titleGroup={"Related Products"}></ProductGroup>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Product;