import './App.css';
import NavBar from './Components/Universals/NavBar';
import HomePage from './Components/Home Things/HomePage';
import Potential from './Components/Users/Potential'
import Profile from './Components/Users/Profile'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {Switch, Route} from "react-router"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
          {/* <Route path='/me' element={<Profile />} /> */}
          {/* <Route path='/matches' element={<Potential />} /> */}

    </div>
  );
}

export default App;
