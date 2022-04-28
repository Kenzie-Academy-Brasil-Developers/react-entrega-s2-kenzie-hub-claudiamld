import styled, {css} from 'styled-components'

export const Container = styled.div`
    text-align: left;
    width: 90%;
    div{
        margin-bottom: 10px;
        font-size: 12px;
    }
        span{
            color: var(--red);
        }
`

export const InputContainer = styled.div`
    background: var(--mediumgrey);
    border-radius: 4px;
    color: var(--vanilla);
    padding: 0.9rem;
    width: 100%;
    display: flex;
    transition: 0.5s;
    border: 1px solid var(--mediumgrey);

    ${props => props.isErrored && css`
        border-color: var(--red);
        svg{
            color: var(--red);
        }
    `}

    input{
        background-color: transparent;
        align-items: center;
        width: 190px;
        flex: 1;
        border: 0;
        color: var(--vanilla);
        &::placeholder{
            color: var(--softgrey);
            font-size: 16px;
        }
    }

    svg{
        margin-right: 16px;
        margin-bottom: 1px;
    }
`