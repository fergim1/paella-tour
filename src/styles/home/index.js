import { Box, Button, styled, Typography } from "@mui/material";

//// Images
import homeDesktop from '../../../imagenes/home-desktop.jpg'
import homeMobile from '../../../imagenes/home-mobile.jpg'

//// Animations
import { trackingInContractBck, textFocusIn, smoke1, smoke3, smoke2} from "../animation";


export const HomeContainer = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    top:'0px',
    position:'relative',
    margin: '0',
    width: '100%',
    height: '100vh',
    padding: '0',
}))


export const HomeBackground = styled(Box)(({ theme})=> ({
    position: 'absolute',
    top: '0px',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${ homeDesktop })`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: 'cover',
    // height: 'calc(100vh - 70px)',

    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${ homeMobile })`,
    },

}))
////////////////////////////////////////////////////////////////
/////////////////////////////////// Smoke
export const SmokeWrap = styled(Box)(()=> ({
        position: 'absolute',
        transform: 'translateX(-50%)',
        left: '56%',
        bottom: '45%',
}))

export const SmokeImage1 = styled('img')(({src})=> ({
    src: `url(${src})`,
    filter: 'blur(5px)',
    transformOrigin: '50% 50%',
    animation: `${smoke1} 3s linear infinite`,
    animationDelay: '0.5s',
}))

export const SmokeImage2 = styled('img')(({src})=> ({
    src: `url(${src})`,
    filter: 'blur(5px)',
    transformOrigin: '50% 50%',
    animation: `${smoke2} 3s linear infinite`,
    animationDelay: '1.5s',
}))

export const SmokeImage3 = styled('img')(({src})=> ({
    src: `url(${src})`,
    filter: 'blur(5px)',
    transformOrigin: '50% 50%',
    animation: `${smoke3} 4s linear infinite`,
    animationDelay: '2.5s',
}))
////////////////////////////////// End Smoke
////////////////////////////////////////////////////////////////

export const HomeContent = styled(Box)(()=> ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20%',
    right: '0',
    left: '0'
}))

export const HomeText = styled(Typography)(({ theme })=>({
    fontSize: '40px',
    fontFamily: 'Work Sans, sans-serif',
    textAlign: 'center',
    lineHeight: '0',
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


