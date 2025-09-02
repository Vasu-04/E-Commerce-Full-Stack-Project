import React from 'react'
import "./Tile.css"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Tile = ({ element, index, onTileHover, onTileLeave, hoveredTileIndex }) => {
    const isHovered = hoveredTileIndex === index;
    const [cartText, setcartText] = useState("Add to Cart")
    const productId = element._id
    // const Navigate = useNavigate()
    // const navigateToCartPage = () => {
    //     Navigate("/cartPage",{ state: {userId} })
    // }
    const onAddCartClick = async () => {
        setcartText("Added to Cart")
        await axios.post(`https://e-commerce-full-stack-project-backend.onrender.com/Home/addToCart/${productId}`)
            .then((res) => {
                console.log(res, "from line 11 tile.jsx")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getCartTextFromData = async () => {
    try {
        const res = await axios.get(`https://e-commerce-full-stack-project-backend.onrender.com/Cart/getCartProductById/${productId}`);
        if (res.data.cartContainsProduct === true) {
            setcartText("Added to Cart");
        } else {
            setcartText("Add to Cart");
        }
    } catch (err) {
        console.log(err);
        setcartText("Add to Cart"); // fallback
    }
};

    useEffect(() => {
    if (productId) getCartTextFromData();
}, [productId]);


    return (
        <div
            className='tileDiv'
            onMouseEnter={() => onTileHover(index)}
            onMouseLeave={onTileLeave}
            style={{
                zIndex: isHovered ? 1002 : 1,
                filter: hoveredTileIndex !== null && !isHovered ? "blur(2px)" : "none",
                transition: "filter 0.3s ease, z-index 0.3s ease, boxShadow 0.3s ease"
            }}
        >
            <div className='tileDivImage'>
                <p className="categoryTag">
                    {element.category.charAt(0).toUpperCase() + element.category.slice(1).toLowerCase()}
                </p>
                <img src={element.image} alt={element.title} />
            </div>
            <div className='tileDivContent'>
                <h3>{element.title}</h3>
                <div className='ratingPriceDiv'>
                    <div className='ratingBar'>
                        <i className="ri-star-fill"></i>
                        <p>{element.rating}</p>
                        <p>({element.review} Reviews)</p>
                    </div>
                    <h3>${element.price}</h3>
                </div>
                <div className="buttonBar">
                    <button className='cartButton' onClick={() => { onAddCartClick() }} style={cartText == "Added to Cart" ? { pointerEvents: "none" } : {}}>{cartText}</button>
                    <button className='buyButton'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};
export default Tile