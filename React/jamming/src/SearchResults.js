import React from 'react'
import TrackList from './Tracklist'

function SearchResults({tracks, onAddTrack}){

  const searchResults = [
    {
    id:'1',
    name:'song 1',
    artist:'artist 1',
    album:'album 1',
    },
    {
    id:'2',
    name:'song 2',
    artist:'artist 2',
    album:'album 2',
    }
  ]


  return (
    <div>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAddTrack ={onAddTrack}/>
    </div>
  )
}

export default SearchResults
