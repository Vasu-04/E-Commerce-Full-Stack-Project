import React from 'react'
import "./NavBar.css"
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const NavBar = ({ userId, onSearchClick ,pageHeading}) => {
    const Navigate = useNavigate();
    const onLogoClick = () => {
        Navigate("/HomePage")
    }
    const [cartPageStyle, setcartPageStyle] = useState({ fontSize: "9px", color: "gray" })
    const [shopPageStyle, setshopPageStyle] = useState({ fontSize: "12px", color: "black", textShadow: "2px 2px 10px black", padding: "5px", fontWeight: "400" })
    const [letter, setletter] = useState("");
    const [theme, setTheme] = useState("light");
    // const [pageHead, setpageHead] = useState({pageHeading})
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

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme); // state managed either in context or passed as props
        await axios.post(`https://e-commerce-full-stack-project-backend.onrender.com/Home/theme/${userId}`, { theme: newTheme });
    };

    useEffect(() => {
        if (pageHeading === "cart") {
            setcartPageStyle({ fontSize: "12px", color: "black", textShadow: "1px 1px 10px black", padding: "5px", fontWeight: "500", letterSpacing:"1px" })
            setshopPageStyle({ fontSize: "9px", color: "gray" })
        }
        else if (pageHeading === "shop") {
            setshopPageStyle({ fontSize: "12px", color: "black", textShadow: "1px 1px 3px black", padding: "5px", fontWeight: "500", letterSpacing:"1px"  })
            setcartPageStyle({ fontSize: "9px", color: "gray" })
        }
    }, [pageHeading])


    return (
        <div className='navBarDiv'>
            <div className="left" onClick={onLogoClick}>
                <i class="ri-centos-fill"></i>
                <h1>Stuffsus</h1>
            </div>
            <div className="middle">
                <p className='cart' style={cartPageStyle} onClick={() => Navigate("/cartPage", { state: {userId} })}>Cart</p>
                <p className='shop' style={shopPageStyle} onClick={() => Navigate("/HomePage", { state: {userId} })}>Shop</p>
            </div>
            <div className="right">
                <div className='navItems'>
                    <i className="ri-search-line" onClick={onSearchClick}></i>
                </div>
                {/* <div className='navItems'>
                    <i className="ri-shopping-cart-line" onClick={() => Navigate("/cartPage")}></i>
                </div> */}
                <div className='navItemsInitial'>
                    {letter}
                    <div className='logOutDiv'>
                        <div>Create Profile</div>
                        <div onClick={toggleTheme}>Appearance</div>
                        <div onClick={() => Navigate("/SignInPage")}>Logout</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar
