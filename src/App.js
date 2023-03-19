import './App.css';
import Button from './Button';
import Search from './Search';
import babyName from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="container">
        <Button arr={babyName} />
      </div>
      <hr className='hr'></hr>
    </div>

  );
}

export default App;
