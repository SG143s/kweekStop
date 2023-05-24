import './Categories.css'
import { useState } from "react";
import CategoryDetail from './CategoryDetail';

const Categories = (props) => {
    const [cat] = useState([
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
        { name: "Catagory"  },
    ]);

    return (
        <div>
            <div className="categories-container">
                <div className="title">
                    <p>Popular Categories <span>more</span></p>
                </div>
                    <CategoryDetail cat={cat}></CategoryDetail>
            </div>
        </div>
    )
};

export default Categories;