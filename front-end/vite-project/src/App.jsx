import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element= { <Home/> }> </Route>
        <Route path='/login' element= {<Login />}> </Route>
        <Route path='/sobre' element= {<Sobre />}> </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
