import { 
    Offset,
    HomeContainer,
    HomeContent,
    HomeText,
    HomeTextAlicante,
    HomeButton
 } from "../../styles/home";

 import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Home = () => {

  return (
      <HomeContainer>
        <Offset />
        <HomeContent>
            <HomeText variant="subtitle">
                A delicious way to discover <br></br>
                <HomeTextAlicante variant='span'>
                Alicante
                </HomeTextAlicante>
            </HomeText>
            <HomeButton variant="contained" endIcon={<ArrowDropDownCircleIcon />}>
                See itinerary
            </HomeButton>
        </HomeContent>
      </HomeContainer>
  )
}

export { Home }