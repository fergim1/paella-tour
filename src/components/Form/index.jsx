import { useContext, useState } from "react";

///////////////////// Material UI Components ///////////////////////////////////
import {  InputAdornment } from "@mui/material";

///////////////////// Components Styles ///////////////////////////////////
import {
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
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

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


////////////// MAIN COMPONENT - Form ///////////////////////////////////////////////////
////////////// MAIN COMPONENT - Form ///////////////////////////////////////////////////
const Form = ( { titleForm, url } ) => {
///////  Context  //////////////////
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textForm)

///////  States  //////////////////
    const [alertOpen, setAlertOpen] = useState(false)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState({
        email: false,
        mobile: false
    })
    const [sent , setSent] = useState(false)
    const [form, setForm] = useState({
                name: '',
                email: '',
                mobile: '',
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
        const {name, email, mobile, message} = form
        if (!name || !email || !mobile || !message) {
            return setAlertOpen(true);
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && /^[0-9+]{3,}$/.test(mobile)) {
            return setError({email: true, mobile : false})
        }
        if (!/^[0-9+]{3,}$/.test(mobile) && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ) {
            return setError({email: false, mobile : true})
        }
        if (!/^[0-9+]{3,}$/.test(mobile) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ) {
            return setError({email: true, mobile : true})
        }
        setLoading(true)
        const payload = {
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            message: form.message,
            url: url
        }
        await  useForm(payload)
        console.log(form)
        setForm({
            name: '',
            email: '',
            mobile: '',
            message: '',
        })
        setLoading(false)
        setSent(true)
    }

    const ErrorHelper = () => {
        if (!error.mobile && !error.email ){
            return  <TextError> {text.inputMessageTextHelp} </TextError>
        }
        if (error.email && !error.mobile){
            return  <TextError> {text.invalidEmail} </TextError>
        }
        if (error.mobile && !error.email){
            return <TextError> {text.invalidMobile} </TextError>
        }
        if (error.email && error.mobile){
            return  (
            <>
            <TextError> {text.invalidEmail} </TextError>
            <TextError> {text.invalidMobile} </TextError>
            </>
            )
        }
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

                            <FormControlContact variant="outlined" sx={{mb: '10px'}}>
                                <InputLabelForm color='secondary' htmlFor="mobile" > { text.inputMobile } </InputLabelForm>
                                <OutlinedInputForm
                                    value={form.mobile}
                                    name='mobile'
                                    onChange={ (e) => handleInputChange (e) }
                                    label={ text.inputMobile }
                                    color='secondary'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconWrapper aria-label="mobile" edge="end" >
                                                    <PhoneIphoneIcon />
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

                            <ErrorHelper/>

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