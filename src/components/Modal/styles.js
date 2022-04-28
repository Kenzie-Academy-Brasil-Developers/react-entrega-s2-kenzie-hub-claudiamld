import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 300px;
    height: 320px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--black);
    background-color: var(--darkgrey);
    position: relative;
    border-radius: 4px;

    .header-modal{
        background-color: var(--mediumgrey);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-radius: 4px;

        h1{
            font-size: 14px;
            margin-left: 15px;
        }

        button{
            background-color: var(--mediumgrey);
            margin-right: 15px;
            border: none;
            color: var(--softgrey);
            font-weight: bold;
            font-size: 16px;
        }
    }

    form{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 10px 0px;

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
`