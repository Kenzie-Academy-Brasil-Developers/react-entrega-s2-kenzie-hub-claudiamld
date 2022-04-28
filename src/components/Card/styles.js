import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: var(--black);
    border-radius: 4px;

    :hover{
        background-color: var(--mediumgrey);
    }

    h3{
        font-size: 14px;
    }

    p{
       font-size : 12px;
       color: var(--softgrey);
    }

    button{
        background-color: var(--mediumgrey);
        border: none;
        width: 20px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
`
