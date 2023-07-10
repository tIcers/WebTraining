import React , {useState } from 'react'
import PlaylistTrack from './PlaylistTrack'

function Playlist({tracks, onRemoveTrack}){

  const [playlistName, setPlaylistName] = useState('My Playlist')

  function handlePlaylistNameChange(event){
    setPlaylistName(event.target.value)
  }

  function handlePlaylistNameSubmit(event){
    event.preventDefault()
  }

   return (
    <div>
      <h2>Playlist</h2>
      <form onSubmit={handlePlaylistNameSubmit}>
        <input type="text" value={playlistName} onChange={handlePlaylistNameChange}/>
        <button type='submit'>Update Playlist Name</button>
      </form>
      {tracks.map((track)=> (
        <PlaylistTrack key={track.id} track={track} onRemoveTrack={ onRemoveTrack }/>
      ))}
     </div>
  )
}

export default Playlist
