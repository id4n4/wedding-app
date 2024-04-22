import { Divider } from '@tremor/react'
import {
  Ceremony,
  ConfirmAssistance,
  Counter,
  EnvelopeRain,
  Footer,
  Hero,
  Menu,
  Music,
  Outfit,
  Reception,
  SharePhoto,
  Suggestions
} from './components'

function App () {
  return (
    <section className='w-full h-full bg-background min-w-[450px] overflow-hidden'>
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
