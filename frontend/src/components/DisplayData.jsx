import React, { useEffect, useState } from 'react';
import './DisplayData.css';
import axios from 'axios';
import Tile from './Tile';

const DisplayData = ({ categoryFilter, searchFilter, hoveredTileIndex, onTileHover, onTileLeave }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const fetchAllData = async () => {
        try {
            const res = await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/Getdata");
            setProducts(res.data.products);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchCategoryData = async () => {
        try {
            const res = await axios.post("https://e-commerce-full-stack-project-backend.onrender.com/Getdata/AllCategoryData", {
                categoryFilter: categoryFilter
            });
            setProducts(res.data.products);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
        if (categoryFilter === "") fetchAllData();
        else fetchCategoryData();
    }, [categoryFilter]);

    useEffect(() => {
        const stopWords = ["a", "an", "the", "am", "are", "is", "was", "were", "and", "or", "but", "to", "of", "in", "on", "at", "for", "with", "without"];
        const cleaned = searchFilter.replace(/[^a-zA-Z0-9 ]/g, ' ').toLowerCase();
        const filteredWords = cleaned.split(/\s+/).filter(word => word && !stopWords.includes(word));

        if (filteredWords.length === 0) return; // no valid search terms

        const searchFromDatabase = async () => {
            try {
                const res = await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/Getdata");
                const allProducts = res.data.products;

                const uniqueProducts = [];
                allProducts.forEach(product => {
                    const desc = product.description.toLowerCase();
                    if (filteredWords.some(word => desc.includes(word))) {
                        if (!uniqueProducts.find(p => p.id === product.id)) {
                            uniqueProducts.push(product);
                        }
                    }
                });

                setProducts(uniqueProducts);
                setCurrentPage(1); // reset to first page after search
            } catch (err) {
                console.error("Search failed", err);
            }
        };

        searchFromDatabase();
    }, [searchFilter]);




    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="displayDataContainer">
            {products.length != 0 && (
                <div className='displayDataDiv'>
                    {
                        currentProducts.map((element, index) => (
                            <Tile key={index} element={element} index={index} onTileHover={onTileHover} onTileLeave={onTileLeave} hoveredTileIndex={hoveredTileIndex} />
                        ))
                    }
                </div>
            )}
            {products.length == 0 && (
                <div className='displayDataDiv'>
                    <h1>No product found!</h1>
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
};

export default DisplayData;
