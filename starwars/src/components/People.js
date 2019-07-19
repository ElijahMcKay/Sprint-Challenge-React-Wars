import React from "react"; 
import styled from "styled-components"; 

function People(props){
    const StyleDiv = styled.div`
    background: black; 
    width: 40%; 
    padding: 2rem 0; 
    text-align: center; 
    margin: auto; 
    border-radius: 10px; 
    margin-bottom: 2rem; `

    const StyleH1 = styled.h1`
    color: white; 
    font-size: 2rem; 
    `

    const StyleP = styled.p`
    color: white; 
    font-size: 1.5rem; 
    `
    
    return (
        <StyleDiv>
            <StyleH1>
                {props.name}
            </StyleH1>
            <StyleP>
                {props.height}
            </StyleP>
            <StyleP>
                {props.hairColor}
            </StyleP>
            <StyleP>
                {props.gender}
            </StyleP>
        </StyleDiv>
    )
}

export default People; 

