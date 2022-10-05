
import { CardContainer } from "./styles";

function Card(props){

    console.log(props)

    const {image, name, species} = props;

    return (

            <CardContainer>

                <img src={image} alt={name}/>

                <h2> {name} </h2>
                
                <p> {species} </p>

            </CardContainer>
    
        )
}
export default Card;