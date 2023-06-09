import React from 'react'
import './SearchBar.css'


function SearchBar(){
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search Music'/>
    </div>
  )
}

function SearchButton(){
  return (
    <div className='search-button'>
      <span type='submit'>Search</span>
    </div>
  )
}

export {SearchBar,SearchButton }
