import React from 'react'
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className='searchBarDiv'>
      <i className="ri-search-line"></i>
      <input placeholder='Search on Stuffsus'></input>
      <button>Search</button>
    </div>
  )
}

export default SearchBar
