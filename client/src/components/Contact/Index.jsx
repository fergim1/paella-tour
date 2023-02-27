///////////////////// Components Styles ////////////////////////////
import {
    ContainerContact,
    GridContainer,
    GridItemLeftTop,
    TitleSection,
    SubtitleOne,
    SubtitleTwo,
    WrapperIsologo,
    ImageIsologo,
    GridItemRightBottom,
    WrapperForm,
} from "../../styles/contact"

////////////// Logo ////////////////////////////////////////////////
import isoLogo from '../../assets/logo-drawer.png'

////////////// Context /////////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// Text of ContactPage /////////////////////////////////
import { textContact } from '../../constants/index'

////////////// Form /////////////////////////////////
import { Form } from "../Form";

////////////// URL to AXIOS ///////////////////////////////////////
const url = import.meta.env.VITE_URL_CONTACT_FORM



const ContactPage = () => {
////////////// Context ////////////////////////////////////////////
    const { language } = useContext(AppContext)

////////////// Hook /////////////////////////////////
    const text = useLanguage(language, textContact)

    return (
        <ContainerContact id='Contact'>
            <GridContainer container spacing={2} >

{/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
                <GridItemLeftTop item xs={12} sm={6} >
                        <TitleSection > { text.titleSection } </TitleSection>
                        <SubtitleOne> { text.subtitleOne }</SubtitleOne><br></br>
                        <SubtitleTwo > { text.subtitleTwo } 👋 </SubtitleTwo>
                        <WrapperIsologo>
                            <ImageIsologo src={isoLogo} alt='isologo-paella-tour'/>
                        </WrapperIsologo>
                </GridItemLeftTop>

{/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
                <GridItemRightBottom item xs={12} sm={6} >
                    <WrapperForm elevation={2} >
                        <Form  titleForm= { text.titleForm } url={ url } />
                    </WrapperForm>
                </GridItemRightBottom>

            </GridContainer>
        </ContainerContact>
    )
}

export { ContactPage }