///////////////////// Components Styles ///////////////////////////////////////
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
    ImgBlur,
    ImgOriginal,
 } from "../../styles/home";

 //////////  Media Query   /////////////////////////////////////////////////////
 import { useTheme } from "@emotion/react";
 import { useMediaQuery } from "@mui/material";

//////////  Context   //////////////////////////////////////////////////////////
import { useContext, useState } from "react";
import { AppContext } from "../../context";

//////////  Hooks   ////////////////////////////////////////////////////////////
import { useLanguage } from "../../hooks/useLanguage";

//////////////  Image Smoke: url Cloudinary  ///////////////////////////////////
import { urlImages } from '../../constants'

//////////  UI Icons   /////////////////////////////////////////////////////////
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

////////////////// Texts Home  /////////////////////////////////////////////////
import { textHome } from "../../constants";



////////////// MAIN COMPONENT - Home ///////////////////////////////////////////
////////////// MAIN COMPONENT - Home ///////////////////////////////////////////
const HomePage = () => {
    const [isLoaded, setLoaded] = useState(false)
    const [isLoadStarted, setLoadStarted] = useState(false)

////////////////// Context /////////////////////////////////////////////////////
    const {language} = useContext(AppContext)

////////////////// Hook to get text ////////////////////////////////////////////
    const text = useLanguage(language, textHome)

////////////////// Media Query /////////////////////////////////////////////////
    const theme = useTheme()
    const moibleOrTablet = useMediaQuery(theme.breakpoints.down('md'))

////////////////// Functions ///////////////////////////////////////////////////
    const handleSeeItinerary = () => {
        document.getElementById('Itinerary').scrollIntoView({behavior: 'smooth'})
    }

    const handleLoad = () => {
      setLoaded(true);
    };
  
    const handleLoadStarted = () => {
      setLoadStarted(true);
    };


return (
    <ContainerHome id='Home'>
        <BackgroundHome >

            {
                (!isLoaded && isLoadStarted) &&
                (<ImgBlur
                    src={moibleOrTablet ? urlImages.homeMobileBlur : urlImages.homeDesktopBlur}
                />)
            }

            <ImgOriginal
                key={'home'}
                alt={'home'}
                src={moibleOrTablet ? urlImages.homeMobile : urlImages.homeDesktop}
                height={'100%'}
                width={'100%'}
                onLoad={handleLoad}
                beforeLoad={handleLoadStarted}
            />
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
                endIcon={<KeyboardDoubleArrowDownIcon />}
            >
                {text.button}
            </ButtonHome>
        </Content>

    </ContainerHome>
)
}

export default HomePage