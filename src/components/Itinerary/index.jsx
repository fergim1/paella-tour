import { useContext, useState } from "react";

////////////// Context /////////////////////////////////////////////
import { AppContext } from "../../context";

///////////////////// Components Styles ///////////////////////////////////
import {
  ArrowPrev,
  ArrowNext,
  ContainerItinerary,
  WrapperBackground,
  TitleStop,
  Caption,
  Description,
  WrapperInfo,
  WrapperArrows,
  WrapperCaption,
  TextArrow,
  TitleItineraty,
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
                    <TitleItineraty>{textInfo.title}</TitleItineraty>
                            <WrapperCaption>
                                <Caption> {textInfo.caption} </Caption>
                            </WrapperCaption>

                            <TitleStop> {textInfo.titleStop} </TitleStop>

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