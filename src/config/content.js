import imgLogo from '../assets/SVGs/logo.svg'
import imgHero from '../assets/img-personal/ia2.jpg'
import music from '../assets/music/Fonseca-QueSuerteTenerte.mp3'

import ia1 from '../assets/img-personal/ia1.jpg'
import ia3 from '../assets/img-personal/ia3.jpg'
import ia4 from '../assets/img-personal/ia4.jpg'

import timeLine from '../assets/SVGs/timeLine.svg'

import namesImg from '../assets/SVGs/ivan_aleja.svg'

// Al modificar los datos, se debe tener en cuenta:
// modificar index.html
// modificar Suggestions.jsx - urls
// modificar menu.css - img

export const content = {
  music,
  imgLogo,
  novio: 'Roberto',
  novia: 'María de los Ángeles',
  fecha: new Date('2024-10-05'),
  fechaConfirm: new Date('2024-09-20'),
  imgHero,
  phraseHero: ['Así que ya no son dos, sino una sola carne.', 'Lo que Dios ha unido, no lo desuna el hombre', 'Mateo 19:6'],
  ceremony: {
    place: 'Parroquia San Bernardo Abad',
    city: 'San bernardo del viento',
    time: '10:00 A.M.',
    location: {
      lat: 9.356147416289378,
      lng: -75.95170395175768
    }
  },
  reception: {
    place: 'Hotel bar restaurante casa arrecife',
    city: 'San bernardo del viento',
    time: '12:00 P.M.',
    location: {
      lat: 9.314103873038617,
      lng: -76.09823644160083
    }
  },
  photos: [ia1, ia4, ia3, imgHero],
  hashtag: 'mercadonegrete',
  timeLine,
  sheetApi: 'https://api.sheetapi.rest/api/v1/sheet/6fiXmjVGy_mkGbFBaLPfzm',
  sheetPlaylistApi: 'https://api.sheetapi.rest/api/v1/sheet/0qUcYWdhAjBnOHp7s3RzA',
  namesImg
}
