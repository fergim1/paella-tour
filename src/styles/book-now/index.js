import styled from "@emotion/styled";
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";


export const BookNowContainter = styled(Box)(()=>({
    width: '100%',
    height: '100vh',
    flexGrow: '1',
}))

export const BookNowGridContainer = styled(Grid)(({})=> ({
}))

export const BookNowGridItemCalendar = styled(Grid)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    // paddingRight: '10%',
    [theme.breakpoints.down('md')]: {
        // paddingRight: '35px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '55vh',
        alignItems: 'center',
        padding: '0',
    },
}))

export const BookNowGridItemDetails = styled(Grid)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',

    alignItems: 'start',
    padding: '0px',

    [theme.breakpoints.down('sm')]: {
        height: '45vh',
        padding: '0 0 0 0',
        margin: '0 0',
        alignItems: 'center',

    },
}))
export const BookNowTitle = styled(Typography)(({theme})=> ({
    fontSize: '40px',
    fontWeight: '800',
    letterSpacing: '-0.06em',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(90deg,#e8502b, #f9c301 )',
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    lineHeight: '1',
    letterSpacing: '-.06em',
    [theme.breakpoints.down('md')]: {
        margin: '0',
        fontSize: '35px',
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: '20px',
    }
}))

export const BokNowSubtitle = styled(Typography)(({theme})=> ({
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: '-.02em',
    color: '#7b7b7b',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
    }
}))

export const BookNowSpan = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: '-.02em',
    color: '#a8a8a8',
    [theme.breakpoints.down('md')]: {
        marginBottom: '20px',
    }
}))




export const BookNowWrapperTimeQty = styled(Stack)(({theme})=> ({
    backgroundColor: '#e6e6e6',
    borderRadius: '30px',
    padding: '0px 30px 0px 30px',
    width: '80%',
    maxWidth: '550px',
    height: '70%',
    maxHeight: '450px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        bottom: '0',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
        height: '100%',
        width: '100%',
        justofyContent: 'space-around',
        padding: '0 5px 0 5px',
    }
}))

// export const BookNowWrapperTitle = styled(Stack)(()=> ({

// }))

export const BookNowTitleDate = styled(Typography)(({theme})=> ({
    margin: '0',
    color: '#666666',
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    // borderBottom: '3px solid #d1d1d1',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        margin: '14px 0 0 20px',
    }
}))


export const BookNowStackTimes = styled(Stack)(({theme})=> ({
    flexWrap: 'wrap',
    width: '90%',
    height: '20%',
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}))

export const BookNowButtonTime = styled(Button)(({theme})=> ({
    backgroundColor: '#f8f8f8',
    textTransform: 'lowercase',
    fontSize: '13px',
    border: '2px solid transparent ',
    borderRadius: '6px',
    color: '#6d6d6d' ,
    width:'75px',
    height:'25px',
    '&:hover': {
        border: '2px solid #f9c301',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
        width:'70px',
        height:'20px',
    }
}))

export const BookNowTextQuantity = styled(Typography)(({theme})=> ({
    margin: '0px 12px 0 0px',
    color: '#3c3c3c',
    [theme.breakpoints.down('md')]: {
    }
}))

export const BookNowTextTotal = styled(Typography)(({theme})=> ({
    margin: '0px 12px 0 0px',
    color: '#3c3c3c',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
    }
}))


export const BookNowButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '8px',
    fontWeight: 'bold',
    margin: '20px',
    width:'100%',
    height:'40px',
    '&:focus': {
        backgroundColor: '#c39902',
    },
    '&:hover': {
        backgroundColor: '#c39902',
    },
    [theme.breakpoints.down('md')]: {
        width:'80%',
        margin: '20px',
        
    }
}))
