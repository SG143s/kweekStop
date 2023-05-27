import './Product.css';
import MainNavbar from '../navbar/MainNavbar';
import { FaAngleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ProductGroup from '../landing page/ProductGroup';
import ExampleProduct from '../png components/products/product-1.png';
import ExampleExtraProduct from '../png components/products/Rectangle 52.png';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Product = (props) => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className='breadcrumbs'>
                <p>Home <FaAngleRight /> Movies, Music & Books <FaAngleRight />  Books <FaAngleRight />  Kid's Books <FaAngleRight />  Elementary Kid's Books</p>
            </div>
            <div className='product-container'>
                <div className='product-image'>
                    <div className='product-image-extra'>
                        <img src={ExampleExtraProduct} width='120px'></img>
                        <img src={ExampleExtraProduct} width='120px'></img>
                        <img src={ExampleExtraProduct} width='120px'></img>
                        <img src={ExampleExtraProduct} width='120px'></img>
                    </div>
                    <div className='product-image-main'>
                        <img src={ExampleProduct} width='600px'></img>
                    </div>
                </div>
                <div className='product-detail-container'>
                    <p className='brand-name'>NCAA</p>
                    <p className='product-title'>NCAA Illinois Fighting Illini Circo Cheese Cutting Board & Tools Set - Brown</p>
                    <p className='star-review'>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                        <span>104 reviews</span></p>
                    <p className='product-price'>$5895</p>
                    <p className='product-desc'>Reach out to the complex cheese lover in your life with the Circo Cheese Board by Picnic Time. On the surface, the Circo lulls you into thinking it's just a fun-loving, durable 10.2â€ (diameter) x 1.6â€ cheese cutting board. But inside, it's a full cheese board set sporting four stainless steel cheese tools with parawood handles. The Circo also features more than 81 square inches of cutting surface, made from parawood, an eco-friendly hardwood known for its rich grain and durability. A recessed moat neatly catches cheese brine or juice from cut fruit.</p>
                    <div className='variation'>
                        <button className='variation-1'>Tools</button>
                        <button className='variation-2'>1 ser</button>
                        <button className='variation-3'>Cutting Board</button>
                    </div>
                    <div className='product-stock-cart'>
                        <div className='product-stock'>
                            <div className='produt-plus-minus'>
                                <FaPlusCircle />
                                <p className='product-amount'>0</p>
                                <FaMinusCircle />
                            </div>
                            <p className='current-stock'>8072 in stock</p>
                            <div className='add-to-cart'>
                                <FaShoppingCart />
                                <p>Add to Cart</p>
                            </div>
                        </div>
                        <button className='buy-now'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='product-more-detail-container'>
                <div className='detail-header'>
                    <p className='additional-info'>Additional Information</p>
                    <p className='product-reviews'>Reviews (104)</p>
                </div>
                <hr className='detail-divider'></hr>
                <div className='additional-detail'>
                    <table className='additional-detail'>
                        <tr>
                            <th>Number of Pieces:</th>
                            <th>Weight:</th>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3.5</td>
                        </tr>
                    </table>
                </div>
                <div className='product-related'>
                    <ProductGroup></ProductGroup>
                </div>
            </div>
        </div>
    )
};

export default Product;