import React from 'react'
import PlaylistTrack from './PlaylistTrack'
function Playlist({tracks, onRemoveTrack}){
  return (
    <div>
      <h2>Playlist</h2>
      {tracks.map((track)=> (
        <PlaylistTrack key={track.id} track={track} onRemoveTrack={ onRemoveTrack }/>
      ))}
     </div>
  )
}

export default Playlist
