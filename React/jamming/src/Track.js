import React from 'react'
import './Track.css'
function Track({track}){
  return (
   <div className='track-card'>
      <h3>{track.name}</h3>
 <div className="track-details">
        <p>{track.artist}</p>
        <p>{track.album}</p>
    </div> 
    </div>
  )
}

export default Track
