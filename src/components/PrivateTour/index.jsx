

///////////////////// Material UI Components ///////////////////////////////////
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";

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
    TitleForm,
    FormGroupContact,
    FormControlContact,
    ButtomContactForm,
    InputLabelForm,
    OutlinedInputForm,
    TextAreaForm,
    WrapperItemLeftTop,
} from "../../styles/private-tour/index"

////////////// Icons /////////////////////////////////////////////
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


////////////// Context /////////////////////////////////////////////
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// Text of ContactPage ///////////////////////////////////////////
import { textPrivateTour } from '../../constants/index'



const PrivateTourPage = () => {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textPrivateTour)

    return (
        <ContainerPrivateTour id='Private Tour'>
            <GridContainer container spacing={2} >

                <GridItemLeftTop item xs={12} sm={6} >
                    <WrapperItemLeftTop>
                        <Title > {text.title} </Title>
                        <SubTitle >{text.subtitle}  🍛 </SubTitle>
                        <Text>{text.text}</Text><br></br>
                    </WrapperItemLeftTop>
                </GridItemLeftTop>

                <GridItemRightBottom item xs={12} sm={6} >
                    <PaperForm elevation={2} >
                        {/* <WrapperForm> */}
                            <TitleForm>
                                {text.titleForm}
                            </TitleForm>
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

                        {/* </WrapperForm> */}

                    </PaperForm>
                </GridItemRightBottom>

            </GridContainer>
        </ContainerPrivateTour>
    )
}

export { PrivateTourPage }