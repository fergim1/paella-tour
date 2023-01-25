import styled from "@emotion/styled";
import { Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";


export const ContactContainer = styled(Box)(()=> ({
    width: '100%',
    height: '100vh',
    flexGrow: '1',
}))

export const GridContainer = styled(Grid)(({theme})=> ({
}))

export const GridItemText = styled(Grid)(({theme})=> ({
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        height: '30vh',
    },
}))

export const BoxIsologo = styled(Box)(()=> ({
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

export const GridItemForm = styled(Grid)(({theme})=> ({
    width: '100vw',
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        height: '70vh',
    },
}))

export const FormContent = styled(Paper)(({theme}) => ({
    width: '40vw',
    height: 'auto',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: '#fbfbfd',

    [theme.breakpoints.down('sm')]: {
        width: '80vw',
    },

}))

export const InputForm = styled(TextField)(() => ({
    width: '90%',
}))