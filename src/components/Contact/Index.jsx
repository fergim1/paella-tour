
import { Button, FormControl, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { ContactContainer, GridContainer, GridItemText, GridItemForm, FormContent, BoxIsologo, ImageIsologo } from "../../styles/contact"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import isoLogo from '../../assets/logo-drawer.png'
import { useContext } from "react";
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

const textSection = {
    english: {
        title: 'Love to hear from you,',
        subtitle: 'Get in touch ',
        formTitle: 'Contact us',
        inputName: 'Name *',
        inputEmail: 'Email *',
        inputMessage: 'Message *',
        inputMessageTextHelp: '* All fields are required',
        buttonText: 'Just send',

    },
    spanish: {
        title: 'Nos encantaría saber de ti,',
        subtitle: 'Escríbenos',
        formTitle: 'Contacto',
        inputName: 'Nombre *',
        inputEmail: 'Email *',
        inputMessage: 'Mensaje *',
        inputMessageTextHelp: '* Todos los campos son requeridos',
        buttonText: 'Enviar',


    }
}

const Contact = () => {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textSection)


    return (
        <ContactContainer id='Contact' sx={{mt: '20px'}}>
            <GridContainer container spacing={2} >

                <GridItemText sx={{lineHeight: '0'}}item xs={12} sm={6} >
                    <h2>{text.title}</h2><br></br>
                    <h2>{text.subtitle} 👋 </h2>
                    <BoxIsologo>
                        <ImageIsologo src={isoLogo} alt='isologo-paella-tour'/>
                    </BoxIsologo>
                </GridItemText>


                <GridItemForm item xs={12} sm={6} >
                    <FormContent elevation={2} >
                    <Typography variant="h4" sx={{mt: '16px', mb: '24px'}}>{text.formTitle}</Typography>

                        <FormGroup sx={{ width: '90%'}}>

                            <FormControl variant="outlined" sx={{mb: '10px'}}>
                                <InputLabel  color='secondary' htmlFor="name" >{text.inputName}</InputLabel>
                                <OutlinedInput
                                    label={text.inputName}
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Name"
                                                edge="end"
                                                >
                                                    <PersonIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <FormControl variant="outlined" sx={{mb: '10px'}}>
                                <InputLabel  color='secondary' htmlFor="email" >{text.inputEmail}</InputLabel>
                                <OutlinedInput
                                    label={text.inputEmail}
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="email"
                                                edge="end"
                                                >
                                                    <EmailIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <TextField 
                                color='secondary'
                                id="outlined-multiline-static"
                                label={text.inputMessage}
                                multiline
                                rows={4}
                            />
                            <FormHelperText>{text.inputMessageTextHelp}</FormHelperText>

                            <Button
                                endIcon={<ArrowOutwardIcon/>}
                                sx={{mt: '10px', mb: '30px', color: 'white', fontWeight: 'bold'}}
                                variant="contained"
                                size="large"
                            >
                                {text.buttonText}
                            </Button>
                        </FormGroup>

                    </FormContent>
                </GridItemForm>

            </GridContainer>
        </ContactContainer>
    )
}

export { Contact }