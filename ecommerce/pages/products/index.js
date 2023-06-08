import AllProducts from "../../src/component/allproducts/AllProducts";

function App() {
    return (
        <div className="App">
            <AllProducts />
        </div>
    );
}
  
export default App;

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import AllProducts from '../../src/component/allproducts/AllProducts';
// import fetch from 'node-fetch';

// function App() {
//   const router = useRouter();
//   const { query } = router;
//   const search = query.search || '';
//   const [products, setProducts] = useState([]);

//   // const fetch = require('node-fetch');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/products/search/${search}`);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     if (search) {
//       fetchData();
//     }
//   }, [search]);
//   console.log("search, ", search)
//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const response = await fetch(`/api/products/search/${search}`);
//   //     const data = await response.json();
//   //     setProducts(data);
//   //   }

//   //   fetchData();
//   // }, [search]);

//   console.log("woilah yang bener");
//   return (
//     <div>
//       <h1>Products for {search}</h1>
//       <AllProducts searchproducts={products} />
//     </div>
//   );
// };

// export default App;

