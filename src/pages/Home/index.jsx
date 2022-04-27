import Button from "../../components/Button"
import {Container} from './styles'
import { useHistory } from "react-router-dom"

const Home = () => {

    const history = useHistory()

    const handleRedirect = (path) => {
        return history.push(path)
    }

    return(
        <Container>
            <h1>KenzieHub</h1>
            <div className="btnPlace">
                <Button backgroundColor="var(--pink)" color="var(--white)" onClick={() => handleRedirect("/login")}>Entrar</Button>
                <Button onClick={() => handleRedirect("/register")}>Cadastre-se</Button>
            </div>
        </Container>
    )
}
export default Home