import './App.css';
import NavBar from './Components/Universals/NavBar';
import HomePage from './Components/Home Things/HomePage';
import {Potential, Profile} from './Components/Users'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
     
      <Potential/>
      <Profile/>
      <HomePage />
    </div>
  );
}

export default App;
