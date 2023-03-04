////////////// Components Style ///////////////////////////////////////////
import {
    ContainerDrawer,
    Flag,
    Item,
    Line,
    Instagram,
    LinkItem,
    TripAdvisor,
    ListItems,
    Logo,
    WrapperFlags,
    WrapperIcons,
    WrapperLogo,
    WrapperSocial,
    OneItem,
    OneItemButton,
    OneItemText
 } from '../../styles/sidebar/index'

////////////// Logo ///////////////////////////////////////////
import logoDrawer from '../../assets/logo-drawer.png'

////////////// Context ///////////////////////////////////////////
import { AppContext } from '../../context';
import { useContext } from 'react';

////////////// Flags ///////////////////////////////////////////
import EnglishFlag from '../../assets/flags/EnglishFlag';
import SpanishFlag from '../../assets/flags/SpanishFlag';

////////////// Icons ///////////////////////////////////////////
import { SiTripadvisor } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

////////////// Text of Sections ///////////////////////////////////////////
import { Sections } from '../../constants/index.js'

////////////// Hooks ///////////////////////////////////////////
import { useLanguage } from '../../hooks/useLanguage';

////////////// Scroll to Top ///////////////////////////////////////////
import { animateScroll } from 'react-scroll';


////////////// MAIN COMPONENT ///////////////////////////////////////////
////////////// MAIN COMPONENT ///////////////////////////////////////////
const ContentDrawer = ({ handleDrawerToggle}) => {
    const { language, setLanguage }  = useContext(AppContext)
    const navItems = useLanguage(language, Sections)

    const itemsInEnglish = [...Sections.english]

    const handleLanguage = (language) => {
        setLanguage(language)
    }

    const scrollToTop = () => {
        animateScroll.scrollToTop()
        handleDrawerToggle;
    }

    return (
    <ContainerDrawer onClick={ handleDrawerToggle }>

        <WrapperLogo >
            <Logo
                src={ logoDrawer }
                alt='logo-paella-tour'
                onClick={scrollToTop}
                loading='lazy'
            />
        </WrapperLogo>

        <Line />

        <ListItems >
            {navItems.map((item, index) => (
                <OneItem key={item} disablePadding >
                    <OneItemButton >
                        <OneItemText>
                            <LinkItem
                                to={`${itemsInEnglish[index]}`}
                                onClick={ handleDrawerToggle }
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={0}
                            >
                                <Item>
                                    {item}
                                </Item>
                            </LinkItem>
                        </OneItemText>
                    </OneItemButton>
                </OneItem>
            ))}
        </ListItems>

        <WrapperIcons >
            <WrapperFlags>
                <Flag onClick={() => handleLanguage('en')} aria-label="English" >
                    <EnglishFlag />
                </Flag>

                <Flag onClick={() => handleLanguage('es')} aria-label="Spanish" >
                    <SpanishFlag />
                </Flag>
            </WrapperFlags>

            <WrapperSocial>
                <Instagram href='https://www.instagram.com/paellatour' target="_blank" rel="noreferrer">
                    <FiInstagram/>
                </Instagram>

                <TripAdvisor href='https://www.tripadvisor.es/' target="_blank" rel="noreferrer">
                    <SiTripadvisor/>
                </TripAdvisor>
            </WrapperSocial>
        </WrapperIcons>
    </ContainerDrawer>
)}

export { ContentDrawer }