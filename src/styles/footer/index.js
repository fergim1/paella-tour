import styled from "@emotion/styled";
import { Box, Link, Stack, Typography } from "@mui/material";



export const ContainerFooter = styled(Box)(()=> ({
    width: '100%',
    height: '240px'
}))

export const WrapperContent = styled(Stack)(({theme})=> ({
    width: '100%',
    height:'100%',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px 60px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')] : {
        padding: '5%',
    }
}))

export const WrapperSocialNetworks = styled(Box)(()=> ({
    width: '100%',
    height: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
}))

export const LinkInstagram = styled(Link)(({theme})=> ({
    fontSize: '24px',
    color: "white",
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.secondary.main
    },
}))

export const LinkTripAdvisor = styled(Link)(({theme})=> ({
    fontSize: '26px',
    color: "white",
    marginLeft: '20px',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.secondary.main
    },
}))

export const WrapperAllItems = styled(Stack)(({theme})=> ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
}))

export const WrapperThreeItems = styled(Stack)(({theme})=> ({
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    [theme.breakpoints.down('md')] : {
        width: '50%',
    },
    [theme.breakpoints.down('sm')] : {
        flexDirection: 'column'
    }
}))

export const LinkItem = styled(Link)(({theme})=> ({
    textDecoration: 'none',
}))

export const Item = styled(Typography)(({theme})=> ({
    fontSize: '14px',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.secondary.main
    },
    [theme.breakpoints.down('sm')] : {
        margin: '6px',
    }
}))

export const WrapperCopyright = styled(Stack)(()=> ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12px',
}))

export const TextCopyright = styled(Typography)(({theme})=> ({
    fontSize: '12px',
    color: 'grey',
    // fontWeight: 'bold',
    // margin: '20px',
    [theme.breakpoints.down('sm')] : {
        // fontSize: '10px',
    }
}))

