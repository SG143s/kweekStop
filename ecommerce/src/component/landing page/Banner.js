// import FreeDelivery from '../png components/free delivery.png';
// import BannerCart from '../png components/Banner.png';
// import CheckoutBold from '../png components/checkoutnow-bold.png';
// import CheckoutThin from '../png components/checkoutnow-thin.png';
import './Banner.css';
import Image from 'next/image';
import ImageCard from '../ImageCard';

const Banner = (props) => {
    
    return (
        <div>
            <div className="banner-container">
                <div className="free-notes-browse">
                    <div><Image src="/png components/free delivery.png" width={150} height={30} /></div>
                    <p>Make transactions with ease and comfort,<br></br>
                    without worrying about any service fees. And<br></br>
                    the best part? <strong>It's FREE!</strong></p>
                    <button className='browse-product'>Browse product</button>
                </div>
                <div className="cart-circle">
                    <Image src="/png components/Banner.png" width={420} height={202} />
                </div>
                <div className="checkout">
                    <Image src="/png components/checkoutnow-bold.png" width={230} height={26} className='bold-checkout' />
                    <div className='thin-checkout'>
                        <Image src="/png components/checkoutnow-thin.png" width={220} height={22} alt='checkoutnow-thin'/><br></br>
                        <Image src="/png components/checkoutnow-thin.png" width={220} height={22} /><br></br>
                        <Image src="/png components/checkoutnow-thin.png" width={220} height={22} /><br></br>
                        <Image src="/png components/checkoutnow-thin.png" width={220} height={22} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;