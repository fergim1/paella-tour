import styled from "@emotion/styled";
import {
    Button,
    Grid,
    Box,
    Stack,
    Typography,
    IconButton,
    FormControl,
    Select,
    MenuItem
} from "@mui/material";



export const Containter = styled(Box)(()=>({
    width: '100%',
    height: '100vh',
    flexGrow: '1',
}))

export const GridContainer = styled(Grid)(({})=> ({
}))

//////////////////////////////////////////////////////////////////
////////////////////////  LEFT - TOP  ////////////////////////
export const GridItemLeftTop = styled(Grid)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        height: '60vh',
        alignItems: 'center',
        padding: '0',
    },
}))

export const WrapperLeftTop = styled(Stack)(()=> ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const WrapperTitleAndSubtitle = styled(Stack)(({theme})=> ({
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        paddingTop: '20px',
    }
}))

export const TitleBookNow = styled(Typography)(({theme})=> ({
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
    [theme.breakpoints.down('md')]: {
        margin: '0',
        fontSize: '36px',
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: '20px',
    }
}))

export const WrapperSubtitles = styled(Stack)(()=> ({
    flexDirection: 'column',
    alignItems: 'center',
}))

export const SubtitlePrice = styled(Typography)(({theme})=> ({
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: '-.02em',
    color: '#7b7b7b',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
    }
}))

export const SubtitleDescription = styled(Typography)(({theme})=> ({
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: '-.02em',
    color: '#a8a8a8',
    [theme.breakpoints.down('md')]: {
        marginBottom: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: '0px',
    }
}))

//////////////////////////////////////////////////////////////////
////////////////////////  RIGHT - BOTTOM  ////////////////////////
export const GridItemRightBottom = styled(Grid)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    alignItems: 'start',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
        height: '40vh',
        padding: '0 0 0 0',
        margin: '0 0',
        alignItems: 'center',
    },
}))

export const WrapperRightBottom = styled(Stack)(({theme})=> ({
    backgroundColor: '#e6e6e6',
    borderRadius: '30px',
    padding: '0px 30px 0px 30px',
    width: '90%',
    maxWidth: '450px',
    height: '70%',
    maxHeight: '450px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        width: '95%'
    },
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'start',
        bottom: '0',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        justofyContent: 'space-around',
        padding: '30px 5px 0 5px',
    }
}))

export const WrapperInfo = styled(Stack)(({theme})=> ({
    width: '90%',
    height: '50px',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',
    },
}))

export const WrapperIcon = styled(Box)(() => ({
    width: '15%',
    display: 'grid',
    placeContent: 'center',
}))

export const Icon = styled(IconButton)(() => ({
    fontSize: 'large',
    color: '#616161',
    padding: '4px',
}))

export const WrapperDetail = styled(Box)(() => ({
    width: '85%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
}))

export const WrapperButtom = styled(Stack)(({theme})=> ({
    width: '85%',
    height: '50px',
    alignItems: 'center',
    justifyContent:'center',
    margin: '8px 0 0 0',
    padding: '0',
    [theme.breakpoints.down('md')]: {
        width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',

    }
}))

export const TextDate = styled(Typography)(({theme})=> ({
    margin: '0',
    color: '#666666',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        margin: '0',
    }
}))

export const Timetable = styled(Button)(({theme})=> ({
    backgroundColor: '#d8d8d8',
    textTransform: 'lowercase',
    fontSize: '14px',
    borderRadius: '20px',
    color: '#666666' ,
    width:'80px',
    height:'26px',
    marginLeft: '12px',
    '&:hover': {
        border: `2px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('md')]: {
        width:'80px',
        height:'26px',
    }
}))

export const FormControlQuantity = styled(FormControl)(()=> ({
}))

export const SelectQuantity = styled(Select)(({theme})=> ({
    width: '40px',
    height: '20px',
    borderBottom: 'none',
    marginRight: '32px',
    '& .MuiInput-input': {
        padding: '6px'
    },
    [theme.breakpoints.down('md')]: {
        marginRight: '16px'
    },
    [theme.breakpoints.down('sm')]: {
       marginRight: '32px',
    }
}))

export const MenuItemQuantity = styled(MenuItem)(()=> ({
}))

export const TextQuantity = styled(Typography)(()=> ({
    margin: '0px 12px 0 0px',
    color: '#3c3c3c',
}))

export const TextTotal = styled(Typography)(()=> ({
    margin: '0px 12px 0 0px',
    color: '#3c3c3c',
    fontWeight: 'bold',

}))

export const ButtomBuyTicket = styled(Button)(({theme})=> ({
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: 'white',
    borderRadius: '20px',
    fontWeight: 'bold',
    width:'100%',
    height:'40px',
    marginTop: '40px',
    '&:focus': {
        background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '15px'
    }
}))
