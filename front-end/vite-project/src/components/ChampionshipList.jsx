import React from 'react'
import SingleChampionship from './SingleChampionship'
import { useState, useEffect } from 'react'

const ChampionshipList = () => {

    const [championships, setChampionships] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/campeonatos') // Altere a URL conforme seu backend
            .then(response => response.json())
            .then(data => setChampionships(data))
            .catch(error => console.error('Erro ao buscar campeonatos:', error));
    }, []);


    return (
        <div className='championship-list'>
            <h2>Campeonatos em andamento</h2>
            <div className='championship-container'>

                {championships.map((champ) => (
                    <SingleChampionship
                        key={champ.id}
                        logo={champ.logo}
                        name={champ.name}
                        colorClass={champ.colorClass}
                    />
                ))}

            </div>
        </div>
    )
}

export default ChampionshipList
