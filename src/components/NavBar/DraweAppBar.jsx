import { useContext, useState } from 'react';

///////////////////// Material UI Components ///////////////////////////////////
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide
} from '@mui/material';

////////////// Context /////////////////////////////////////////////
import { AppContext } from '../../context';
import { useLanguage } from '../../hooks/useLanguage';

//////////  UI Icons ///////////////////////////////////////////////
import MenuIcon from '@mui/icons-material/Menu';

//////////  Logo ///////////////////////////////////////////////
import logo from '../../assets/logo.png'

//////////  Components //////////////////////////////////////////////
import { SideBar } from '../SideBar/index';
import { SelectLanguage } from './SelectLanguage';

////////////// Text of NavItems ///////////////////////////////////////////
import { Sections } from '../../constants/index'

////////////// Slide ///////////////////////////////////////////
function HideOnScroll ({ children }) {
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      {children}
    </Slide>
  );
}



function DrawerAppBar (props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useContext(AppContext)
  const navItems = useLanguage(language, Sections)


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClickScroll = (index) => {
    const allItemsInEnglish = [...Sections.english]
    const itemInEnglish = allItemsInEnglish[index]
    document.getElementById(itemInEnglish).scrollIntoView({ block: "start", behavior: "smooth" })
  }

  const scroollToTop = () => {
    document.getElementById('Home').scrollIntoView('alignToTop')
  }

  return (
    <Box sx={{ display: 'flex', height: '44px' }} >
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" >
          <Toolbar sx={{ backgroundColor: 'black' }} >
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ my: 1, flexGrow: { xs: 1 }, display: { xs: 'grid' }, placeContent: { xs: 'center', sm: 'start' }, cursor: 'pointer' }} >
              <img onClick={scroollToTop} src={logo} width='100px' alt='logo-paella-tour' loading='lazy' />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Button
                  onClick={() => handleClickScroll(index)}
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
      />
      <Toolbar />
    </Box>
  );
}

export { DrawerAppBar }
