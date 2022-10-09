// import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar.jsx';
// import Button from './components/Button.jsx';
// import List from './components/List';
import FavoriteColor from './components/FavoriteColor';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Menubar />
      <header className="App-header">
        <h1>Choose your favorite color</h1>
        <FavoriteColor /> 
        <p></p>
        <Timer />
      </header>
    </div>
  );
}

export default App;
