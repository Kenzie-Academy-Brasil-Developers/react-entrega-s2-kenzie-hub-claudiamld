import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Modal from "../../components/Modal"
import Card from '../../components/Card'
import Header from "../../components/Header"
import { Container, Content, InfoUserContainer, SkillsContainer } from "./styles"
import api from "../../services/api"
import {toast, ToastContainer}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, Redirect } from "react-router-dom"
import Logo from '../../assets/Logo.png'

const Dashboard = ({authenticated, setAuthenticated}) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@kenzieHub:token")) || "")
    const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")))

    const [skills, setSkills] = useState([])
    const [shouldOpenModal, setShouldOpenModal] = useState(false)

    const {register, handleSubmit} = useForm()

    // const renderSkills = () => {
    //     return(
    //         )  
    // }

    const loadSkills = (data) => {
        api
        .get(`users/${user.id}`)
        .then(response => setSkills(response.data.techs))
        // .then(() => renderSkills())
    }

    const history = useHistory();

    const handleRedirect = (path) => {
        localStorage.clear()
        setAuthenticated(false)
        return history.push(path)
    }

    const deleteSkill = (id) => {
        const newArr = skills.filter((skill) => skill.id !== id)

        api
        .delete(`users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => setSkills(newArr))
        .then(toast.success('Tecnologia removida com sucesso!'))
        .then(loadSkills())
    } 

    useEffect(() => {
        loadSkills()
    }, [])

    useEffect(() => {
        console.log(skills);
        // renderSkills()
    }, [skills])

    if(!authenticated){
        return history.push("/")
    } 

    return(
        <Container>
            {/* <Header /> */}
            
            <InfoUserContainer>
                <h1>Olá, {user.name}!</h1>
                <h4>{user.course_module}</h4>
            </InfoUserContainer>
            <Content>
                <div className="addTechs">
                    <h2>Tecnologias</h2>
                    <button onClick={() => setShouldOpenModal(true)}>+</button>
                </div>
                {shouldOpenModal && 
                    (<Modal 
                        token={token} 
                        skills={skills} 
                        setSkills={setSkills} 
                        setShouldOpenModal={setShouldOpenModal} 
                    />)
                }
                <SkillsContainer>
                {/* {renderSkills()} */}
                {/* {console.log(skills)} */}
               { skills.map((skill, index) => (
                <Card 
                    key={index} 
                    id={skill.id} 
                    techName={skill.title} 
                    level={skill.status}
                    deleteSkill={() => deleteSkill(skill.id)}
                />))}
                </SkillsContainer>
            </Content>
            <div className="header">
                <img src={Logo} alt="logo-kenziehub" />
                <button onClick={() => handleRedirect("/")}>Sair</button>
            </div>
            
        </Container>
    )
}
export default Dashboard