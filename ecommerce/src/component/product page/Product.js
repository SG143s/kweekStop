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
                    <p className='brand-name'>NCAA</p>
                    <p className='product-title'>NCAA Illinois Fighting Illini Circo Cheese Cutting Board & Tools Set - Brown</p>
                    <p className='star-review'>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                        <span>104 reviews</span></p>
                    <p className='product-price'>$5895</p>
                    <p className='product-desc'>Reach out to the complex cheese lover in your life with the Circo Cheese Board by Picnic Time. On the surface, the Circo lulls you into thinking it's just a fun-loving, durable 10.2â€ (diameter) x 1.6â€ cheese cutting board. But inside, it's a full cheese board set sporting four stainless steel cheese tools with parawood handles. The Circo also features more than 81 square inches of cutting surface, made from parawood, an eco-friendly hardwood known for its rich grain and durability. A recessed moat neatly catches cheese brine or juice from cut fruit.</p>
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
                                <FaMinusCircle className='minus-svg'/>
                                <p className='product-amount'>0</p>
                                <FaPlusCircle className='plus-svg'/>
                            </div>
                            <p className='current-stock'><span>8072</span> in stock</p>
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
                        <tbody>
                            <tr className='number-of-pieces'>
                                <th className='table-column'>Number of Pieces:</th>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th className='table-column'>Weight:</th>
                                <td>3.5</td>
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