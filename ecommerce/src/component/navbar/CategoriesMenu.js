import React from "react";
import { useState } from "react";
import "./MainNavbar.css";

const CategoriesMenu = (props) => {

    const [productCat] = useState([
        { cat1: "", cat2: "", cat3: "", cat4: "" },
        { cat1: "Beauty", cat2: "Clothing, Shoes & Accessories", cat3: "Electronics", cat4: "Furniture" },
        { cat1: "Grocery", cat2: "Health", cat3: "Household Essentials", cat4: "Holiday Shop" },
        { cat1: "Kitchen & Dining", cat2: "Luggage", cat3: "Movies", cat4: "Music & Books" },
        { cat1: "Party Supplies", cat2: "Patio & Garden", cat3: "Pets", cat4: "School & Office Supplies" },
        { cat1: "Sports & Outdoors", cat2: "Top Deals", cat3: "Toys"}
    ]);

    return (
        <div>
            <div className="categories-menu-div">
                <table className="categories-menu">
                    <tbody>
                        {productCat.map((c) => (
                            <tr>
                                <td>{c.cat1}</td>
                                <td>{c.cat2}</td>
                                <td>{c.cat3}</td>
                                <td>{c.cat4}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesMenu;