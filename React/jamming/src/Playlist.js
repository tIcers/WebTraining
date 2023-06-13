import React from 'react'
import PlaylistTrack from './PlaylistTrack'
function Playlist({tracks}){
  return (
    <div>
      <h2>Playlist</h2>
      {tracks.map((track)=> (
        <PlaylistTrack key={track.id} track={track}/>
      ))}
     </div>
  )
}

export default Playlist
