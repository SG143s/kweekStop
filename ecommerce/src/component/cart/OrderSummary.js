import './Cart.css';

const OrderSummary = ({items}) => {
    const totalPrice = items.reduce((sum, item) => sum + parseInt(item.price)*parseInt(item.quantity), 0);
    const totalOrder = totalPrice + parseInt(30000);
    return (
        <div>
            <div className="order-summary-container">
                <div className='order-sum-top'>
                    <p className='order-title'>Order Summary ({items.length} item)</p>
                    <div className='order-top-detail'>
                        <div className='subtotal'>
                            <p className='subtotal-label'>Subtotal</p>
                            <p className='subtotal-price'>Rp{parseInt(totalPrice).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                        </div>
                        <div className='shipping'>
                            <p className='shipping-label'>Shipping</p>
                            <p className='shipping-price'>+Rp40.000,-</p>
                        </div>
                        <div className='discount'>
                            <p className='discount-label'>Discount</p>
                            <p className='discount-price'>-Rp10.000,-</p>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className='order-sum-bottom'>
                    <div className='total'>
                            <p className='total-label'><strong>Total</strong></p>
                            <p className='total-price'><strong>Rp{parseInt(totalOrder).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</strong></p>
                    </div>
                    <button className='checkout-button'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;