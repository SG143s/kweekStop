import React from "react";
import { useEffect, useState } from "react";
import "./MainNavbar.css";

const CategoriesMenu = (props) => {

    // const [productCat] = useState([
    //     { cat1: "", cat2: "", cat3: "", cat4: "" },
    //     { cat1: "Beauty", cat2: "Clothing, Shoes & Accessories", cat3: "Electronics", cat4: "Furniture" },
    //     { cat1: "Grocery", cat2: "Health", cat3: "Household Essentials", cat4: "Holiday Shop" },
    //     { cat1: "Kitchen & Dining", cat2: "Luggage", cat3: "Movies", cat4: "Music & Books" },
    //     { cat1: "Party Supplies", cat2: "Patio & Garden", cat3: "Pets", cat4: "School & Office Supplies" },
    //     { cat1: "Sports & Outdoors", cat2: "Top Deals", cat3: "Toys"}
    // ]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/products/categories");
            const data = await response.json();
            // setCategories(data);
            setCategories(data.slice(21, 35));
        }
    
        fetchData();
    }, []);

    return (
        <div>
            <div className="categories-menu-div">
                <div className="categories-menu">
                    {/* <tbody> */}
                        {categories.map((c) => (
                            // <tr>
                                <p>{c.name}</p>
                                // <td>{c.cat2}</td>
                                // <td>{c.cat3}</td>
                                // <td>{c.cat4}</td>
                            // </tr>
                        ))}
                    {/* </tbody> */}
                </div>
            </div>
        </div>
    );
};

export default CategoriesMenu;