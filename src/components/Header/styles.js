import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background-color: var(--darkgrey);
        font-size: 12px;
        color: var(--vanilla);
        border-radius: 4px;
        border: none;
        width: 4rem;
        height: 2rem;
    }

    @media screen and (min-width: 768px){
        width: 350px;
    }
`