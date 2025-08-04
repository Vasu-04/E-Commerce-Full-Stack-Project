import React from 'react'
import "./Tile.css"



const Tile = ({ element, index, onTileHover, onTileLeave, hoveredTileIndex }) => {
    const isHovered = hoveredTileIndex === index;

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
                    <button className='cartButton'>Add to Cart</button>
                    <button className='buyButton'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};
export default Tile