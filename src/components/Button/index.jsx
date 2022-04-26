import { Container } from "./styles"

const Button = ({children, backgroundColor, color, type, ...rest}) => {
    return(
        <Container 
            backgroundColor={backgroundColor} 
            color={color}
            type={type}
            {...rest}
            >{children}
        </Container>

    )
}
export default Button