import './Cart.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

// make midtrans client
const midtransClient = require('midtrans-client');

const OrderSummary = ({items}) => {
    const totalPrice = items.reduce((sum, item) => sum + parseInt(item.price)*parseInt(item.quantity), 0);
    const totalOrder = totalPrice + parseInt(30000);

     // make isLoading useState
    const [isLoading, setIsLoading] = useState(false);
    const { loggedIn, userData } = useContext(AuthContext);

    const generateOrderID = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;
        let orderID = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          orderID += characters.charAt(randomIndex);
        }
      
        return orderID;
      };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", "SB-Mid-client-SXm0UNqEZXVLY8Er");
        script.async = true;
        document.body.appendChild(script);
    
            return () => {
                document.body.removeChild(script);
            };
        }, []);
    
        const handlePay = async () => {
            setIsLoading(true);
    
            const random_order_id = (length, format) => {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    if (format[i] === '-') {
                        result += '-';
                    } else {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                }
                return result;
            }
    
            const response = await fetch('/api/transaction/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    transaction_details: {
                        order_id: random_order_id(10, 'xxxx-xxxx-xxxx'),
                        gross_amount: totalOrder
                    },
                    credit_card: {
                        secure: true
                    }
                })
            });
    
            const { token, transaction } = await response.json();
            console.log("Ini Hasil dari Response JSON : ", transaction)
    
            setIsLoading(false);
            if (token) {
                console.log("token: ",token);
                // console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")

                window.snap.pay(token, {
                    onSuccess: async (result) => {
                        const responsePushCreate = await fetch('/api/transaction/pushCreate', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                payment_type: result.payment_type,
                                transaction_status: result.transaction_status,
                                pdf_url: result.pdf_url,
                                finish_url_redirect: result.finish_url_redirect,
                                status_code: result.status_code,
                                transaction_time: result.transaction_time,
                                gross_amount: result.gross_amount,
                                order_id: result.order_id,
                                transaction_id: result.transaction_id,
                                fraud_status: result.fraud_status,
                                status_message: result.status_message
                            })
                        });
    

                        try {
                            const response = await fetch('/api/transaction/pushOrder', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                userid: userData.id, // ganti dengan nilai yang sesuai
                                order_id: result.order_id, // ganti dengan nilai yang sesuai
                                transaction_id: result.transaction_id, // ganti dengan nilai yang sesuai
                                payment_type: result.payment_type, // ganti dengan nilai yang sesuai
                                status_code: result.status_code,
                                gross_amount: result.gross_amount,
                              }),
                            });
                        
                            if (response.ok) {
                              const data = await response.json();
                              console.log('Success', data);
                              // Lakukan tindakan setelah berhasil
                            } else {
                              const errorData = await response.json();
                              console.error('Error', errorData);
                              // Lakukan tindakan penanganan kesalahan
                            }
                          } catch (error) {
                            console.error('Error', error);
                            // Lakukan tindakan penanganan kesalahan
                          }
    
                    },
                    onPending: (result) => {
                        // window.location.replace(`/`);
                    },
                    onError: (result) => {
                        // window.location.replace(`/`);
                    },
                });
            }

            /*disini userid, order_id, paydetid, payserviceid*/
        }

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
                    <button className='checkout-button' onClick={handlePay} >Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;