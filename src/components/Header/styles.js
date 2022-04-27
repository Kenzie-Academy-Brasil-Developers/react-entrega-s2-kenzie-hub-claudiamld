import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
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
        justify-content: space-around;
        width: 95vw;
    }
`