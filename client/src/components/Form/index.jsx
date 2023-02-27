import { useContext, useState } from "react";

///////////////////// Material UI Components ///////////////////////////////////
import { FormHelperText, InputAdornment } from "@mui/material";

///////////////////// Components Styles ///////////////////////////////////
import {
    // WrapperContainer,
    FormGroupContact,
    FormControlContact,
    InputLabelForm,
    OutlinedInputForm,
    TextAreaForm,
    ButtomContactForm,
    SpinnerInButton,
    TextError,
    ImageSent,
    WrapperImageSent,
    WrapperForm,
    TitleForm,
    IconWrapper,
 } from "../../styles/form";

////////////// Icons ////////////////////////////////////////////////////////
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

////////////// Hooks ////////////////////////////////////////////////////////
import { useForm } from "../../hooks/useForm";

////////////// Alert ////////////////////////////////////////////////////////
import { AlertForm } from "../AlertForm/index.jsx";

//////////////  Image Email: url Cloudinary  ///////////////////////////
import { urlImages } from '../../constants'

////////////////// Texts Book Now  ///////////////////////////////////
import { textForm } from "../../constants";

//////////////  Context  ///////////////////////////
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";


const Form = ( { titleForm, url } ) => {
///////  Context  //////////////////
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textForm)

///////  States  //////////////////
    const [alertOpen, setAlertOpen] = useState(false)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    const [sent , setSent] = useState(false)
    const [form, setForm] = useState({
                name: '',
                email: '',
                message: '',
    })

///////  Functions  //////////////////
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {name, email, message} = form
        if (!name || !email || !message) {
            return setAlertOpen(true);
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return setError('Email invalido')
        }
        setLoading(true)
        const payload = {
            name: form.name,
            email: form.email,
            message: form.message,
            url: url
        }
        await  useForm(payload)
        setForm({
            name: '',
            email: '',
            message: '',
        })
        setLoading(false)
        setSent(true)
        console.log(form)
    }


    return(
        <>
            {
                alertOpen
                &&
                <AlertForm
                    open={ alertOpen }
                    setOpen={ setAlertOpen }
                    form={form}
                    />
            }
            {
                !sent
                ?
                    <WrapperForm>
                        <TitleForm>
                            {
                                !sent
                                ? titleForm
                                : text.textSent
                            }
                        </TitleForm>

                        <FormGroupContact >
                            <FormControlContact variant="outlined" >
                                <InputLabelForm color='secondary' htmlFor="name"> { text.inputName } </InputLabelForm>
                                <OutlinedInputForm
                                    value={ form.name }
                                    name='name'
                                    onChange={ (e) => handleInputChange (e) }
                                    label={ text.inputName }
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconWrapper aria-label="Name" edge="end" >
                                                    <PersonIcon />
                                            </IconWrapper>
                                        </InputAdornment>
                                    }
                                />
                            </FormControlContact>

                            <FormControlContact variant="outlined" sx={{mb: '10px'}}>
                                <InputLabelForm color='secondary' htmlFor="email" > { text.inputEmail } </InputLabelForm>
                                <OutlinedInputForm
                                    value={form.email}
                                    name='email'
                                    onChange={ (e) => handleInputChange (e) }
                                    label={ text.inputEmail }
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconWrapper aria-label="email" edge="end" >
                                                    <EmailIcon />
                                            </IconWrapper>
                                        </InputAdornment>
                                    }
                                />
                            </FormControlContact>

                            <TextAreaForm
                                value={ form.message }
                                name='message'
                                onChange={ (e) => handleInputChange (e) }
                                color='secondary'
                                id="outlined-multiline-static"
                                label={ text.inputMessage }
                                multiline
                                rows={4}
                            />
                            <FormHelperText> { !error ? text.inputMessageTextHelp : <TextError> { text.invalidEmail} </TextError>} </FormHelperText>

                            <ButtomContactForm
                                type="submit"
                                endIcon={!loading ? <ArrowOutwardIcon/> : ''}
                                onClick={handleSubmit}
                                >
                                {
                                    !loading
                                    ? text.buttonText
                                    :  <SpinnerInButton size={'24px'} />}
                            </ButtomContactForm>
                        </FormGroupContact>
                    </WrapperForm>

                :
                    <WrapperImageSent>
                        <ImageSent src={urlImages.emailSent} alt='email-sent' width='170px' height='150px'/>
                    </WrapperImageSent>
            }
        </>
    )

}

export { Form }