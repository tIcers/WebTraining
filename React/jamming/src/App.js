// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { SearchBar ,SearchButton} from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist'
import './content.css'
import SaveButton from './SaveButton';
import React, { useState } from 'react';
import PlaylistTrack from './PlaylistTrack';

function App() {
  const [playlist, setPlaylist] = useState([])
  const headerStyle = {
    backgroundColor:'purple'
  }

  function addTrackToPlayList(track) {
    const isTrackInPlaylist = playlist.find((PlaylistTrack) => PlaylistTrack.id === track.id)

    if(!isTrackInPlaylist) {
      setPlaylist([...playlist, track])
    }
  }

  function removeTrackFromPlaylist(track){
    const updatedPlaylist = playlist.filter((playlistTrack) => playlistTrack.id !== track.id)
    setPlaylist(updatedPlaylist)
  }

  return (
    <div className="App" style={headerStyle}>
      <Header />
      <header className="App-header">
        <div>
          <SearchBar/>
          <SearchButton/>
        </div>
        <div className='content'>
          <div className='Search-results'>
          <SearchResults onAddTrack ={addTrackToPlayList}/>
          </div>
        <div className='playlist'>
          <Playlist tracks={playlist} onRemoveTrack={removeTrackFromPlaylist}/>
          <SaveButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
