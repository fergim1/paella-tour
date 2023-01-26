import styled from "@emotion/styled";
import { Accordion, Box, Paper, Typography } from "@mui/material";



export const FAQContainer = styled(Box)(({theme})=> ({
    width: '100%',
    minHeight: '100vh',
    maxHeight: 'auto',
    // height: '100vh',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0px',
    backgroundColor:'#faebd7',
    // backgroundImage: `url(${ FAQbackground })`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: 'cover',
}))

export const FAQWraper = styled(Paper)(({theme})=> ({
    
    borderRadius: '12px',
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

export const FAQTitle = styled(Typography)(({theme})=> ({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '12px'
    }
}))

export const FAQAccordion = styled(Accordion)(()=> ({
    width: '95%',
    padding: '12px',
}))

export const FAQTextQuestion = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
}))

export const FAQTextAnswer = styled(Typography)(({theme})=> ({
    fontSize: '14px',
    color: '#787976',
}))