//////////////  HOME ///////////////////////////////////////////
/////////////////////////////////////  HOME ////////////////////
export const textHome = {
  english: {
      subtitle: 'A delicious way to discover',
      button: 'See Itinerary'
  },
  spanish: {
      subtitle: 'Un delicioso camino para descubrir',
      button: 'Ver Itinerario'
  }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



//////////////  ITINERARY ///////////////////////////////////////////
////////////////////////////////////  ITINERARY /////////////////////
import imgStop0 from '../../imagenes/itinerary/stop0.png'
import imgStop1 from '../../imagenes/itinerary/stop1.jpg'
import imgStop2 from '../../imagenes/itinerary/stop2.jpg'
import imgStop3 from '../../imagenes/itinerary/stop3.jpg'
export const STOPS2 = [
  {
    english: {
        title: 'Itinerary',
        imgSRC: imgStop0,
        caption: 'Meeting Point',
        titleStop: 'Meeting + Info ',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.',
    },
    spanish: {
      title: 'Itinerario',
      imgSRC: imgStop0,
      caption: 'Punto de Encuentro',
      titleStop: 'Encuentro + Info ',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.',
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgSRC: imgStop1,
      caption: 'First Stop',
      titleStop: 'Tapeo + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
    },
    spanish: {
      title: 'Itinerario',
      imgSRC: imgStop1,
      caption: 'Primera parada',
      titleStop: 'Tapas + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
  
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgSRC: imgStop2,
      caption: 'Second Stop',
      titleStop: 'See kitchen + Paella',
      description: "All the Lorem Ipsum generators on the Internet, combined with a combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    },
    spanish: {
      title: 'Itinerario',
      imgSRC: imgStop2,
      caption: 'Segunda Parada',
      titleStop: 'Ver cocina + Paella',
      description: "All the Lorem Ipsum generators on the Internet, combined with a combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgSRC: imgStop3,
      caption: 'Third Stop',
      titleStop: 'Orchateria Experiences,',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    spanish: {
      title: 'Itinerario',
      imgSRC: imgStop3,
      caption: 'Tercera Parada',
      titleStop: 'Orchateria',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  },
];
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



//////////////  BOOK NOW ///////////////////////////////////////////
/////////////////////////////////////  BOOK NOW ////////////////////
export const textBookNow = {
  english: {
      title: 'Book Now',
      subtitle: '80 € per guest',
      span: ' Include all food and drink ',
      guest: 'Guest :',
      total: 'Total:  € ',
      buttonText: 'Buy TICKETS',

  },
  spanish: {
      title: 'Reservar',
      subtitle: '80 € por persona',
      span: ' Incluye bebida y comida ',
      guest: 'Cantidad :',
      total: 'Total:  € ',
      buttonText: 'Comprar TICKETS',
  }
}

// Tour Schedules
export const TIMES = ['12:00', '19:00']

//  Quantities of tickets available to buy
export const QUANTITIES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

//  Days disable (When can't do the tour)
//      Format: 2023-02-03 = Saturday, 2nd February 2023
//      YYYY-MM-DD  (Y = year ; M = month ; D = day)
export const DISABLED_DAYS = ["2023-02-02", "2023-02-03", "2023-02-05", "2023-03-10", "2023-03-11", "2023-03-15"]
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



//////////////  ITINERARY  /////////////////////////////////////////
/////////////////////////////////////  ITINERARY  //////////////////
export const textItinerary = {
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
      title: 'FAQ!',
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
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



////////////// CONTACT ///////////////////////////////////////////
//////////////////////////////////// CONTACT /////////////////////
export const textContact = {
  english: {
      title: 'Love to hear from you,',
      subtitle: 'Get in touch ',
      formTitle: 'Contact us',
      inputName: 'Name *',
      inputEmail: 'Email *',
      inputMessage: 'Message *',
      inputMessageTextHelp: '* All fields are required',
      buttonText: 'Just send',

  },
  spanish: {
      title: 'Nos encantaría saber de ti,',
      subtitle: 'Escríbenos',
      formTitle: 'Contacto',
      inputName: 'Nombre *',
      inputEmail: 'Email *',
      inputMessage: 'Mensaje *',
      inputMessageTextHelp: '* Todos los campos son requeridos',
      buttonText: 'Enviar',


  }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
