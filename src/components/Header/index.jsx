import { Container } from "./styles"
import Logo from '../../assets/Logo.png'

const Header = () => {
    return(
        <Container>
            <img src={Logo} alt="logo-kenzie"></img>
            <button>Voltar</button>
        </Container>
    )
}
export default Header