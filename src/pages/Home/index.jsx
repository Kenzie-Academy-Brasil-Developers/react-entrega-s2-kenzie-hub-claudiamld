import { useState } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router-dom"
import Header from "../../components/Header"
import { Container, Content, InfoUserContainer, Main, SkillsContainer } from "./styles"

const Home = ({authenticated}) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@kenzieHub:token")) || "")
    const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")))
    const [skills, setSkills] = useState([])

    const {register, handleSubmit} = useForm()

    if(!authenticated){
        return <Redirect to="/" />
    }

    return(
        <Container>
            <Header />
            <InfoUserContainer>
                <h1>Olá, {user.name}!</h1>
                <h4>{user.course_module}</h4>
            </InfoUserContainer>
            <Content>
                <div>
                    <h2>Tecnologias</h2>
                    <button>+</button>
                </div>
                <SkillsContainer>

                </SkillsContainer>
            </Content>
        </Container>
    )
}
export default Home