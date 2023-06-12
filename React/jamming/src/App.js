// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { SearchBar ,SearchButton} from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist'
import './content.css'
import SaveButton from './SaveButton';

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
          <SaveButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
