import {useContext} from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQAccordion, FAQAnswer, FAQContainer, FAQQuestion, FAQTitle, FAQWraper } from '../../styles/FAQ';
import {AppContext} from '../../context/index'
import { useLanguage } from '../../hooks/useLanguage';


const textSection = {
    english: {
        title: 'FAQ!',
        FAQ:
        [
            {
                question: 'How much walking is there on the Paella Tour?',
                answer: 'We’ve selected locations that are all pretty close to each other.  Spread out enough that you can see the neighborhood and have a little break between each stop, but it’s definitely not strenuous.  Usually 3-4 blocks between each stop',        
            },
            {
                question: 'How long it the Paella Tour?',
                answer: '3 - 3.5 hours',
            },
            {
                question: 'How long it the Paella Tour?',
                answer: '3 - 3.5 hours',
            },
            {
                question: 'What is the Paella Tour cancelation policy',
                answer: 'Here is a link to our cancelation policy',
            },
            {
                question: 'What is the Paella Tour cancelation policy',

                answer: 'Here is a link to our cancelation policy',
            },
            {
                question: 'What is the Paella Tour cancelation policy',

                answer: 'Here is a link to our cancelation policy',
            }
        ]
    },
    spanish: {
        title: 'Preguntas frecuentes !',
        FAQ: 
        [
            {
                question: 'Cuánto hay que caminar en Paella tour?',
                answer: 'Hemos seleccionado ubicaciones que están bastante cerca unas de otras. Espárzase lo suficiente para que pueda ver el vecindario y tenga un pequeño descanso entre cada parada, pero definitivamente no es extenuante. Usualmente 3-4 cuadras entre cada parada',
        
            },
            {
                question: '¿Cuánto dura Paella tour?',
                answer: '3 - 3.5 horas',
            },
            {
                question: '¿Cuánto dura Paella tour?',
                answer: '3 - 3.5 horas',
            },
            {
                question: '¿Cuál es la política de cancelación?',
                answer: 'bla bla bla bla bla',
            },
            {
                question: '¿Cuánto dura Paella tour?',
                answer: '3 - 3.5 horas',
            },
            {
                question: '¿Cuál es la política de cancelación?',
                answer: 'bla bla bla bla bla',

            },
        ]
    }
}

function FrequentlyAskedQuestions() {
    const {language} = useContext(AppContext)
    const text = useLanguage(language, textSection)

  return (
    <FAQContainer id='FAQ'>
        <FAQWraper>
            <FAQTitle>
                {text.title}
            </FAQTitle>
            {
                text.FAQ.map((oneFaq, index) => {
                    return(
                    <FAQAccordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color='secondary' />}
                        >
                            <FAQQuestion>{oneFaq.question}</FAQQuestion>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FAQAnswer> {oneFaq.answer} </FAQAnswer>
                        </AccordionDetails>
                </FAQAccordion>
                )})
            }
      </FAQWraper>
    </FAQContainer>
  );
}

export { FrequentlyAskedQuestions }