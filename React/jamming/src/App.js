// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { SearchBar ,SearchButton} from './SearchBar';
import TrackList from './Tracklist'
function App() {
  const headerStyle = {
    backgroundColor:'purple'
  }
  const trackList = [
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
    <div className="App" style={headerStyle}>
      <Header />
      <header className="App-header">
        <div>
          <SearchBar/>
          <SearchButton/>
        </div>
        <div>
        <TrackList tracks={trackList}/>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
