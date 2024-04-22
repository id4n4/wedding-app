import {
  Ceremony,
  Counter,
  EnvelopeRain,
  Hero,
  Music,
  Outfit,
  Reception,
  SharePhoto
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
    </section>
  )
}

export default App
