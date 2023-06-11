// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { SearchBar ,SearchButton} from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist'
import './content.css'

function App() {
  const headerStyle = {
    backgroundColor:'purple'
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
          <SearchResults />
          </div>
        <div className='playlist'>
          <Playlist />
        </div>
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
