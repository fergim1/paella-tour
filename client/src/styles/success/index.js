import styled from "@emotion/styled";
import { Box, Container, Typography } from '@mui/material'



export const ContainerSuccess = styled(Container)(({})=> ({
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    backgroundColor: 'black',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
}))

export const WrapperContent = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '80%',
    height: '60%',
    [theme.breakpoints.down('sm')]: {
    width: '90%',
    }
}))

export const WrapperLogo = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    cursor: 'pointer',
    marginBottom: '30px'
}))

export const Logo = styled('img')(({theme})=> ({
    width: '100px',
}))

export const Title = styled(Typography)(()=> ({
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
}))

export const SubTitle = styled(Typography)(()=> ({
    fontSize: '16px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '10px',
}))
