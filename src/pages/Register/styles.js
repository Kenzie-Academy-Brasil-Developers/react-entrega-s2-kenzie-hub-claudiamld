import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100vh; */
    /* width: 100vw; */
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    form{
        background-color: var(--darkgrey);
        /* max-height: 90vh; */
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        padding-bottom: 10px;
        margin-bottom: 20px;

        h1{
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            margin: 20px 0;
        }
        
        p{
            font-size: 12px;
            color: var(--softgrey);
            margin-bottom: 20px;
        }
        
        label{
            font-size: 12px;
            margin-bottom: 10px;
            align-self: flex-start;
            margin-left: 20px;
        }

        select{
            background: var(--mediumgrey);
            border-radius: 4px;
            color: var(--vanilla);
            padding: 0.9rem;
            width: 90%;
            display: flex;
            border: 1px solid var(--mediumgrey);
            margin-bottom: 10px;
        }
    }

    @media screen and (min-width: 768px){
        form{
            width: 350px;
            margin-bottom: 30px;
        }
    }
`