import { Ceremony, Counter, Hero, Reception } from './components'

function App () {
  return (
    <section className='w-full h-full bg-background'>
      <Hero />
      <Counter />
      <Ceremony />
      <Reception />
    </section>
  )
}

export default App
