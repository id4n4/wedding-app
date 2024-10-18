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
  Music,
  Outfit,
  Parents,
  Reception,
  SharePhoto,
  Suggestions
} from './components'
import { Volume } from './components/Volume'
import { TimeLine } from './components/timeLine'
import { content } from './config/content'
import { ChildrenAlert } from './components/children/ChildrenAlert'

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
      <Parents />
      <Ceremony />
      <Reception />
      <Outfit />
      <SharePhoto />
      <Music />
      <EnvelopeRain />
      <TimeLine />
      <ConfirmAssistance />
      <Suggestions />
      <ChildrenAlert />
      <Menu />
      <Footer />
      <Volume hasVolume={hasVolume} onChangeVolume={onChangeVolume} />
    </section>
  )
}

export default App
