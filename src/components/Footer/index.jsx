///////////////////// Components Styles ///////////////////////////////////
import {
    ContainerFooter,
    LinkInstagram,
    LinkTripAdvisor,
    WrapperContent,
    WrapperSocialNetworks,
    WrapperAllItems,
    WrapperThreeItems,
    LinkItem,
    Item,
    WrapperCopyright,
    TextCopyright,
 } from "../../styles/footer"

  ////////////// Context /////////////////////////////////////////////
  import { AppContext } from '../../context';
  import { useLanguage } from '../../hooks/useLanguage';
import { useContext } from "react";

////////////// Icons ///////////////////////////////////////////
import { SiTripadvisor } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

  ////////////// Text of Items ///////////////////////////////////////////
  import { Sections } from '../../constants/index'



const FooterPage = () => {
    const {language} = useContext(AppContext)
    const items = useLanguage(language, Sections)

    const firstThreeItems = items.slice(0,3)
    const lastThreeItems = items.slice(3,6)


    const itemsInEnglish = [...Sections.english]

    const scrollFirstThree = (index) => {
        document.getElementById(itemsInEnglish[index]).scrollIntoView({behavior: 'smooth'})
    }

    const scrollLastThree = (index) => {
        let indexPlusThree = index + 3
        document.getElementById(itemsInEnglish[indexPlusThree]).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <ContainerFooter id='Footer'>
            <WrapperContent >

                <WrapperSocialNetworks >
                    <LinkInstagram href='https://www.instagram.com/paellatour' target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FiInstagram/>
                    </LinkInstagram>

                    <LinkTripAdvisor href='https://www.tripadvisor.es/' target="_blank" rel="noreferrer" aria-label="Tripadvisor">
                        <SiTripadvisor/>
                    </LinkTripAdvisor>
                </WrapperSocialNetworks>

                <WrapperAllItems>
                    <WrapperThreeItems >
                        {firstThreeItems.map((item, index)=> (
                            <LinkItem key={item} onClick={() => scrollFirstThree(index)} >
                                <Item>{item}</Item>
                            </LinkItem>
                        ))}
                    </WrapperThreeItems>
                    <WrapperThreeItems  >
                        {lastThreeItems.map((item, index)=> (
                            <LinkItem key={item} onClick={() => scrollLastThree(index)}>
                                <Item>{item}</Item>
                            </LinkItem>
                        ))}
                    </WrapperThreeItems>
                </WrapperAllItems>

                <WrapperCopyright>
                    <TextCopyright>© {new Date().getFullYear()} All rights reserved.</TextCopyright>
                </WrapperCopyright>

            </WrapperContent>

        </ContainerFooter>
    )
}

export default FooterPage