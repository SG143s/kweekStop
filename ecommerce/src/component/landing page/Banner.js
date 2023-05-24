import FreeDelivery from '../png components/free delivery.png';
import BannerCart from '../png components/Banner.png';
import CheckoutBold from '../png components/checkoutnow-bold.png';
import CheckoutThin from '../png components/checkoutnow-thin.png';
import './Banner.css';

const Banner = (props) => {
    
    return (
        <div>
            <div className="banner-container">
                <div className="free-notes-browse">
                    <div><img src={FreeDelivery} width='150px' /></div>
                    <p>Make transactions with ease and comfort,<br></br>
                    without worrying about any service fees. And<br></br>
                    the best part? <strong>It's FREE!</strong></p>
                    <button className='browse-product'>Browse product</button>
                </div>
                <div className="cart-circle">
                    <img src={BannerCart} width='420px' />
                </div>
                <div className="checkout">
                    <img src={CheckoutBold} className='bold-checkout' width='230px' /><br></br>
                    <div className='thin-checkout'>
                        <img src={CheckoutThin} width='220px' /><br></br>
                        <img src={CheckoutThin} width='220px' /><br></br>
                        <img src={CheckoutThin} width='220px' /><br></br>
                        <img src={CheckoutThin} width='220px' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;