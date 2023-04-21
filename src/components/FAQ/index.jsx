////////////// Component Material UI ///////////////////////////////////////////////
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

////////////// Component Styles ///////////////////////////////////////////////
import {
    ContainerFAQ,
    Wrapper,
    Title,
    AccordionQuestion,
    Question,
    Answer,
} from '../../styles/FAQ';

////////////// UI Icons ///////////////////////////////////////////////
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

////////////// Context /////////////////////////////////////////////
import { useContext } from 'react';
import { AppContext } from '../../context/index'
import { useLanguage } from '../../hooks/useLanguage';

////////////// Text of FAQs ///////////////////////////////////////////
import { textFAQ } from '../../constants/index'


const FrequentlyAskedQuestions = () => {
    const { language } = useContext(AppContext)
    const text = useLanguage(language, textFAQ)

    return (
        <ContainerFAQ id='FAQ'>
            <Wrapper>
                <Title> {text.title} </Title>
                {
                    text.FAQ.map((oneFaq, index) => {
                        return (
                            <AccordionQuestion key={index}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon color='secondary' />} >
                                    <Question>{oneFaq.question}</Question>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Answer> {oneFaq.answer} </Answer>
                                </AccordionDetails>
                            </AccordionQuestion>
                        )
                    })
                }
            </Wrapper>
        </ContainerFAQ>
    );
}

export { FrequentlyAskedQuestions }