import React from 'react';
import styled from 'styled-components';



const Quotes = ({ quote,  onUpdate }) => {
    
    return (
    
        <>
            
            <Quote>{quote}</Quote>


    <input  type="button" onClick={onUpdate}> bring me knowledge...</input>



</>




)




}


const Quote = styled.div`
display:flex;

`

export { Quotes };