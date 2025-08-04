import React, { useState } from 'react';
import './ProductSidebar.css';

const ProductSidebarAllproduct = ({ onCategoryClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [arrowIcon, setarrowIcon] = useState("ri-arrow-right-s-line")

    const handleCategoryClick = (category) => {
        setIsOpen(!isOpen)
        onCategoryClick(category);
    };
    function onMenuItemClick(item) {
        handleCategoryClick(item);
        setarrowIcon("ri-circle-fill");
    }
    function onSidebarEnter() {
        setIsOpen(true);
        if (arrowIcon == "ri-arrow-right-s-line") setarrowIcon("ri-arrow-down-s-line")
        else setarrowIcon("ri-arrow-down-s-fill")
    }
    function onSidebarLeave() {
        setIsOpen(false);
        if (arrowIcon == "ri-arrow-down-s-line") setarrowIcon("ri-arrow-right-s-line")
        else setarrowIcon("ri-circle-fill")
    }
    function onButtonClick() {
        onMenuItemClick("");
        setarrowIcon("ri-arrow-right-s-line")
    }
    return (
        <div className="product-sidebar-wrapper" onMouseEnter={() => { onSidebarEnter() }} onMouseLeave={() => { onSidebarLeave() }} >
            <button className="product-button" onClick={() => { onButtonClick() }}>
                <div><i className="ri-search-line"></i><p>New Arrivals</p></div>
                <div>
                    <i className={arrowIcon}></i>
                    {/* <i className={`ri-arrow-right-s-line arrow-icon ${isOpen ? "rotate" : ""}`}></i> */}
                </div>
            </button>
            {isOpen && (
                <div className={`product-dropdown ${isOpen ? "open" : ""}`}>
                    <div className="menu-item" onClick={() => { onMenuItemClick("beauty") }}>
                        <i className="ri-bard-fill"></i>
                        <p>Beauty</p>
                    </div>
                    <div className="menu-item" onClick={() => { onMenuItemClick("fragrances") }}>
                        <i className="ri-tailwind-css-fill"></i>
                        <p>Fragrances</p>
                    </div>
                    <div className="menu-item" onClick={() => { onMenuItemClick("furniture") }}>
                        <i className="ri-switch-fill"></i>
                        <p>Furniture</p>
                    </div>
                    <div className="menu-item" onClick={() => { onMenuItemClick("groceries") }}>
                        <i className="ri-seedling-fill"></i>
                        <p>Groceries</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSidebarAllproduct;
