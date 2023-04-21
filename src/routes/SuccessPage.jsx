///////////////////// Components Styles //////////////////////////////////
import {
  ContainerSuccess,
  WrapperContent,
  Title,
  SubTitle,
  WrapperLogo,
  Logo,
} from '../styles/success'

//////////  Context //////////////////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../context"

////////////// Text of Success ///////////////////////////////////////////
import { textSuccess } from '../constants'

//////////////  Hook  ////////////////////////////////////////////////////
import { useLanguage } from '../hooks/useLanguage'

//////////  Logo /////////////////////////////////////////////////////////
import logo from '../assets/logo.png'

//////////  React Router Dom /////////////////////////////////////////////
import { useNavigate } from "react-router-dom";


//////////  Main Component - SuccessPage /////////////////////////////////////////////
//////////  Main Component - SuccessPage /////////////////////////////////////////////
function SuccessPage () {
  const { language } = useContext(AppContext)
  const text = useLanguage(language, textSuccess)
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/')
  }

  return (
    <ContainerSuccess maxWidth='false'>
      <WrapperContent>
        <WrapperLogo >
          <Logo
            onClick={backHome}
            src={logo}
            alt='logo-paella-tour'
          />
        </WrapperLogo>
        <Title> {text.title} </Title>
        <SubTitle> {text.subtitleOne} </SubTitle>
        <SubTitle> {text.subtitleTwo} </SubTitle>
      </WrapperContent>
    </ContainerSuccess>
  )
}

export { SuccessPage }

