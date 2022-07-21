import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './App.css';

import Game from '../Game/Game';

import NavBar from '../NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

      

    <Route path="/game" element={<Game />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
