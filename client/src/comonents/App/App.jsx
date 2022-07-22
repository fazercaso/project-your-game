
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import './App.css';

import Game from '../Game/Game';
import Question from '../Question/Question';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';

import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>


    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/game" element={<Game />} />
    <Route path="/game/question/:id" element={<Question />} />
    <Route path="/home" element={<Home />} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
