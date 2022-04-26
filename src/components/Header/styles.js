import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
        background-color: var(--darkgrey);
        font-size: 12px;
        color: var(--vanilla);
        border-radius: 4px;
        border: none;
        width: 4rem;
        height: 1.5rem;
    }
`