
///////////// TOUR SCHEDULES  ///////////////////////////////////
export const TIMES = ['12:00', '19:00']

//////  QUANTITIES OF TICKETS AVAILABLE TO BUY  /////////////////////////////
export const QUANTITIES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

//////  DAYS DISABLE (When can't do the tour) //////////////////////////////////////////
//              Format: 2023-02-03 = Saturday, 2nd February 2023
//                      YYYY-MM-DD  (Y = year ; M = month ; D = day)
export const DISABLED_DAYS = ["2023-02-02", "2023-02-03", "2023-02-05", "2023-03-10", "2023-03-11", "2023-03-15"]

//////  STOPS FOR ITINERARY ///////////////////////////////////////////
import imgStop0 from '../../imagenes/itinerary/stop0.1.png'
import imgStop1 from '../../imagenes/itinerary/stop1.jpg'
import imgStop2 from '../../imagenes/itinerary/stop2.2.jpg'
import imgStop3 from '../../imagenes/itinerary/stop3.jpg'
export const STOPS = [
  {
    imgSRC: imgStop0,
    caption: 'Meeting Point',
    title: 'Encuentro + Info ',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
  }, 
  {
    imgSRC: imgStop1,
    caption: 'First Stop',
    title: 'Tapeo + vermuth',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. ',
  },
  {
    imgSRC: imgStop2,
    caption: 'Second Stop',
    title: 'Ver cocina + Paella',
    description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
  },
  {
    imgSRC: imgStop3,
    caption: 'Third Stop',
    title: 'Orchateria/Churros Experiences,',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  ];
///////////// end of STOPS FOR ITINERARY /////////////////////////////

export const STOPS2 = [
  {
    english: {
        imgSRC: imgStop0,
        caption: 'Meeting Point',
        title: 'Meeting + Info ',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
    },
    spanish: {
      imgSRC: imgStop0,
      caption: 'Punto de Encuentro',
      title: 'Encuentro + Info ',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
    }
  },
  {
    english: {
      imgSRC: imgStop1,
      caption: 'First Stop',
      title: 'Tapeo + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
    },
    spanish: {
      imgSRC: imgStop1,
      caption: 'Primera parada',
      title: 'Tapas + vermuth',
      description: 'There are many variations of passages of Lorem Ipsum available. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.',
  
    }
  },
  {
    english: {
      imgSRC: imgStop2,
      caption: 'Second Stop',
      title: 'See kitchen + Paella',
      description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    },
    spanish: {
      imgSRC: imgStop2,
      caption: 'Segunda Parada',
      title: 'Ver cocina + Paella',
      description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    }
  },
  {
    english: {
      imgSRC: imgStop3,
      caption: 'Third Stop',
      title: 'Orchateria Experiences,',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    spanish: {
      imgSRC: imgStop3,
      caption: 'Tercera Parada',
      title: 'Orchateria',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  },
  ];


