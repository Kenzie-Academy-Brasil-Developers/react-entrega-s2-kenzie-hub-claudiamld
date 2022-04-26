import { Container } from "./styles"
import Logo from '../../assets/Logo.png'
import { useHistory } from "react-router-dom"

const Header = () => {
    const history = useHistory()

    return(
        <Container>
            <img src={Logo} alt="logo-kenzie"></img>
            <button onClick={() => history.push('/')}>Voltar</button>
        </Container>
    )
}
export default Header