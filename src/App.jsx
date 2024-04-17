import { Ceremony, Counter, Hero, Outfit, Reception, SharePhoto } from './components'

function App () {
  return (
    <section className='w-full h-full bg-background'>
      <Hero />
      <Counter />
      <Ceremony />
      <Reception />
      <Outfit />
      <SharePhoto />
    </section>
  )
}

export default App
