import styled, {css} from 'styled-components'

export const Container = styled.div`
    text-align: left;
    div{
        span{
            color: var(--red);
        }
    }
`

export const InputContainer = styled.div`
    background: var(--mediumgrey);
    border-radius: 4px;
    border: 2px solid var(--vanilla);
    color: var(--vanilla);
    padding: 1rem;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    transition: 0.4s;

    ${props => props.isErrored && css`
        border-color: var(--red);
        svg{
            color: var(--red);
        }
    `}

    input{
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--vanilla);
        &::placeholder{
            color: var(--softgrey);
        }
    }

    svg{
        margin-right: 16px;
    }
`