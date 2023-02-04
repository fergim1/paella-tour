import { useContext, useState } from "react";
import { AppContext } from "../../context";
import {
  ArrowPrev,
  ArrowNext,
  ContainerItinerary,
  WrapperBackground,
  Title,
  Caption,
  Description,
  WrapperInfo,
  WrapperArrows,
  WrapperCaption,
  TextArrow,
} from "../../styles/itinerary"

///////////////////// Icons ///////////////////////////////////
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

////////////////// Text info for each STEP ///////////////////////////////////
import { STOPS2 } from "../../constants";

////////////////// Hooks ///////////////////////////////////
import { useLanguageItinerary } from "../../hooks/useLanguage";


const ItineraryPage = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const { language } = useContext(AppContext)


  const textInfo = useLanguageItinerary(language, STOPS2, activeSlide)


    const handleMove = (direction) => {
      if(direction==='right') {
        setActiveSlide(prev => prev +1)
      } else {
        setActiveSlide(prev => prev -1)
      }
    }

  return (
    <ContainerItinerary id='Itinerary'>
          


              <WrapperBackground src={textInfo.imgSRC} >

                  <WrapperInfo>
                            <WrapperCaption>
                                <Caption> {textInfo.caption} </Caption>
                            </WrapperCaption>

                            <Title> {textInfo.title} </Title>

                            <Description> {textInfo.description}  </Description>

                            <WrapperArrows>
                                {
                                  activeSlide !== 0  &&
                                  <ArrowPrev onClick={()=> handleMove('left')}>
                                      <ArrowBackIcon/>
                                      <TextArrow> {language ==='en' ? 'Back' : 'Volver'} </TextArrow>
                                  </ArrowPrev>
                                }
                                {
                                  activeSlide !== 3  &&
                                  <ArrowNext onClick={()=> handleMove('right')}>
                                      <TextArrow> {language ==='en' ? 'Next' : 'Sigui.'} </TextArrow>
                                      <ArrowForwardIcon/>
                                  </ArrowNext>
                                }


                            </WrapperArrows>

                  </WrapperInfo>

              </WrapperBackground>



    </ContainerItinerary>
  );
}

export { ItineraryPage }