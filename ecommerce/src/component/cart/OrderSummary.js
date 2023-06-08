import './Cart.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useRouter } from 'next/router';
// import MainNavbar from "../navbar/MainNavbar";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
// import { useState } from "react";
// import "./Cart.css";
// import OrderSummary from "./OrderSummary";

// make midtrans client
const midtransClient = require('midtrans-client');

const OrderSummary = ({items}) => {
    const totalPrice = items.reduce((sum, item) => sum + parseInt(item.price)*parseInt(item.quantity), 0);
    const totalOrder = totalPrice - parseInt(10000);

    const [cities, setCities] = useState([]);
    const [originCity, setOriginCity] = useState("");
    const [orderID, setorderID] = useState("");
    const [orderSuccess, setOrderSuccess] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/deliveryservice/getCityID');
          const data = await response.json();
          if (response.ok) {
            setCities(data.data.rajaongkir.results);
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (cities.length > 0) {
        setOriginCity(cities[500]);
      }
    }, [cities]);

    const [destinationCity, setDestinationCity] = useState(null);

    useEffect(() => {
        console.log("destination city: ", destinationCity);
      }, [destinationCity]);
  
const [costFee, setCostFee] = useState('');

useEffect(() => {
  const fetchData = async () => {
    try {
      if (destinationCity) {
        const requestData = {
          origin: originCity.city_id,
          destination: destinationCity.city_id,
          weight: 1700,
          courier: 'jne',
        };

        console.log("requestdata: ", requestData);

        const response = await fetch('/api/deliveryservice/getFee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();
        console.log("cost fee: ", data);
        setCostFee(data.data.rajaongkir.results[0].costs[0].cost[0].value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [destinationCity]);

const handleDestinationCityChange = (event) => {
  const selectedCityId = event.target.value;
  const selectedCity = cities.find((city) => city.city_id === selectedCityId);
  setDestinationCity(selectedCity);
  console.log("destinationcity: ", destinationCity);
};



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
                        gross_amount: totalOrder+costFee
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
                                items,
                                costFee
                              }),
                            });

                            setorderID(result.order_id);
                        
                            if (response.ok) {
                              const data = await response.json();
                              console.log('Success', data);
                              setOrderSuccess(true);
                              // Lakukan tindakan setelah berhasil
                              // const queryString = items.map(item => `orderId=${item.orderId}&productId=${item.productId}&quantity=${item.quantity}&deliveryId=${item.deliveryId}`).join('&');
                              // router.push(`/order?${queryString}`);
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
                  {orderSuccess ?
                  <div className='success-detail'>
                    <p className='order-berhasil'>Order Berhasil</p>
                    <p className='order-title'>Order Detail ({items.length} item)</p>
                  </div>
                  : 
                  <p className='order-title'>Order Summary ({items.length} item)</p>
                  }
                    <div className='order-top-detail'>
                        <div className='subtotal'>
                            <p className='subtotal-label'>Subtotal</p>
                            <p className='subtotal-price'>Rp{parseInt(totalPrice).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                        </div>
                        <div className='shipping'>
                            <p className='shipping-label'>Shipping</p>
                            <p className='shipping-price'>+Rp{parseInt(costFee).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</p>
                        </div>
                        <div className='discount'>
                            <p className='discount-label'>Discount</p>
                            <p className='discount-price'>-Rp10.000,-</p>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className='ongkirraja'>
                    <label htmlFor="originCity">Kota Asal:</label>
                    <select id="originCity" value={originCity.city_id} disabled>
                        {cities.map((city) => (
                        <option key={city.city_id} value={city.city_id}>
                            {city.city_name}
                        </option>
                        ))}
                    </select>

                    <label htmlFor="destinationCity">Kota Destinasi:</label>
                    <select
                        id="destinationCity"
                        value={destinationCity ? destinationCity.city_id : ''}
                        onChange={handleDestinationCityChange}
                    >
                        <option value="">Pilih kota destinasi</option>
                        {cities.map((city) => (
                        <option key={city.city_id} value={city.city_id}>
                            {city.city_name}
                        </option>
                        ))}
                    </select>
                    </div>
                <div className='order-sum-bottom'>
                    <div className='total'>
                            <p className='total-label'><strong>Total</strong></p>
                            <p className='total-price'><strong>Rp{parseInt(totalOrder+costFee).toLocaleString('en-US', { useGrouping: true }).replace(',', '.')},-</strong></p>
                    </div>
                    {orderSuccess ? 
                      <button className='checkout-button' onClick={handlePay} >Re-Order</button>
                    :
                      <button className='checkout-button' onClick={handlePay} >Checkout</button>
                    }
                </div>
            </div>
            {orderSuccess ? (
              <div className='order-success'>
                  <div className="cart-container">
                  <div className="cart-header">Your Orders</div>
                  <div className="select-all-products">
                    <label htmlFor="allproducts">Latest Order</label>
                  </div>
                  {/* <p>Order Berhasil!</p> */}
                  <p className='order-latest-id'>Order ID: {orderID}</p>
                  {/* <p>Ke Kota: {destinationCity}</p> */}
                  <hr className="select-cart-div"></hr>
                  {items.map((p) => (
                    <div className="product-in-cart">
                        <div className="single-product-in-cart">
                          <Image
                            src={p.imagepath}
                            width={200}
                            height={200}
                          />
                          <div className="single-product-cart-detail">
                            <p className="product-title">{p.productname}</p>
                            <p className="order-id">{p.shopid}</p>
                            {/* <p>{p.imagepath}</p> */}
                            <p className="variation-pick">
                              <strong>Variation:</strong> 1 Set
                            </p>
                            <div className="product-stock-cart">
                              <div className="product-stock">
                                <div className="product-plus-minus-order">
                                  {/* <FaMinusCircle className="minus-svg" /> */}
                                  <p className="product-amount">Quantity : {p.quantity}</p>
                                  {/* <FaPlusCircle className="plus-svg" /> */}
                                </div>
                                <p className="price">
                                  Rp{parseInt(p.price*p.quantity).toLocaleString("en-US", {
                                    useGrouping: true,
                                  })}
                                  ,-
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className='order-before'>
                <div className="cart-container">
                  <div className="cart-header">Your Orders</div>
                  <div className="select-all-products">
                    <label htmlFor="allproducts">Your order will appear here after you complete the checkout and payment process.</label>
                  </div>
                  </div>
                  </div>
            )
            }
        </div>
    );
};

export default OrderSummary;