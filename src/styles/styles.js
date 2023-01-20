import { createTheme } from "@mui/material/styles";


const Colors = {
    primary: '#f9c301',
    secondary: '#e54f29',
}


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        background: {
            default: '#fff'
        }
    },
    typography: {
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif'
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
                            color: Colors.secondary,
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            color: Colors.secondary,
                        },
                        '&:focus': {
                            color: Colors.secondary,
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