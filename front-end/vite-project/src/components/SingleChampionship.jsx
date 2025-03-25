import React from 'react'

const SingleChampionship = ({ logo, name, colorClass }) => {
    return (
        <div className={`single-championship ${colorClass}`}>

            <img src={logo} alt={`${name} logo`} className='single-championship__logo' />
            <h3 className="championship-name">{name}</h3>
            <div>
                <button>☆</button>
                <button>↗</button>
            </div>
        </div>
    );
}

export default SingleChampionship
