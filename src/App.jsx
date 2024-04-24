import { Divider } from '@tremor/react'
import {
  Ceremony,
  ConfirmAssistance,
  Counter,
  EnvelopeRain,
  Footer,
  Hero,
  Letter,
  Menu,
  Music,
  Outfit,
  Reception,
  SharePhoto,
  Suggestions
} from './components'

function App () {
  return (
    <section className='w-full h-full overflow-x-hidden overflow-y-auto bg-background '>
      <Letter />
      <Hero />
      <Counter />
      <Ceremony />
      <Reception />
      <Outfit />
      <SharePhoto />
      <Music />
      <EnvelopeRain />
      <ConfirmAssistance />
      <Suggestions />
      <Divider />
      <Menu />
      <Footer />
    </section>
  )
}

export default App
