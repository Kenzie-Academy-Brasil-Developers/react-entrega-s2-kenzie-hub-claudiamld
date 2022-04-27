import { Container } from "./styles"
import Input from '../Input'
import Button from "../Button"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import {toast, ToastContainer}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
// import {VscSymbolEvent} from 'react-icons/vsc'

const Modal = ({token, skills, setSkills, setShouldOpenModal}) => {


    const {register, handleSubmit} = useForm()

    const onSubmitFunction = (data) => {
        api
        .post("/users/techs", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => setSkills([...skills, data]))
        .then(toast.success("Tecnologia adicionada"))
    }


    return(
        <Container>
            {/* <ToastContainer /> */}
            <div>
                <h1>Cadastrar tecnologia</h1>
                <button onClick={() => setShouldOpenModal(false)}>X</button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                
                <Input 
                    register={register}
                    label="Nome"
                    name="title" 
                    placeholder="Nova tecnologia" 
                />
                <select {...register("status")} >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <Button type="submit" backgroundColor="var(--pink)" color="var(--white)">Adicionar</Button>
            </form>
        </Container>
    )
}
export default Modal