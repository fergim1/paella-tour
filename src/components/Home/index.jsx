import {
    ContainerHome,
    Content,
    HomeText,
    HomeTextAlicante,
    ButtonHome,
    BackgroundHome,
    WrapperSmoke,
    ImageSmoke1,
    ImageSmoke2,
    ImageSmoke3,
 } from "../../styles/home";

 //////////  Media Query   /////////////////////////
 import { useTheme } from "@emotion/react";
 import { useMediaQuery } from "@mui/material";

//////////  Context   /////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";

//////////  Hooks   /////////////////////////
import { useLanguage } from "../../hooks/useLanguage";

//////////////  Image Smoke: url Cloudinary  ///////////////////////////
import { urlImages } from '../../constants'

//////////  UI Icons   /////////////////////////
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

////////////////// Texts Book Now  ///////////////////////////////////
import { textHome } from "../../constants";



const HomePage = () => {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textHome)
    const theme = useTheme()
    const moibleOrTablet = useMediaQuery(theme.breakpoints.down('md'))

    const handleSeeItinerary = () => {
        document.getElementById('Itinerary').scrollIntoView({behavior: 'smooth'})
    }
return (
    <ContainerHome id='Home'>
        <BackgroundHome >
        </BackgroundHome>
        {
            moibleOrTablet
            &&
            <>
                <WrapperSmoke>
                    <ImageSmoke1 src={urlImages.smoke} alt='smoke' />
                </WrapperSmoke>

                <WrapperSmoke>
                    <ImageSmoke2 src={urlImages.smoke} alt='smoke' />
                </WrapperSmoke>

                <WrapperSmoke>
                    <ImageSmoke3 src={urlImages.smoke} alt='smoke' />
                </WrapperSmoke>
            </>
        }


        <Content>
            <HomeText variant="subtitle">
                { text.subtitle }
                <HomeTextAlicante variant='span'>
                <br></br>
                Alicante
                </HomeTextAlicante>
            </HomeText>
            <ButtonHome 
                onClick={handleSeeItinerary} 
                // variant="contained"
                endIcon={<KeyboardDoubleArrowDownIcon />}
            >
                {text.button}
            </ButtonHome>
        </Content>

    </ContainerHome>
)
}

export { HomePage }