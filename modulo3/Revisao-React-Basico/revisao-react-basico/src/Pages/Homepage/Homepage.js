import HomePageContainer from '../../Pages/Homepage/style'
import { Header } from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'

export function Homepage()
{
    return(

        <HomePageContainer>

            <Header/>
            
            <main>

                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </main>

        </HomePageContainer>

    )

}