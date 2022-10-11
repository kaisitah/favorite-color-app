// import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar.jsx';
// import Button from './components/Button.jsx';
// import List from './components/List';
import FavoriteColor from './components/FavoriteColor';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Searchbar />
      <header className="App-header">
        <h2>Choose your favorite color</h2>
        <FavoriteColor /> 
        <p></p>
        </header>
    </div>
  );
}

export default App;
