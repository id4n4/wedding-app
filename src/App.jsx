import { Ceremony, Counter, Hero, Outfit, Reception } from './components'

function App () {
  return (
    <section className='w-full h-full bg-background'>
      <Hero />
      <Counter />
      <Ceremony />
      <Reception />
      <Outfit />
    </section>
  )
}

export default App
