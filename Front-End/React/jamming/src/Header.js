import React from 'react'


function Header(){
  const letterStyle = {
      color:'purple'
  }
  return (
    <header  >
      <h1>Ja<span style={letterStyle}>mm</span>ing</h1>
    </header>
  )
}

export default Header
