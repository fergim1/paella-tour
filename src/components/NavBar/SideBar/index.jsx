import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material';

import logoDrawer from '../../../assets/logo-drawer.png'
import { AppContext } from '../../../context';
import { useContext } from 'react';
import EnglishFlag from '../../../assets/flags/EnglishFlag';
import SpanishFlag from '../../../assets/flags/SpanishFlag';
import { Stack } from '@mui/system';


const SideBar = ({ mobileOpen, handleDrawerToggle,navItems, window }) => {
    const { setLanguage }  = useContext(AppContext)

    const setSpanish = () => {
        const language = 'ESP'
        setLanguage(language)
      }

      const setEnglish = () => {
        const language = 'ENG'
        setLanguage(language)
      }

    const drawer = (
        <Box onClick={ handleDrawerToggle } sx={{ textAlign: 'center' }}>

            <Box sx={{ my: 1 }}>
                <img src={ logoDrawer } alt='logo-paella-tour' width='150px' />
            </Box>

            <Divider color='#686868'/>

            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center'}}>
                            <ListItemText>
                                <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold', letterSpacing: '4px', my:1 }}>
                                    {item}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box fullwidth='true' sx={{display: 'flex', justifyContent: 'center'}}>
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={setEnglish} aria-label="English" >
                        <EnglishFlag />
                    </IconButton>
                    <IconButton onClick={setSpanish} aria-label="Spanish" >
                        <SpanishFlag />
                    </IconButton>
                </Stack>
            </Box>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 330;

    return (
        <Box component="nav">
            <Drawer
                anchor='left'
                container={ container }
                variant='temporary'
                open={ mobileOpen }
                onClose={ handleDrawerToggle }
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    '& .MuiPaper-root': { backgroundColor: '#060606'},
                }}
            >
                {drawer}
            </Drawer>
        </Box>
  )
}

export { SideBar }


