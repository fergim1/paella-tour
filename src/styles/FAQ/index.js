import styled from "@emotion/styled";
import { Accordion, Box, Paper, Typography } from "@mui/material";



export const ContainerFAQ = styled(Box)(()=> ({
    width: '100%',
    minHeight: '100vh',
    maxHeight: 'auto',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0px',
    backgroundColor:'#faebd7',
}))

export const Wrapper = styled(Paper)(({theme})=> ({
    borderRadius: '20px',
    backgroundColor: '#fbfbfd',
    width: '60%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 10px',
    [theme.breakpoints.down('md')]: {
        width: '95%'
    }
}))

export const Title = styled(Typography)(({theme})=> ({
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

export const AccordionQuestion = styled(Accordion)(()=> ({
    width: '95%',
    padding: '12px',
}))

export const Question = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
}))

export const Answer = styled(Typography)(({theme})=> ({
    fontSize: '14px',
    color: '#787976',
}))