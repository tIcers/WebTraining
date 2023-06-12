import React from 'react'
import Track from './Track.js'
import './Track.css' 
function TrackList({tracks, onAddTrack}){
  return (
    <div className='track-list'>
      {tracks.map((track) => {
        return <Track key={track.id} track={track} onAddTrack={onAddTrack}/>
      })}
    </div>
  )
}


export default TrackList
