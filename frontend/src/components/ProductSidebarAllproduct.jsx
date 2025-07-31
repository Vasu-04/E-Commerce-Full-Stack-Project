import React, { useState } from 'react';
import './ProductSidebar.css';

const ProductSidebarAllproduct = ({onCategoryClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [ptrEvent,setPtrEvent] = useState("none")
    const handleCategoryClick = (category) => {
        setIsOpen(!isOpen)
        onCategoryClick(category);
    };
    return (
        <div className="product-sidebar-wrapper">
            <button className="product-button" onMouseOver={() => setIsOpen(true)} onClick={()=>{setIsOpen(false)}}>
                <div><i className="ri-handbag-line"></i><p>All Product</p></div>
                <div>
                    <i className="ri-arrow-down-s-line"></i>
                </div>
            </button>
            {isOpen && (
                <div className="product-dropdown">
                    <div className="menu-item" onClick={()=>handleCategoryClick("beauty")}>
                        <i className="ri-bard-fill"></i>
                        <p>Beauty</p>
                    </div>
                    <div className="menu-item" onClick={()=>handleCategoryClick("fragrances")}>
                        <i className="ri-tailwind-css-fill"></i>
                        <p>Fragrances</p>
                    </div>
                    <div className="menu-item" onClick={()=>handleCategoryClick("furniture")}>
                        <i className="ri-switch-fill"></i>
                        <p>Furniture</p>
                    </div>
                    <div className="menu-item" onClick={()=>handleCategoryClick("groceries")}>
                        <i className="ri-seedling-fill"></i>
                        <p>Groceries</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSidebarAllproduct;
