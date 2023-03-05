import styled from "@emotion/styled";
import {
    Box,
    Grid,
    Link,
    Paper,
    Typography
} from "@mui/material";


export const ContainerContact = styled(Box)(()=> ({
    width: '100%',
    minHeight: '100vh',
    flexGrow: '1',
    marginTop: '20px',
}))

export const GridContainer = styled(Grid)(()=> ({
    height: '100%',
}))

//////////////  GRID LEFT TOP //////////////////////////////
//////////////  GRID LEFT TOP //////////////////////////////
export const GridItemLeftTop = styled(Grid)(({theme})=> ({
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    lineHeight: '0',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        minHeight: '40vh',
    },
}))

export const TitleSection = styled(Typography)(({theme})=> ({
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
        textAlign: 'center',
    },
}))

export const SubtitleOne = styled(Typography)(()=> ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
}))

export const SubtitleTwo = styled(Typography)(()=> ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
}))

export const WrapperIsologo = styled(Box)(()=> ({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
}))

export const WrapperInfoContact = styled(Box)(({theme})=> ({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
    },
}))

export const WrapperDetail = styled(Box)(({theme})=> ({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}))

export const TextWhatsapp = styled(Link)(({theme})=> ({
    fontSize: '16px',
    marginLeft: '10px',
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
    '&:hover': {
        color: theme.palette.secondary.main
    },
}))

export const TextEmail = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    marginLeft: '10px',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}))

export const ImageIsologo = styled('img')(({src, theme})=> ({
  src: `url(${src})`,
  width: '170px',
  [theme.breakpoints.down('sm')]: {
    width: '100px'
  }
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
        minHeight: '60vh',
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
        marginBottom: '10px',
    },

}))
