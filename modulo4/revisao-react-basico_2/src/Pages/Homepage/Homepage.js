
import { Header } from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import { HomePageContainer } from './style'
import { useState } from 'react'

export function Homepage (props) {

    const { characters } = props

    //const { image, name, species } = props.states    
    //const { handleInputImage, handleInputName, handleInputSpecies } = props.handlers
    const { image, name, species } = props
    const { handleInputImage, handleInputName, handleInputSpecies } = props


    const { addCharacter } = props

    const renderList = characters.map (char => {

        return (
            <Card key = {char.id}
                image={char.image}
                name={char.name}
                species={char.species}
            />
        )

    })

    return (

        <HomePageContainer>

            <Header/>
            
                <form> 
                    <label htmlFor="image">Imagem: </label>
                    <input 
                    type="text" 
                    id="image"
                    onChange={handleInputImage}
                    value={image}
                    />

                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={handleInputName}
                    value={name}
                    />

                    <label htmlFor="species">Espécie: </label>
                    <input 
                    type="text" 
                    id = "species"
                    onChange={handleInputSpecies}
                    value={species}
                    />

                    <button onClick={addCharacter}>Criar</button>

                </form>

                {renderList}

        </HomePageContainer>

    )

}