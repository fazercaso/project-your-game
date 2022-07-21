import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
