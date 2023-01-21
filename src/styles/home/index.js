import { Box, Button, styled, Typography } from "@mui/material";

//// Images
import homeDesktop from '../../../imagenes/home-desktop.jpg'
import homeMobile from '../../../imagenes/home-mobile.jpg'

//// Animations
import { trackingInContractBck, textFocusIn} from "../animation";


export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const HomeContainer = styled(Box)(({theme})=> ({
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    padding: '0px 0px',
    overflow: 'hidden',
    backgroundImage: `url(${ homeDesktop })`,
    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${ homeMobile })`,
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: 'cover',
}))

export const HomeContent = styled(Box)(()=> ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '40%',
    right: '0',
    left: '0'
}))

export const HomeText = styled(Typography)(({ theme })=>({
    fontSize: '40px',
    fontFamily: 'Work Sans, sans-serif',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '1px 1px 1px gray',
    animation: `${textFocusIn} 2s both`,
    [theme.breakpoints.down('md')]: {
        fontSize: '25px',
    }
}))

export const HomeTextAlicante = styled(Typography)(({ theme })=>({
    fontFamily: 'Work Sans, sans-serif',
    lineHeight: '1',
    fontSize: '60px',
    color: 'white',
    fontWeight: '900',
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px gray',
    animation: `${trackingInContractBck} 3s both`,
    [theme.breakpoints.down('md')]: {
        fontSize: '45px',
    },
}))

export const HomeButton = styled(Button)(({theme})=> ({
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '20px',
    width: '200px',
    borderRadius: '106px',
    '&:hover': {
        color: 'black'
    }

}))


