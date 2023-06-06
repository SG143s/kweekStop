import './Categories.css'
// import { useState } from "react";
import CategoryDetail from './CategoryDetail';
import React from "react";
import { useEffect, useState } from "react";

const Categories = (props) => {
    // const [cat] = useState([
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    //     { name: "Catagory"  },
    // ]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch("/api/products/categories");
          const data = await response.json();
      
          if (Array.isArray(data)) {
            setCategories(data.slice(0, 20));
          } else {
            // Handle the case where data is not an array
            console.error("Data is not an array:", data);
          }
        }
      
        fetchData();
      }, []);

    return (
        <div>
            <div className="categories-container">
                <div className="title">
                    <p>Popular Categories <span>more</span></p>
                </div>
                <div className='categories-all'>
                    <CategoryDetail cat={categories}></CategoryDetail>
                </div>
            </div>
        </div>
    )
};

export default Categories;