import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Game from '../Game/Game';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      

    <Route path="/game" element={<Game />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
