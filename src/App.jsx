import { Divider } from '@tremor/react'
import { useEffect, useState } from 'react'
import {
  Ceremony,
  ConfirmAssistance,
  Counter,
  EnvelopeRain,
  Footer,
  Hero,
  Letter,
  Menu,
  Outfit,
  Reception,
  SharePhoto
} from './components'
import { Volume } from './components/Volume'
import { TimeLine } from './components/timeLine'
import { content } from './config/content'

const audio = new Audio(content.music)
audio.loop = true

function App () {
  const [isVisible, setIsVisible] = useState(true)
  const [hasVolume, setHasVolume] = useState(true)
  const onChangeVolume = () => {
    if (hasVolume) {
      audio.pause()
    } else {
      audio.play()
    }
    setHasVolume(prev => !prev)
  }

  useEffect(() => {
    if (!isVisible) {
      audio.play()
    }
  }, [isVisible])
  return (
    <section className='relative w-full h-screen overflow-x-hidden bg-background '
      style={{
        overflowY: isVisible ? 'hidden' : 'auto'
      }}
    >
      <Letter isVisible={isVisible} setIsVisible={setIsVisible} />
      <Hero />
      <Counter />
      <Ceremony />
      <Reception />
      <Outfit />
      <SharePhoto />
      {/* <Music /> */}
      <EnvelopeRain />
      <TimeLine />
      <ConfirmAssistance />
      {/* <Suggestions /> */}
      <Divider />
      <Menu />
      <Footer />
      <Volume hasVolume={hasVolume} onChangeVolume={onChangeVolume} />
    </section>
  )
}

export default App
