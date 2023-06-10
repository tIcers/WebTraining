import React from 'react'
import Track from './Track.js'
import './Track.css' 
function TrackList({tracks}){
  return (
    <div className='track-list'>
      {tracks.map((track) => {
        return <Track key={track.id} track={track}/>
      })}
    </div>
  )
}


export default TrackList
