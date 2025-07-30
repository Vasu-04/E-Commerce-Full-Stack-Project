import React from 'react'
import "./Tile.css"
const Tile = ({ element, index }) => {
    return (
        <>
            <div className='tileDiv' key={index}>
                <div className='tileDivImage'>
                    <img src={element.image} />
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

        </>
    )
}

export default Tile
