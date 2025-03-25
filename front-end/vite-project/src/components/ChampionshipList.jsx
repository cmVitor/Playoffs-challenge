import React from 'react'
import SingleChampionship from './SingleChampionship'
import championsleage from '../assets/images/championsleague.png'
import copadobrasil from '../assets/images/copadobrasil.png'

const ChampionshipList = () => {

    const championships = [
        { id: 1, name: 'Champions League', logo: championsleage, colorClass: 'champions-league' },
        { id: 2, name: 'Copa do Brasil', logo: copadobrasil, colorClass: 'copa-brasil' }

    ];


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
