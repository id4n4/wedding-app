import imgLogo from '../assets/SVGs/logo.svg'
import imgHero from '../assets/img-personal/hero.jpg'
import music from '../assets/music/Fonseca-QueSuerteTenerte.mp3'

import img1 from '../assets/img-personal/img1.jpg'
import img2 from '../assets/img-personal/img2.jpg'
import img3 from '../assets/img-personal/img3.jpg'
import img4 from '../assets/img-personal/img8.jpg'
import img5 from '../assets/img-personal/img5.jpg'
import img6 from '../assets/img-personal/img6.jpg'
import img7 from '../assets/img-personal/img7.jpg'

import timeLine from '../assets/SVGs/timeLine.svg'

import namesImg from '../assets/SVGs/novio_novia.svg'
import monograma from '../assets/SVGs/monogramas.svg'

// Al modificar los datos, se debe tener en cuenta:
// modificar index.html
// modificar Suggestions.jsx - urls
// modificar menu.css - img

export const content = {
  music,
  imgLogo,
  novio: {
    name: 'Jayr',
    parents: {
      father: 'Yolis Doria Escobar',
      mother: 'Calixto pacheco Noble'
    }
  },
  novia: {
    name: 'Mayra',
    parents: {
      father: 'Juan Torres Padilla (Q.E.P.D)',
      mother: 'Sara Sibaja Arcia'
    }
  },
  fecha: new Date('2024-12-30 19:00:00'),
  fechaConfirm: new Date('2024-11-15'),
  imgHero,
  phraseHero: ['El amor que ha crecido en nosotros desde la primera vez que nos conocimos, nos ha llevado hoy a buscar en Dios la gracia para formar un hogar. Por esta razón y después de compartir este tiempo juntos, hemos decidido casarnos y celebrarlo con las personas más especiales.', '¡Te esperamos!'],
  ceremony: {
    place: 'Parroquia San Pablo Apóstol',
    city: 'Montería',
    time: '07:00 P.M.',
    location: {
      // 8.778955068084345, -75.86424749692904
      lat: 8.778955068084345,
      lng: -75.86424749692904
    }
  },
  reception: {
    place: 'Casa Baruc',
    state: '(al lado del concesionario Mazda)',
    city: 'Montería',
    time: '8:00 P.M.',
    location: {
      // 8.779366505482832, -75.86510769321268
      lat: 8.779366505482832,
      lng: -75.86510769321268
    }
  },
  photos: [img1, img2, img3, img4, img5, img6, img7],
  hashtag: 'pachecotorres',
  timeLine,
  sheetApi: 'https://api.sheetapi.rest/api/v1/sheet/6fiXmjVGy_mkGbFBaLPfzm',
  sheetPlaylistApi: 'https://api.sheetapi.rest/api/v1/sheet/7a3YNpbtu4QnFasbU48bM',
  namesImg,
  monograma,
  urlWhatsapp: 'http://wa.link/lrpyi4'
}
