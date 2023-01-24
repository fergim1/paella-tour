import { 
    HomeContainer,
    HomeContent,
    HomeText,
    HomeTextAlicante,
    HomeButton,
    HomeBackground,
 } from "../../styles/home";

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";


const textSection = {
    english: {
        subtitle: 'A delicious way to discover'
    },
    spanish: {
        subtitle: 'Un delicioso camino para descubrir'
    }
}

const Home = () => {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textSection)

return (
    <HomeContainer id='Home'>
        <HomeBackground >
        </HomeBackground>
        <HomeContent>
            <HomeText variant="subtitle">
                { text.subtitle }
                <HomeTextAlicante variant='span'>
                <br></br>
                Alicante
                </HomeTextAlicante>
            </HomeText>
            <HomeButton variant="contained" endIcon={<ArrowDropDownCircleIcon />}>
                See itinerary
            </HomeButton>
        </HomeContent>

    </HomeContainer>
)
}

export { Home }