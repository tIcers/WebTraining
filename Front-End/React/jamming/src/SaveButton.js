import React from 'react'
import './SaveButton.css'

function SaveButton({playlist = [], setPlaylist}){
  const handleSaveToSpotify = () => {
    const trackURIs = playlist.map((track) => track.uri)
    setPlaylist([])
  }


  return (
    <div className='save-button'>
      <span onClick={handleSaveToSpotify} >Save to Spotify</span>
    </div>
  )
}

export default SaveButton
