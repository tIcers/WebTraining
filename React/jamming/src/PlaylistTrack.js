import React from 'react'

function PlaylistTrack({track, onRemoveTrack}){
  return (
    <div className='playlist-track'>
      <h3>{track.name}</h3>
      <p>{track.artist} - {track.artist}</p>
      <button onClick= {()=> onRemoveTrack(track)}>Remove</button>
    </div>
  )
}

export default PlaylistTrack
