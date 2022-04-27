import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* z-index: 1; */

    form{
        background-color: var(--darkgrey);
        height: 300px;
        width: 300px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        >div{
            /* display: flex; */
            margin-bottom: 30px;

            h1{
                font-size: 14px;
                
            }
        }
    }

`

export const Title = styled.div`
    
`