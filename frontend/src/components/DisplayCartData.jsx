import React, { useState, useEffect } from 'react';
import './DisplayData.css';
import axios from 'axios';
import Tile from './Tile';
const DisplayCartData = ({ categoryFilter, searchFilter, hoveredTileIndex, onTileHover, onTileLeave }) => {
    const [cartProducts, setcartProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const fetchCategoryCartData = async () => {
        try {
            const res = await axios.post("https://e-commerce-full-stack-project-backend.onrender.com/Cart/GetCategoryCartData", {
                categoryFilter: categoryFilter
            });
            const cartProducts = res.data.categoryCartProducts;
            console.log(cartProducts); 
            // Assuming the response contains cartProducts array
            setcartProducts(cartProducts);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        const stopWords = ["a", "an", "the", "am", "are", "is", "was", "were", "and", "or", "but", "to", "of", "in", "on", "at", "for", "with", "without"];
        const cleaned = searchFilter.replace(/[^a-zA-Z0-9 ]/g, ' ').toLowerCase();
        const filteredWords = cleaned.split(/\s+/).filter(word => word && !stopWords.includes(word));

        if (filteredWords.length === 0) return; // no valid search terms

        const searchFromDatabase = async () => {
            try {
                const res = await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/Cart/GetAllProduct");
                const allCartSearchProducts = res.data.cartProducts;

                const uniqueProducts = [];
                allCartSearchProducts.forEach(product => {
                    const desc = product.description.toLowerCase();
                    if (filteredWords.some(word => desc.includes(word))) {
                        if (!uniqueProducts.find(p => p.id === product.id)) {
                            uniqueProducts.push(product);
                        }
                    }
                });

                setcartProducts(uniqueProducts);
                setCurrentPage(1); // reset to first page after search
            } catch (err) {
                console.error("Search failed", err);
            }
        };

        searchFromDatabase();
    }, [searchFilter]);
    const getAllCartProducts = async () => {
        try {
            const res = await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/Cart/GetAllProduct");
            const cartProducts = res.data.cartProducts;

            const productsWithImages = await Promise.all(
                cartProducts.map(async (product) => {
                    try {
                        const imgRes = await axios.get(`https://e-commerce-full-stack-project-backend.onrender.com/Cart/getCartProductImage/${product.productId}`);
                        return { ...product, ...imgRes.data.cartProductFetched };
                    } catch (err) {
                        console.error("Image fetch error:", err);
                        return { ...product, imageUrl: null };
                    }
                })
            );

            setcartProducts(productsWithImages);
            console.log("Products with images:", productsWithImages);
        } catch (err) {
            console.log("Cart fetch error:", err);
        }
    };
    useEffect(() => {
        setCurrentPage(1);
        if (categoryFilter === "") getAllCartProducts();
        else fetchCategoryCartData();
    }, [categoryFilter]);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = cartProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(cartProducts.length / productsPerPage);
    return (
        <div className="displayDataContainer">
            {cartProducts.length != 0 && (
                <div className='displayDataDiv'>
                    {
                        currentProducts.map((element, index) => (
                            <Tile key={index} element={element} index={index} onTileHover={onTileHover} onTileLeave={onTileLeave} hoveredTileIndex={hoveredTileIndex} />
                        ))
                    }
                </div>
            )}
            {cartProducts.length == 0 && (
                <div className='displayDataDiv'>
                    <h1>Cart is Empty</h1>
                </div>
            )}

            {/* Pagination Controls */}
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    ◀ Previous
                </button>
                <div className="pages">
                    {
                        Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={currentPage === i + 1 ? "active" : ""}
                            >
                                {i + 1}
                            </button>
                        ))
                    }
                </div>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next ▶
                </button>
            </div>
        </div>
    );
}

export default DisplayCartData
