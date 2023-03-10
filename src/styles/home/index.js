import { Box, Button, styled, Typography } from "@mui/material";

////////////////// Lazy Load Image  ///////////////////////////////////
import { LazyLoadImage } from 'react-lazy-load-image-component';

//////////////////  Animations  /////////////////////////////////////
import { smoke1, smoke3, smoke2} from "../animation";


export const ContainerHome = styled(Box)(({theme})=> ({
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

export const BackgroundHome = styled(Box)(({ theme})=> ({
    position: 'absolute',
    top: '0px',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
}))

export const ImgOriginal = styled(LazyLoadImage)(()=> ({
    objectFit: 'cover',
}))

export const ImgBlur = styled('img')(()=> ({
    width: '100%',
    height: '100%',
    zIndex: '100'
}))

export const Content = styled(Box)(()=> ({
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
    [theme.breakpoints.down('md')]: {
        fontSize: '45px',
    },
}))

export const ButtonHome = styled(Button)(({theme})=> ({
    width: '180px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: '20px',
    color: 'white',
    marginTop: '20px',
    fontWeight: 'bold',
}))


///////// Smoke on mobile /////////////////////////////////////////
export const WrapperSmoke = styled(Box)(()=> ({
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: '60%',
    bottom: '45%',
}))

export const ImageSmoke1 = styled('img')(({src})=> ({
src: `url(${src})`,
filter: 'blur(5px)',
width: '50%',
height: '50%',
// filter: 'brightness(135%)',
transformOrigin: '50% 50%',
animation: `${smoke1} 3s linear infinite`,
animationDelay: '0.5s',
}))

export const ImageSmoke2 = styled('img')(({src})=> ({
src: `url(${src})`,
filter: 'blur(5px)',
width: '50%',
height: '50%',
transformOrigin: '50% 50%',
animation: `${smoke2} 3s linear infinite`,
animationDelay: '1.5s',
}))

export const ImageSmoke3 = styled('img')(({src})=> ({
src: `url(${src})`,
filter: 'blur(5px)',
width: '50%',
height: '50%',
transformOrigin: '50% 50%',
animation: `${smoke3} 4s linear infinite`,
animationDelay: '2.5s',
}))