import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 38px;
        color: var(--pink);
    }

    .btnPlace{
        display: flex;
        flex-direction: row;
        width: 80vw;
        margin-top: 30px;
    }

    @media screen and (min-width: 768px){
        .btnPlace{
            width: 40vw;
        }

        button + button{
            margin-left: 20px
        }
    }
`