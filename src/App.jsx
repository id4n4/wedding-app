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
import { useEffect, useState } from 'react'
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

  // useEffect(() => {
  //   if (!isVisible) {
  //     audio.play()
  //   }
  // }, [isVisible])
  return (
    <section className='w-full h-full overflow-x-hidden overflow-y-auto bg-background '>
      <Letter isVisible={isVisible} setIsVisible={setIsVisible} />
      {
        !isVisible &&
          (
            <>
              <Hero />
              <Counter />
              <Ceremony />
              <Reception />
              <Outfit />
              <SharePhoto />
              <Music />
              <EnvelopeRain />
              <TimeLine />
              <ConfirmAssistance />
              <Suggestions />
              <Divider />
              <Menu />
              <Footer />
              <Volume hasVolume={hasVolume} onChangeVolume={onChangeVolume} />
            </>)
      }
    </section>
  )
}

export default App
