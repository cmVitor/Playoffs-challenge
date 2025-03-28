import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Campeonatos from './pages/Campeonatos';
import Home from './pages/Home';
import ChampionshipPage from './pages/ChampionshipPage.jsx';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element= { <Home/> }> </Route>
        <Route path='/login' element= {<Login />}> </Route>
        <Route path='/campeonatos' element= {<Campeonatos />}> </Route>
        <Route path='/campeonatos/:name' element= {<ChampionshipPage />}> </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
