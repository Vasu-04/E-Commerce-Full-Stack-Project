import React from 'react'
import "./NavBar.css"
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import { useState, useEffect } from 'react'
const NavBar = ({ userId, onSearchClick }) => {
    const [letter, setletter] = useState("")
    useEffect(() => {
        const getInitial = async () => {
            try {
                const res = await axios.get(`https://e-commerce-full-stack-project-backend.onrender.com/Home/${userId}`)
                
                setletter(res.data.initial.toUpperCase());
            } catch (err) {
                console.error("Error fetching user initial:", err);
            }
        };
        getInitial();
    }, [userId]);


    return (
        <div className='navBarDiv'>
            <div className="left">
                <i className="ri-bubble-chart-fill"></i>
                <h1>Stuffsus</h1>
            </div>
            <div className="right">
                <div className='navItems'>
                    <i className="ri-search-line" onClick={onSearchClick}></i>
                </div>
                <div className='navItems'>
                    <i className="ri-shopping-cart-line"></i>
                </div>
                <div className='navItemsInitial'>
                    {letter}
                    <div className='logOutDiv'>
                        <button>Create Profile</button>
                        <button>Appearance</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar
