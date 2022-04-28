import { Container } from "./styles"
import TrashCan from '../../assets/trash.svg'

const Card = ({techName, level, deleteSkill}) => {
    return(
        <Container>
                <h3>{techName}</h3>
                <p>{level}</p>
                <button onClick={deleteSkill}><img src={TrashCan} alt="Remover tecnologia" /></button>
        </Container>
    )
}
export default Card