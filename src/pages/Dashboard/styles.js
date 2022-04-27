import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100vw;
    
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const InfoUserContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid var(--mediumgrey);
    border-bottom: 1px solid var(--mediumgrey);
    padding: 0px 20px;
    height: 100px;

    h1{
        font-size: 18px;
        margin-bottom: 10px;
    }

    h4{
        font-size: 12px;
        font-weight: 600;
        color: var(--softgrey);
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 95vw;
    }
`

export const Content = styled.div`
    max-width: 100vw;

    .addTechs{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 20px;
        
        h2{
            font-size: 16px;
        }
        button{
            background-color: var(--mediumgrey);
            color: var(--white);
            font-weight: bold;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            width: 25px;
            height: 25px;
        }
    }
    >div{
        display: flex;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 768px){
        max-width: 80vw;
        width: 80vw;
        justify-content: center;
        align-items: center;

        .addTechs{
            justify-content: space-between;
        }
    }
`

export const SkillsContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    margin-left: 15px;
    margin-bottom: 20px;
    padding: 10px 0px;
    background-color: var(--darkgrey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;

    @media screen and (min-width: 768px){
        margin-bottom: 50px;
        padding: 20px 0px;
    }
`