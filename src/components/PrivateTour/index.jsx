///////////////////// Components Styles ///////////////////////////////////
import {
    ContainerPrivateTour,
    GridContainer,
    GridItemLeftTop,
    Title,
    SubTitle,
    Text,
    GridItemRightBottom,
    PaperForm,
    WrapperItemLeftTop,
} from "../../styles/private-tour/index"

////////////// Context //////////////////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// Text of PrivatePage ///////////////////////////////////////////
import { textPrivateTour } from '../../constants/index'

////////////// Form ////////////////////////////////////////////////////////
import { Form } from "../Form";

////////////// URL to AXIOS /////////////////////////////////
const url = import.meta.env.VITE_URL_PRIVATE_TOUR_FORM



const PrivateTourPage = () => {
////////////// Context /////////////////////////////////
    const {language} = useContext(AppContext)

////////////// Hook /////////////////////////////////
    const text = useLanguage(language, textPrivateTour)


    return (
        <ContainerPrivateTour id='Private Tour'>
            <GridContainer container spacing={2} >

{/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
                <GridItemLeftTop item xs={12} sm={6} >
                        <WrapperItemLeftTop>
                            <Title> { text.title } </Title>
                            <SubTitle> { text.subtitle }  🍛 </SubTitle>
                            <Text> { text.text } </Text><br></br>
                        </WrapperItemLeftTop>
                </GridItemLeftTop>

{/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
                <GridItemRightBottom item xs={12} sm={6} >
                        <PaperForm elevation={2} >
                            <Form  titleForm={text.titleForm} url={ url } />
                        </PaperForm>
                </GridItemRightBottom>

            </GridContainer>
        </ContainerPrivateTour>
    )
}

export { PrivateTourPage }