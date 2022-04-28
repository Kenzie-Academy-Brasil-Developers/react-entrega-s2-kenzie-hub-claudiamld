import Header from "../../components/Header"
import {Container} from './styles'
import {HiOutlineMail} from 'react-icons/hi'
// import {RiLockPasswordLine} from 'react-icons/ri'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Button from '../../components/Button'
import api from '../../services/api'
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { Redirect } from "react-router-dom"

const Register = ({authenticated}) => {

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState:{errors}, } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = ({name, email, password, course_module, bio, contact}) => {
        const user = {name, email, password, course_module, bio, contact}

        api
        .post("/users", user)
        .then(() => {
            toast.success("Conta criada com sucesso!")
            return history.push("/login")
        })
        .catch(toast.error("Algo deu errado! Tente novamente!"))
    }

    if(authenticated){
        return <Redirect to="/dashboard" />
    }

    return(
        <Container>
            <Header />
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <Input 
                    register={register}
                    name="name"
                    icon={HiOutlineMail}
                    label="Nome"
                    placeholder='Digite seu nome'
                    error={errors.name?.message}
                />
                <Input 
                    register={register}
                    name="email"
                    icon={HiOutlineMail}
                    label="Email"
                    placeholder='Digite seu email'
                    error={errors.email?.message}
                />
                <Input 
                    register={register}
                    name="bio"
                    icon={HiOutlineMail}
                    label="Biografia"
                    placeholder='Digite seu nome'
                    error={errors.bio?.message}
                />
                <Input 
                    register={register}
                    name="contact"
                    icon={HiOutlineMail}
                    label="Contato"
                    placeholder='Digite seu nome'
                    error={errors.contact?.message}
                />
                <Input 
                    register={register}
                    name="password"
                    icon={HiOutlineMail}
                    label="Senha"
                    placeholder='Digite sua senha'
                    error={errors.password?.message}
                />
                <label>Selecionar módulo</label>
                <select {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <Button type="submit" color="var(--vanilla)" backgroundColor="var(--violet)">Cadastrar</Button>
            </form>
        </Container>
    )
}
export default Register