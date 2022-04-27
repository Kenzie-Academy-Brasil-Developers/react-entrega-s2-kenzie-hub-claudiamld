import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
`
export const InfoUserContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid var(--mediumgrey);
    height: 80px;

    h1{
        font-size: 18px;
    }

    h4{
        font-size: 12px;
        font-weight: normal;
        color: var(--softgrey);
    }
`

export const Content = styled.div`
    width: 100vw;

    >div{
        display: flex;
        justify-content: space-evenly;
    }
`

export const SkillsContainer = styled.div`
    background-color: var(--mediumgrey);
`