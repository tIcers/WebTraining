import React from 'react'
import './Track.css'
function Track({track, onAddTrack}){
  const handleAddTrack = () => {
    onAddTrack(track)
  }
  return (
   <div className='track-card'>
      <h4>{track.name}</h4>
 <div className="track-details">
        <p>{track.artist}</p>
        <p>{track.album}</p>
    </div> 
      <button onClick={handleAddTrack}>Add</button>
    </div>
  )
}

export default Track
