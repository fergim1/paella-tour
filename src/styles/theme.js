import { createTheme } from "@mui/material/styles";
import { amber, orange } from '@mui/material/colors';


export const Colors = {
    primary: { main: amber[500], ligth: amber[300], dark: amber[700] },
    secondary: { main: orange[900], ligth: orange[800] },
}


const theme = createTheme({
    palette: {
        primary: Colors.primary,
        secondary: Colors.secondary,
        background: {
            default: '#fff'
        }
    },
    typography: {
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
        h1 : { fontSize: '24px'},
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'customItemsNav' },
                    style: {
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        boxShadow: 'none',
                        textTransform: 'none',
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        '&:hover': {
                            color: Colors.secondary.main,
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            color: Colors.secondary.main,
                        },
                        '&:focus': {
                            color: Colors.secondary.main,
                        },
                    },
                },
                // {
                //     props: { variant: '' },
                //     style: {
                //     },
                // },
            ],
        },
      },
})

export { theme }