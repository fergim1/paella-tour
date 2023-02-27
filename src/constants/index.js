//////////////  Sections ///////////////////////////////////////////
/////////////////////////////////////  Sections ////////////////////
export const Sections = {
  english: ['Itinerary', 'Book Now', 'Private Tour', 'Who we are', 'FAQ', 'Contact'],
  spanish: ['Itinerario', 'Reservar', 'Tour Privado', 'Nosotros', 'FAQ', 'Contacto'],
}
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//////////////  url Cloudinary Image  ///////////////////////////////////////////
/////////////////////////////////    url Cloudinary Image   ////////////////////
export const urlImages = {
  homeDesktop: 'https://res.cloudinary.com/fergim1/image/upload/v1677265875/Paella%20Tour/home-desktop_cnrhsy.jpg',
  homeMobile: 'https://res.cloudinary.com/fergim1/image/upload/v1677265875/Paella%20Tour/home-mobile_ugqr2m.jpg',
  itineraryStep0Desktop: 'https://res.cloudinary.com/fergim1/image/upload/v1677500063/Paella%20Tour/stop0-1_udncge.png',
  itineraryStep0Mobile: 'https://res.cloudinary.com/fergim1/image/upload/v1677262689/Paella%20Tour/stop0-mobile_wfezfo.jpg',
  itineraryStep1Desktop: 'https://res.cloudinary.com/fergim1/image/upload/v1677249233/Paella%20Tour/stop1-desktop_g1cjob.jpg',
  itineraryStep1Mobile: 'https://res.cloudinary.com/fergim1/image/upload/v1677249779/Paella%20Tour/stop1-mobile_w6vfis.jpg',
  itineraryStep2Desktop: 'https://res.cloudinary.com/fergim1/image/upload/v1677249856/Paella%20Tour/stop2-desktop_brktxo.jpg',
  itineraryStep2Mobile: 'https://res.cloudinary.com/fergim1/image/upload/v1677249856/Paella%20Tour/stop2-mobile_u5ze9z.jpg',
  itineraryStep3Desktop: 'https://res.cloudinary.com/fergim1/image/upload/v1677499709/Paella%20Tour/stop3-desktop2_auwqv6.jpg',
  itineraryStep3Mobile: 'https://res.cloudinary.com/fergim1/image/upload/v1677249856/Paella%20Tour/stop3-mobile_wkfl2u.jpg',
  emailSent: 'https://res.cloudinary.com/fergim1/image/upload/v1677266193/Paella%20Tour/email-sent_sfkhzz.png',
  smoke: 'https://res.cloudinary.com/fergim1/image/upload/v1677266197/Paella%20Tour/smoke_vm5ayw.png',
}

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
export const textItinerary = [
  {
    english: {
        title: 'Itinerary',
        imgDesktop: urlImages.itineraryStep0Desktop,
        imgMobile: urlImages.itineraryStep0Mobile,
        caption: 'Meeting Point',
        titleStop: 'Meeting + Info ',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.',
    },
    spanish: {
      title: 'Itinerario',
      imgDesktop: urlImages.itineraryStep0Desktop,
      imgMobile: urlImages.itineraryStep0Mobile,
      caption: 'Punto de Encuentro',
      titleStop: 'Encuentro + Info ',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.',
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgDesktop: urlImages.itineraryStep1Desktop,
      imgMobile: urlImages.itineraryStep1Mobile,
      caption: 'First Stop',
      titleStop: 'Tapeo + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
    },
    spanish: {
      title: 'Itinerario',
      imgDesktop: urlImages.itineraryStep1Desktop,
      imgMobile: urlImages.itineraryStep1Mobile,
      caption: 'Primera parada',
      titleStop: 'Tapas + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgDesktop: urlImages.itineraryStep2Desktop,
      imgMobile: urlImages.itineraryStep2Mobile,
      caption: 'Second Stop',
      titleStop: 'See kitchen + Paella',
      description: "All the Lorem Ipsum generators on the Internet, combined with a combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    },
    spanish: {
      title: 'Itinerario',
      imgDesktop: urlImages.itineraryStep2Desktop,
      imgMobile: urlImages.itineraryStep2Mobile,
      caption: 'Segunda Parada',
      titleStop: 'Ver cocina + Paella',
      description: "All the Lorem Ipsum generators on the Internet, combined with a combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    }
  },
  {
    english: {
      title: 'Itinerary',
      imgDesktop: urlImages.itineraryStep3Desktop,
      imgMobile: urlImages.itineraryStep3Mobile,
      caption: 'Third Stop',
      titleStop: 'Orchateria Experiences,',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    spanish: {
      title: 'Itinerario',
      imgDesktop: urlImages.itineraryStep3Desktop,
      imgMobile: urlImages.itineraryStep3Mobile,
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
      time: 'Schedule',
      quantity: 'Guest',
      phone: 'Phone',
      buttonText: 'Buy TICKETS',
      alertTitle: 'Some field is missing',
      alertTime: "You haven't chosen a schedule yet",
      alertPhone: "You haven't completed your phone number",
  },
  spanish: {
      title: 'Reservar',
      subtitle: '80 € por persona',
      span: ' Incluye bebida y comida ',
      time: 'Horario',
      quantity: 'Cantidad',
      phone: 'Móvil',
      buttonText: 'Comprar TICKETS',
      alertTitle: 'Falta completar algún campo',
      alertTime: 'Tienes que elegir un horario para el tour',
      alertPhone: 'Falta completar el móvil',
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


////////////// PRIVATE TOUR ///////////////////////////////////////////
//////////////////////////////////// PRIVATE TOUR /////////////////////
export const textPrivateTour = {
  english: {
      title: 'Private Tour',
      subtitle: 'We can not make your trip eternal, but unforgettable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      titleForm: 'Drop us a line',
  },
  spanish: {
      title: 'Tour Privado',
      subtitle: 'No podemos hacer que tu viaje sea eterno, pero si inolvidable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      titleForm: 'Escríbanos',
  }
}
/////////////////////////////////////////////////////////////////////


//////////////  FORM  ///////////////////////////////////////////
////////////////////////////////////  FORM /////////////////////
export const textForm = {
  english: {
      inputName: 'Name *',
      inputEmail: 'Email *',
      inputMessage: 'Message *',
      inputMessageTextHelp: '* All fields are required',
      buttonText: 'Just send',
      alertTitle: '⚠️ Some field is missing',
      alertName: "You haven't completed your Name",
      alertEmail: "You haven't completed your Email",
      alertMessage: "You haven't written a message",
      textSent: "Message sent ✔️",
      invalidEmail: 'Invalid email',
  },
  spanish: {
      inputName: 'Nombre *',
      inputEmail: 'Email *',
      inputMessage: 'Mensaje *',
      inputMessageTextHelp: '* Todos los campos son requeridos',
      buttonText: 'Enviar',
      alertTitle: '⚠️ Falta completar algún campo',
      alertName: 'No has escrito tu nombre',
      alertEmail: 'No has escrito tu email',
      alertMessage: 'No has escrito un mensaje',
      textSent: "Mensaje enviado ✔️",
      invalidEmail: 'Email inválido',
  }
}
/////////////////////////////////////////////////////////////////////

////////////// ALERT FORM  ///////////////////////////////////////////
//////////////////////////////////// ALERT FORM /////////////////////
export const textAlertForm = {
  english: {
      alertTitle: 'Some field is missing ⚠️',
      alertName: "You haven't completed your Name",
      alertEmail: "You haven't completed your Email",
      alertMessage: "You haven't written a message",
  },
  spanish: {
      alertTitle: 'Falta completar algún campo ⚠️',
      alertName: 'No has escrito tu nombre',
      alertEmail: 'No has escrito tu email',
      alertMessage: 'No has escrito un mensaje',
  }
}
/////////////////////////////////////////////////////////////////////

//////////////  FAQ  /////////////////////////////////////////
/////////////////////////////////////  FAQ  //////////////////
export const textFAQ = {
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



////////////// CONTACT ///////////////////////////////////////////
//////////////////////////////////// CONTACT /////////////////////
export const textContact = {
  english: {
      titleSection: 'Contact us',
      subtitleOne: 'Love to hear from you,',
      subtitleTwo: 'Get in touch ',
      titleForm: 'Contact us',
      inputName: 'Name *',
      inputEmail: 'Email *',
      inputMessage: 'Message *',
      inputMessageTextHelp: '* All fields are required',
      buttonText: 'Just send',

  },
  spanish: {
      titleSection: 'Contacto',
      subtitleOne: 'Nos encantaría saber de ti,',
      subtitleTwo: 'Escríbenos',
      titleForm: 'Contacto',
      inputName: 'Nombre *',
      inputEmail: 'Email *',
      inputMessage: 'Mensaje *',
      inputMessageTextHelp: '* Todos los campos son requeridos',
      buttonText: 'Enviar',


  }
}
/////////////////////////////////////////////////////////////////////



////////////// SUCCESS ///////////////////////////////////////////
//////////////////////////////////// SUCCESS /////////////////////
export const textSuccess = {
  english: {
      title: 'Thank you for your purchase in Paella Tour',
      subtitleOne: 'In the next minutes you will receive an email with all the information.',
      subtitleTwo: 'If you have any questions, you can write to WhatsApp +34 687 489 741 ',
      sign: 'Paella Tour',
  },
  spanish: {
      title: 'Gracias por tu compra en Paella Tour',
      subtitleOne: 'En breve le llegará un email con toda la información',
      subtitleTwo: 'Cualquier duda puedes escribirnos al Whatsapp +34 687 489 741 ',
      sign: 'Paella Tour',
  }
}
/////////////////////////////////////////////////////////////////////

