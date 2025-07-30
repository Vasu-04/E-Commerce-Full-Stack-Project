import React, { useState } from 'react'
import { useEffect } from 'react'
import "./DisplayData.css"
import axios from 'axios'
import Tile from './Tile'
const DisplayData = ({categoryFilter}) => {
    // const [category,setcategory] = useState("")
    const [products, setproducts] = useState([])
    const getData = async ()=>{
        await axios.get("http://localhost:3000/Getdata")
        .then((res)=>{
            setproducts(res.data.products)
            console.log(res,"in line 10 displaydata.jsx")
        })
        .catch((err)=>{
            console.log(err,"in line 13 displaydata.jsx")
        })
    }
    const getAllCategoryData = async ()=>{
        console.log("displaydataline20",categoryFilter)
        await axios.get("http://localhost:3000/Getdata/AllCategoryData",{categoryFilter:categoryFilter})
        .then((res)=>{
            setproducts(res.data.products)
            console.log(res,"in line 23 displaydata.jsx")
        })
        .catch((err)=>{
            console.log(err,"in line 26 displaydata.jsx")
        })
    }
    useEffect(() => {
        if(categoryFilter === "") getData()
        else getAllCategoryData()
    //   return () => {
    //     second
    //   }
    }, [categoryFilter])
    
  return (
    <div className='displayDataDiv'>
      {
        products.map((element,index)=>{
            return <Tile element={element} index={index} key={index}/>
        })
      }
    </div>
  )
}

export default DisplayData
