import React from 'react'
import { useState } from 'react'
import "./SearchBar.css"
const SearchBar = ({onSearchClick}) => {
  const [inputValue, setinputValue] = useState("")
  const onSearchInputClick = (sentence)=>{
    onSearchClick(inputValue)
    setinputValue("")
  }
  return (
    <div className='searchBarDiv'>
      <i className="ri-search-line"></i>
      <input value={inputValue} placeholder='Search on Stuffsus' onChange={(e)=>{setinputValue(e.target.value)}}></input>
      <button onClick={()=>{onSearchInputClick()}}>Search</button>
    </div>
  )
}

export default SearchBar
