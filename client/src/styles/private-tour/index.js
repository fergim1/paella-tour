import styled from "@emotion/styled";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";


export const ContainerPrivateTour = styled(Box)(()=> ({
    width: '100%',
    height: 'auto',
    flexGrow: '1',
    marginTop: '20px',
    backgroundColor: 'black',
}))

export const GridContainer = styled(Grid)(({theme})=> ({
    // [theme.breakpoints.down('sm')]: {
    //     height: 'auto',
    //     // maxHeight: 'auto'
    // },
   
}))

//////////////  GRID LEFT TOP //////////////////////////////
//////////////  GRID LEFT TOP //////////////////////////////
export const GridItemLeftTop = styled(Grid)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    lineHeight: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        minHeight: '50vh',
    },
}))

export const WrapperItemLeftTop = styled(Stack)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    width: 'auto',
    height: 'auto',
    lineHeight: '0',
    padding: '0px 0px 0px 100px',
    [theme.breakpoints.down('md')]: {
        padding: '0px 0px 0px 40px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '60px 20px 20px 20px',
    },
}))

export const Title = styled(Typography)(({theme})=> ({
    fontSize: '40px',
    fontWeight: '800',
    letterSpacing: '-0.06em',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: `linear-gradient(280deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    lineHeight: '1',
    letterSpacing: '-.06em',
    marginBottom: '32px',
    color: 'white',
    [theme.breakpoints.down('md')]: {
        fontSize: '36px',
        textAlign: 'center',
    },
}))

export const SubTitle = styled(Typography)(({theme})=> ({
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '12px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        textAlign: 'center',
    },

}))

export const Text = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    color: 'white',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        textAlign: 'center',
    },
}))

//////////////  GRID RIGHT BOTTOM //////////////////////////////
//////////////  GRID RIGHT BOTTOM //////////////////////////////
export const GridItemRightBottom = styled(Grid)(({theme})=> ({
    width: '100vw',
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        minHeight: '50vh',
    },
}))

export const PaperForm = styled(Paper)(({theme}) => ({
    width: '40vw',
    height: 'auto',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
        width: '90vw',
        marginBottom: '40px'
    },
}))


