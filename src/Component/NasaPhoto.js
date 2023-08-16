import React  from 'react';
import styled from 'styled-components';


const StyledNasaPhoto = styled.div `
  border: 1px solid grey;
  border-radius: 10px;
  padding : 1.5rem;

  h3 {
    color : ${props => props.$color};
    font-size: 2.8em;
    margin: 0 0 1rem 0;
  }

  p{
    margin: 0 0 1.5rem 0;
     first-line {
      font-size: 1.5em
    }
  }
`
  const NasaPhoto = (props) => {
    return (
        <StyledNasaPhoto $color = "Purple" className = "nasa-photo-wrapper" >
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src = {props.photo.hdurl} alt= 'nasaPhoto'/>
            <p>{props.photo.explanation}</p>
        </StyledNasaPhoto>
    )
  }
  export default NasaPhoto 
  