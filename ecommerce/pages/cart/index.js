import Cart from "../../src/component/cart/Cart";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function App() {
    const router = useRouter();
    const { loggedIn, userData } = useContext(AuthContext);

    const [productData, setProductData] = useState([]);
    const userId = userData.id;

    // console.log("user yang login: ", userData);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`/api/cart/${userId}`);
        const data = await response.json();
        setProductData(data);
      }
  
      fetchData();
    }, [userId]);

    return (
        <div className="App">
            <Cart products={productData}></Cart>
        </div>
    );
}
  
export default App;