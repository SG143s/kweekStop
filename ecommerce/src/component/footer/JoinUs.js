import './Footer.css';
import ImageFooter from '../png components/image footer.png'

const JoinUs = (props) => {
    return (
        <div>
            <div className='image-footer'><img src={ImageFooter} height='165px' /></div>
            <div className='footer-detail-join'>
                <p className='title'>Ready to start an Online Shop? Join Us!</p>
                <p className='detail'>Experience seamless and stress-free transactions, with no hidden costs or service fees. Yes, it's completely FREE!</p>
                <div className='footer-button'>
                    <button className='open-a-shop'>Open a Shop</button>
                    <button className='learn-more'>Learn More</button>
                </div>
            </div>
        </div>
    )
};

export default JoinUs