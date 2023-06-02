import { useRouter } from 'next/router';
import Products from '../../src/component/product page/Product';
import React, { useState, useEffect } from 'react';

function App() {
    const router = useRouter();
    const { query } = router;
    const productId = query.id || '';

    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProductData(data);
      }
  
      fetchData();
    }, [productId]);

    console.log(productData);

    return (
        <div className="App">
            <Products productdata={productData}/>
        </div>
    );
}

export default App;