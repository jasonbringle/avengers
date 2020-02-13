import React from 'react';
import avengersData from './avengersData'
import styled from 'styled-components'

const CharInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
width: 100%;
`
const Card = styled.div`
width: 75%;
padding: 1rem;
border: 3px solid black;

`
const Picture = styled.img`
width:100%;
`
const MovieList = styled.div`
text-align:left;
width:60%;
`

function AvengerPage(props) {
  const avenger = avengersData.find(avenger => props.match.params.id === `${avenger.id}`);
  return (
    <CharInfo>
      <Card>
    <h1>{avenger.name}</h1>
    <p>{avenger.description}</p>
    <MovieList>
      <ul>{avenger.movies.map((movie,index)=>{
        return <li key={index}>{movie}</li>
      })}</ul>
    </MovieList>  
    <Picture src={avenger.img}/>
    </Card>
    </CharInfo>
  );
}
  
  export default AvengerPage;
