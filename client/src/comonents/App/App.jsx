import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './App.css';

import Game from '../Game/Game';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';


function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
    <Route path="/home" element={<Home />} />
      

    <Route path="/game" element={<Game />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
