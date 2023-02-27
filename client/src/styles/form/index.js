import styled from "@emotion/styled";
import { Box, Button, CircularProgress, FormControl, FormGroup, IconButton, InputLabel, OutlinedInput, TextField, Typography, } from "@mui/material";

/////// Animation
import { bounceInTop } from "../animation";


export const WrapperContainer = styled(Box)(()=> ({
}))

export const WrapperForm = styled(Box)(()=> ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const TitleForm = styled(Typography)(({theme})=> ({
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '20px',
    color: '#4f4f4f',
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    }
}))

export const FormGroupContact = styled(FormGroup)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    width: '90%',

}))

export const FormControlContact = styled(FormControl)(() => ({
    marginBottom: '10px',
    width: '100%',
}))

export const InputLabelForm = styled(InputLabel)(() => ({
    fontSize: '14px',
}))

export const OutlinedInputForm = styled(OutlinedInput)(() => ({
    borderRadius: '20px',
    height: '46px',
}))

export const IconWrapper = styled(IconButton)(() => ({
    color: '#c6c6c6',
}))


export const TextAreaForm = styled(TextField)(() => ({
    width: '100%',
    borderRadius: '20px',
    '.MuiInputBase-root': {borderRadius: '20px', fontSize: '14px'},
    '.MuiFormLabel-root': { fontSize: '14px'}

}))

export const TextError = styled('span')(() => ({
    color: 'red',
    fontSize: '14px',
    // fontWeight: 'bold',
    marginLeft: '12px',
}))

export const ButtomContactForm = styled(Button)(({theme})=> ({
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: '#4f4f4f',
    borderRadius: '20px',
    fontWeight: 'bold',
    width:'100%',
    height:'40px',
    margin: '20px 0px',
    '&:focus': {
        background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
    }
}))

export const SpinnerInButton = styled(CircularProgress)(()=> ({
    color: 'white'
}))

export const WrapperImageSent = styled(Box)(()=> ({
    width: '260px',
    height: '260px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ImageSent = styled('img')(()=> ({
    width: '170px',
    height: '150px',
    animation: `${bounceInTop} 1.1s both`
}))