import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Grid, InputLabel, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";


export const ContainerContact = styled(Box)(()=> ({
    width: '100%',
    height: '100vh',
    flexGrow: '1',
    marginTop: '20px',
}))

export const GridContainer = styled(Grid)(()=> ({
}))

export const GridItemLeftTop = styled(Grid)(({theme})=> ({
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    lineHeight: '0',
    [theme.breakpoints.down('sm')]: {
        height: '30vh',
    },
}))

export const TitleContact = styled(Typography)(({theme})=> ({
    fontSize: '40px',
    fontWeight: '800',
    letterSpacing: '-0.06em',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    lineHeight: '1',
    letterSpacing: '-.06em',
    margin: '32px',
    padding: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '36px',
    },
}))

export const SubTitle = styled(Typography)(()=> ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
}))

export const Title = styled(Typography)(()=> ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
}))

export const WrapperIsologo = styled(Box)(()=> ({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
}))

export const ImageIsologo = styled('img')(({src, theme})=> ({
  src: `url(${src})`,
  width: '170px',
  [theme.breakpoints.down('sm')]: {
    width: '100px'
  }
}))

export const GridItemRightBottom = styled(Grid)(({theme})=> ({
    width: '100vw',
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        height: '70vh',
    },
}))

export const WrapperForm = styled(Paper)(({theme}) => ({
    width: '40vw',
    height: 'auto',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    backgroundColor: '#fbfbfd',

    [theme.breakpoints.down('sm')]: {
        width: '90vw',
    },

}))

export const FormGroupContact = styled(FormGroup)(() => ({
    width: '90%'
}))

export const FormControlContact = styled(FormControl)(() => ({
    marginBottom: '10px'
}))

export const InputLabelForm = styled(InputLabel)(({theme}) => ({
}))

export const OutlinedInputForm = styled(OutlinedInput)(({theme}) => ({
    borderRadius: '20px'
}))

export const TextAreaForm = styled(TextField)(({theme}) => ({
    borderRadius: '20px',
    '.MuiInputBase-root': {borderRadius: '20px'},
}))

export const ButtomContactForm = styled(Button)(({theme})=> ({
    marginBottom: '30px',
    marginTop: '10px',
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: 'white',
    borderRadius: '20px',
    fontWeight: 'bold',
    width:'100%',
    height:'40px',
    marginTop: '40px',
    '&:focus': {
        background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '15px'
    }
}))