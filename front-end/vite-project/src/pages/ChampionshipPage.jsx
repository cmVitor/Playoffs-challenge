import React from 'react'
import { useParams } from "react-router-dom";

const ChampionshipPage = () => {
    const { name } = useParams();
  return (
    <div>
      <h1>Aqui aparecerá o campeonato {name}</h1>
    </div>
  )
}

export default ChampionshipPage
