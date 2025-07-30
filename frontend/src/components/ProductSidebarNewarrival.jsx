import React, { useState } from 'react';
import './ProductSidebar.css';

const ProductSidebarNewarrival = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="product-sidebar-wrapper">
            <button className="product-button" onClick={() => setIsOpen(!isOpen)}>
                <div><i className="ri-search-line"></i><p>New Arrival</p></div>
                <div>
                    <i className="ri-arrow-down-s-line"></i>
                </div>
            </button>
            {isOpen && (
                <div className="product-dropdown">
                    <div className="menu-item">
                        <i className="ri-bard-fill"></i>
                        <p>Beauty</p>
                    </div>
                    <div className="menu-item">
                        <i className="ri-tailwind-css-fill"></i>
                        <p>Fragrances</p>
                    </div>
                    <div className="menu-item">
                        <i className="ri-switch-fill"></i>
                        <p>Furniture</p>
                    </div>
                    <div className="menu-item">
                        <i className="ri-seedling-fill"></i>
                        <p>Groceries</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductSidebarNewarrival
