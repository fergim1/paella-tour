import { useState } from 'react';

import { AppBar, Box,CssBaseline, IconButton, Toolbar, Button, useScrollTrigger, Slide } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/logo.png'

import { SideBar } from './SideBar';

import { SelectLanguage } from './SelectLanguage';


const navItems = ['Itinerary', 'Book Now', 'Private Tour', 'Who we are', 'FAQ', 'Contact'];

function HideOnScroll({children}) {
    return (
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
        {children}
      </Slide>
    );
}

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClickScroll = (item) => {
    document.getElementById(item).scrollIntoView({block: "start", behavior: "smooth"})

  }

  const scroollToTop = () => {
    document.getElementById('Home').scrollIntoView('alignToTop')
  }

  return (
    <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar component="nav" >
                <Toolbar sx={{backgroundColor: 'black'}} >
                    <IconButton
                    color="secondary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ my: 1, flexGrow: {xs: 1}, display: { xs: 'grid'}, placeContent: {xs: 'center', sm: 'start'}}} >
                        <img onClick={scroollToTop} src={ logo } width='100px' alt='logo-paella-tour'/>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                onClick={() => handleClickScroll(item)}
                                key={item}
                                variant='customItemsNav'
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <SelectLanguage />

                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <SideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle} 
            navItems={navItems}
        />
        <Toolbar />
    </Box>
  );
}

export {DrawerAppBar};
