import styled from "@emotion/styled";
import {
    Link,
} from "@mui/material";


export const LinkWhatsapp = styled(Link)(({theme}) => ({
    position: 'fixed',
    width: '3rem',
    height: '3rem',
    bottom: '1rem',
    right: '1rem',
    backgroundColor: '#3fd13f',
    borderRadius: '50px',
    textAlign: 'center',
    zIndex: '10',
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    paddingBottom: '8px',
    '&hover': {
        color: '#3fd13f',
        backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
        width: '2.5rem',
        height: '2.5rem',
        padding: '6px'
    },
}))