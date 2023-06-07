import { useEffect, useState } from 'react';
const RajaOngkir = () => {

    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const requestData = {
            origin: '501',
            destination: '114',
            weight: 1700,
            courier: 'jne',
          };
  
          const response = await fetch('/api/deliveryservice/getFee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
  
          const data = await response.json();
  
          setResponseMessage(data.message);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);


//     const [cities, setCities] = useState([]);
//     const [originCity, setOriginCity] = useState("");
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('/api/deliveryservice/getCityID');
//           const data = await response.json();
//           if (response.ok) {
//             setCities(data.data.rajaongkir.results);
//           } else {
//             console.error(data.message);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     useEffect(() => {
//       if (cities.length > 0) {
//         setOriginCity(cities[0]);
//       }
//     }, [cities]);
  
//     console.log("origin city: ", originCity);
  
    return (
      <div>
        {/* Render your component content */}
        <p>Response message: {responseMessage}</p>
      </div>
    );
  };
   

export default RajaOngkir;