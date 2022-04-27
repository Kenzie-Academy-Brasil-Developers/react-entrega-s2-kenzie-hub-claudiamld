import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 150px;
    }

    form{
        background-color: var(--darkgrey);
        height: 70vh;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        h1{
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            margin: 20px 0;
        }
    }
`