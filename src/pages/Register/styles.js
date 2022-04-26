import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img{
        width: 150px;
    }

    form{
        background-color: var(--darkgrey);
        height: 70vh;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            margin: 20px 0;
        }
    }
`