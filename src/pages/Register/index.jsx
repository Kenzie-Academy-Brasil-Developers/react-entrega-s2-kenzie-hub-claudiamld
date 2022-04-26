import Header from "../../components/Header"
import {Container} from './styles'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Button from '../../components/Button'

const Register = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Senhas não correspondentes!").required("Campo obrigatório!")
    })

    const {register, handleSubmit, formState:{errors}, } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        console.log(data)
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
                    name="password"
                    icon={HiOutlineMail}
                    label="Senha"
                    placeholder='Digite sua senha'
                    error={errors.password?.message}
                />
                <Input 
                    register={register}
                    name="passwordConfirm"
                    icon={RiLockPasswordLine}
                    label="Confirmar Senha"
                    placeholder='Digite novamente sua senha'
                    error={errors.passwordConfirm?.message} 
                />
                <Button color="var(--violet)" backgroundColor="var(--pink)">Cadastrar</Button>
            </form>
        </Container>
    )
}
export default Register