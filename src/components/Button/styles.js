import styled from 'styled-components'

export const Container = styled.button`
    width: 80vw;
    font-size: 16px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    height: 45px;
    border-radius: 5px;
    border: 1px solid var(--black);
    margin: 5px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    transition: 0.2s;
`