import React from 'react'
import './PlaylistTrack.css'
function PlaylistTrack({track,onRemoveTrack}){
  const handleRemoveTrack = () => {
    onRemoveTrack(track)
  }

  return (
    <div className='playlist-track'>
      <h3>{track.name}</h3>
      <div className='playlist-details'>
      <p>{track.artist} - {track.artist}</p>
      </div>
      <div>
        <button onClick={handleRemoveTrack}>-</button>
      </div>
    </div>
  )
}

export default PlaylistTrack
