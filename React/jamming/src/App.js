import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { SearchBar ,SearchButton} from './SearchBar';
function App() {
  const headerStyle = {
    backgroundColor:'purple'
  }
  // const appStyle = {
  //   backgroundColor:
  // }
  return (
    <div className="App" style={headerStyle}>
      <Header />
      <header className="App-header">
        <div>
          <SearchBar/>
          <SearchButton/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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
