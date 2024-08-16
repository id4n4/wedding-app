import imgLogo from '../assets/SVGs/logo.svg'
import imgHero from '../assets/img/ia12.jpg'
import music from '../assets/music/Fonseca-QueSuerteTenerte.mp3'

import ia1 from '../assets/img/ia1.jpg'
import ia14 from '../assets/img/ia14.jpg'
import ia15 from '../assets/img/ia15.jpg'
import ia4 from '../assets/img/ia4.jpg'
import ia8 from '../assets/img/ia8.jpg'

import timeLine from '../assets/SVGs/timeLine.svg'

// Al modificar los datos, se debe tener en cuenta:
// modificar index.html
// modificar .env
// modificar Suggestions.jsx - urls

export const content = {
  music,
  imgLogo,
  novio: 'Iván',
  novia: 'Aleja',
  fecha: new Date('2024-08-24'),
  fechaConfirm: new Date('2024-07-15'),
  imgHero,
  phraseHero: 'Uno solo puede ser vencido, pero dos pueden resistir.\n ! La cuerda de tres hilos no se rompe fácilmente !',
  ceremony: {
    place: 'Parroquia San Carlos Borromeo',
    city: 'San Carlos - Córdoba',
    time: '5:00 P.M.',
    location: {
      lat: 8.796152382993998,
      lng: -75.69899069970378
    }
  },
  reception: {
    place: 'Hacienda el paraíso',
    city: 'San Carlos - Córdoba',
    time: '7:00 P.M.',
    location: {
      lat: 8.845813814082454,
      lng: -75.73425553581112
    }
  },
  photos: [ia1, ia4, ia8, ia14, ia15],
  hashtag: 'ivale_wed',
  timeLine,
  sheetApi: 'https://api.sheetapi.rest/api/v1/sheet/6fiXmjVGy_mkGbFBaLPfzm',
  sheetPlaylistApi: 'https://api.sheetapi.rest/api/v1/sheet/0qUcYWdhAjBnOHp7s3RzA'

}
