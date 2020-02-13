import React from 'react';
import avengers from './avengersData'
import { Link } from 'react-router-dom';


const AvengersList = (props) => {
    return (
      
      <div className="posts-container-wrapper">
        {avengers.map((character,index)=>{
            return <Link key={index} to={`/avengers/${character.id}`}>
            <h3>{character.name}</h3>
          </Link>
            })}
            
      </div>
      
    );
  };
  
  
  export default AvengersList;
