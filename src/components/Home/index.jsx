import { 
    HomeContainer,
    HomeContent,
    HomeText,
    HomeTextAlicante,
    HomeButton,
    HomeBackground,
    SmokeWrap,
    SmokeImage1,
    SmokeImage2,
    SmokeImage3,

 } from "../../styles/home";

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

import smoke from '../../../imagenes/smoke.png'
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

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
    const theme = useTheme()
    const moibleOrTablet = useMediaQuery(theme.breakpoints.down('md'))
    
return (
    <HomeContainer id='Home'>
        <HomeBackground >
        </HomeBackground>
        {
            moibleOrTablet
            &&
            <>
                <SmokeWrap>
                    <SmokeImage1 src={smoke} alt='smoke' />
                </SmokeWrap>

                <SmokeWrap>
                    <SmokeImage2 src={smoke} alt='smoke' />
                </SmokeWrap>

                <SmokeWrap>
                    <SmokeImage3 src={smoke} alt='smoke' />
                </SmokeWrap>
            </>
        }


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