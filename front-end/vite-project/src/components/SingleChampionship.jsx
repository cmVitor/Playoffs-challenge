import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SingleChampionship = ({ logo, name, colorClass }) => {
    return (
        <Link to={`/campeonatos/${name}`} className={`single-championship ${colorClass}`}>
        
            <img src={logo} alt={`${name} logo`} className='single-championship__logo' />
            <h3 className="championship-name">{name}</h3>
            <div className='championship-buttons'>
                <button><FontAwesomeIcon className='star-button' icon={faStar} /></button>
                <button><FontAwesomeIcon className='share-button' icon={faArrowUpFromBracket} /></button>
            </div>
        </Link>
    );
}

export default SingleChampionship
