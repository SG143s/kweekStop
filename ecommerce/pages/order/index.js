// import OrderDetail from "../../src/component/cart/OrderDetail";
  
// function App() {
//     return (
//         <div className="App">
//             <OrderDetail />
//         </div>
//     );
// }
  
// export default App;

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function OrderPage() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // Dapatkan nilai dari query parameter 'items' sebagai string
    const itemsString = query.items;

    // Ubah string 'items' menjadi array
    const itemsArray = itemsString.split(',');

    // Lakukan operasi apa pun yang Anda inginkan dengan array items
    console.log('Items:', itemsArray);

    // Dapatkan nilai dari query parameter 'orderid'
    const orderId = query.orderid;

    // Dapatkan nilai dari query parameter 'productid'
    const productId = query.productid;

    // Dapatkan nilai dari query parameter 'quantity'
    const quantity = query.quantity;

    // Dapatkan nilai dari query parameter 'deliveryid'
    const deliveryId = query.deliveryid;

    console.log('Order ID:', orderId);
    console.log('Product ID:', productId);
    console.log('Quantity:', quantity);
    console.log('Delivery ID:', deliveryId);
  }, [query]);

  return (
    <div>
      <h1>Order Page</h1>
      {/* Tampilkan konten halaman */}
      <p>Order ID: {query.orderid}</p>
      <p>Product ID: {query.productid}</p>
      <p>Quantity: {query.quantity}</p>
      <p>Delivery ID: {query.deliveryid}</p>
    </div>
  );
}

export default OrderPage;

