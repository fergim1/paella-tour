
///////////////////// Material UI Components ///////////////////////////////////
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";

///////////////////// Components Styles ///////////////////////////////////
import {
    ContainerContact,
    GridContainer,
    GridItemLeftTop,
    Title,
    SubTitle,
    WrapperIsologo,
    ImageIsologo,
    GridItemRightBottom,
    TitleContact,
    WrapperForm,
    FormGroupContact,
    FormControlContact,
    ButtomContactForm,
    InputLabelForm,
    OutlinedInputForm,
    TextAreaForm,
} from "../../styles/contact"

////////////// Icons /////////////////////////////////////////////
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

////////////// Logo /////////////////////////////////////////////
import isoLogo from '../../assets/logo-drawer.png'

////////////// Context /////////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// Text of ContactPage ///////////////////////////////////////////
import { textContact } from '../../constants/index'



const ContactPage = () => {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textContact)

    return (
        <ContainerContact id='Contact'>
            <GridContainer container spacing={2} >

                <GridItemLeftTop item xs={12} sm={6} >
                    <Title>{text.title}</Title><br></br>
                    <SubTitle >{text.subtitle} 👋 </SubTitle>
                    <WrapperIsologo>
                        <ImageIsologo src={isoLogo} alt='isologo-paella-tour'/>
                    </WrapperIsologo>
                </GridItemLeftTop>

                <GridItemRightBottom item xs={12} sm={6} >
                    <WrapperForm elevation={2} >
                        <TitleContact > {text.formTitle} </TitleContact>

                        <FormGroupContact >
                            <FormControlContact variant="outlined" >
                                <InputLabelForm color='secondary' htmlFor="name" >{text.inputName}</InputLabelForm>
                                <OutlinedInputForm
                                    label={text.inputName}
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="Name" edge="end" >
                                                    <PersonIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControlContact>

                            <FormControlContact variant="outlined" sx={{mb: '10px'}}>
                                <InputLabelForm color='secondary' htmlFor="email" >{text.inputEmail}</InputLabelForm>
                                <OutlinedInputForm
                                    label={text.inputEmail}
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="email" edge="end" >
                                                    <EmailIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControlContact>

                            <TextAreaForm
                                color='secondary'
                                id="outlined-multiline-static"
                                label={text.inputMessage}
                                multiline
                                rows={4}
                            />
                            <FormHelperText>{text.inputMessageTextHelp}</FormHelperText>

                            <ButtomContactForm endIcon={<ArrowOutwardIcon/>} >
                                {text.buttonText}
                            </ButtomContactForm>
                        </FormGroupContact>

                    </WrapperForm>
                </GridItemRightBottom>

            </GridContainer>
        </ContainerContact>
    )
}

export { ContactPage }