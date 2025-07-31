import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./HomePage.css"
import NavBar from '../components/NavBar'
import ProductSidebarAllproduct from '../components/ProductSidebarAllproduct';
import ProductSidebarNewarrival from '../components/ProductSidebarNewarrival';
import SearchBar from '../components/SearchBar';
import DisplayData from '../components/DisplayData';
const HomePage = () => {
    const [scrollableWindowPaddingTop, setscrollableWindowPaddingTop] = useState("180px")
    const location = useLocation();

    const [categoryFilter, setcategoryFilter] = useState("")
    const onCategoryClick = (cat)=>{
        console.log(cat)
        setcategoryFilter(cat)
    }
    const userId = location?.state.userId;
    // console.log("this is user id", userId)
    const listOfImage = [
        "https://ik.imagekit.io/dv0jyi1v0/HomePageBgImage.jpg?updatedAt=1753955653022",
        "https://ik.imagekit.io/dv0jyi1v0/HomePageBgImage2.png?updatedAt=1753955653280",
        "https://ik.imagekit.io/dv0jyi1v0/HomePageBgImage3.jpg?updatedAt=1753955653264",
        "https://ik.imagekit.io/dv0jyi1v0/HomePageBgImage4.jpg?updatedAt=1753955653139",
        "https://ik.imagekit.io/dv0jyi1v0/HomePageBgImage5.jpg?updatedAt=1753955653344"
    ]
    const [BgImage, setBgImage] = useState(listOfImage[0])

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % listOfImage.length;
            setBgImage(listOfImage[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bgImage' style={{ backgroundImage: `url(${BgImage})` }}>
            <div className='mainContent'>
                <NavBar userId={userId} onSearchClick={() => setscrollableWindowPaddingTop("0px")}/>
                <div className='scrollableWindow' style={{paddingTop : scrollableWindowPaddingTop}}>
                    <div className='bottomDiv'>
                        <div className='divWithBgTransparent'>
                            SHOP
                        </div>
                        <div className='actualContentDiv'>
                            <div className='searchBar'>
                                <h2>Give All You Need</h2>
                                <SearchBar/>
                            </div>
                            <div className='actualContent1' >
                                <div className="leftCategoryDiv">
                                    <div className='categoryHeading'><h3>Category</h3></div>
                                    <ProductSidebarAllproduct onCategoryClick = {onCategoryClick}/>
                                    <ProductSidebarNewarrival />
                                </div>
                                <div className="rightContentDiv">
                                    <DisplayData categoryFilter={categoryFilter}/>
                                </div>
                            </div>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>

                </div>
                {/* <h1 >hello</h1> */}
            </div>
        </div>
    )
}

export default HomePage
