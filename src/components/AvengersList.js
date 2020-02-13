import React from 'react';
import avengers from './avengersData'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Linky = styled(Link)`
text-decoration:none;
`

const AvengersList = (props) => {
    return (
      
      <div className="posts-container-wrapper">
        {avengers.map((character,index)=>{
            return <Linky key={index} to={`/avengers/${character.id}`}>
            <h3>{character.name}</h3>
          </Linky>
            })}
            
      </div>
      
    );
  };
  
  
  export default AvengersList;
