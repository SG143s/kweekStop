// import AllProducts from "../../src/component/allproducts/AllProducts";

// function App() {
//     return (
//         <div className="App">
//             <AllProducts />
//         </div>
//     );
// }
  
// export default App;

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import AllProducts from '../../../src/component/allproducts/AllProducts';

// const ProductsPage = () => {
//   const router = useRouter();
//   const { query } = router;
//   const search = 
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch(`/api/products/search/${search}`);
//   //       const data = await response.json();
//   //       setProducts(data);
//   //     } catch (error) {
//   //       console.error('Error fetching products:', error);
//   //     }
//   //   };

//   //   if (search) {
//   //     fetchData();
//   //   }
//   // }, [search]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`/api/products/search/${search}`);
//       const data = await response.json();
//       setProducts(data);
//     }

//     fetchData();
//   }, [search]);

//   return (
//     <div>
//       <h1>Products for {search}</h1>
//       <AllProducts searchproducts={products} />
//     </div>
//   );
// };

// export default ProductsPage;

import { useRouter } from 'next/router';
import AllProducts from '../../../src/component/allproducts/AllProducts';
import SearchProduct from '../../../src/component/productsearch/SearchProduct';
import React, { useState, useEffect } from 'react';

function App() {
    const router = useRouter();
    const { query } = router;
    const search = query.search || '';

    const [productData, setProductData] = useState([]);

    console.log(search);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/search/${search}`);
          const data = await response.json();
          setProductData(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      if (search) {
        fetchData();
      }
    }, [search]);

    console.log(productData);

    return (
        <div className="App">
            <SearchProduct searchproducts={productData}/>
        </div>
    );
}

export default App;

