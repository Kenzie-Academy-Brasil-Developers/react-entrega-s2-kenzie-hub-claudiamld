import {Container} from './styles'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import Logo from '../../assets/Logo.png'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Button from '../../components/Button'


const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!")
    })

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        console.log(data);
    }

    return(
        <Container>
            <img src={Logo} alt="logo-kenzie" />
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Login</h1>
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
                    icon={RiLockPasswordLine}
                    label="Senha"
                    placeholder='Digite sua senha'
                    error={errors.password?.message} 
                />
                <Button color="var(--white)" backgroundColor="var(--pink)">Entrar</Button>
                <p>Ainda não possui uma conta?</p>
                <Button color="var(--vanilla)" backgroundColor="var(--softgrey)">Cadastre-se</Button>
            </form>
        </Container>
    )
}
export default Login