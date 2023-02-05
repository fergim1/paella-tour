import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";


export const ContainerItinerary = styled(Box)(()=> ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
}))

export const WrapperBackground = styled(Box)(({src, theme})=> ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ src })`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: 'cover',
    display: 'grid',
    placeContent: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${ src })`,
        backgroundPosition: "center",
    }
}))

export const WrapperInfo = styled(Stack)(({theme})=> ({
    flexDirection: 'column',
    justifyContent: 'start',
    width: '500px',
    height: '300px',
    // animation: `${slideAnimation} 1s ease-in`,
    [theme.breakpoints.down('sm')]: {
        marginBottom: '15%',
        padding: '0 10%'
    }
}))

export const WrapperCaption = styled(Stack)(()=> ({
    width: 'auto',
    maxWidth: '247px',
    backgroundColor: '#f9c301ba',
    padding: '2px 0px 0px 12px',
    marginBottom: '10px',
    borderRadius: '20px',

}))

export const WrapperArrows = styled(Stack)(()=> ({
    flexDirection: 'row',
    justifyContent: 'start',
    width: '100%',
    height: '200px',
    position: 'relative',
}))

export const ArrowPrev = styled(Button)(({theme})=> ({
    width: '86px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '20px',
    border: 'transparent',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
}))

export const ArrowNext = styled(Button)(({theme})=> ({
    width: '86px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '0',
    right: '0',
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: '20px',
    color: 'white',
}))

export const TextArrow = styled(Typography)(()=> ({
    fontSize: '14px',
    fontWeight: 'bold',

}))

export const Caption = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
    }
}))

export const TitleStop = styled(Typography)(({theme})=> ({
    fontSize: '36px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    lineHeight: '1',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '32px'
    }
}))

export const TitleItineraty = styled(Typography)(({theme})=> ({
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
    marginBottom: '10px',
    padding: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '36px',
    },
}))

TitleItineraty

export const Description = styled(Typography)(({theme})=> ({
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    padding: '0',
}))
