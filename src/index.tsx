import React, { FC, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'
import { Grommet, Box } from 'grommet'
import { PoseGroup } from 'react-pose'

// Styles
import './styles/colors.css'
import './styles/modifier.css'
import './styles/effects.css'
import './styles/components.css'
import theme from './styles/theme'

// Sections
import Intro from './sections/intro/'
import About from './sections/aboutme'
import HireMe from './sections/hireme'
import CV from './sections/cv'
import Projects from './sections/projects'
import Footer from './sections/footer'

// Atoms
import { ASimple, AIntro } from './atoms/animations'

// Components
import Navigation from './components/navigation'

// Consts
const INTRO_DURATION = 250
const NAVIGATION = 30
const ABOUT_ME = window.innerHeight / 2
const FOOTER_HEIGHT = 400

//=========================================================
const App: FC = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const [intro, setIntro] = useState<string>('exit')
  const [scrollAtAboutMe, setScrollAtAboutMe] = useState<boolean>(false)

  useEffect(() => {
    if (intro === 'exit') setTimeout(() => setIntro('enter'), INTRO_DURATION)
  })

  const onScroll = (event: any) => {
    //@ts-ignore
    if (event.target.id === 'grommet') {
      //@ts-ignore
      if (!scroll && event.target.scrollTop > NAVIGATION) setScroll(true)
      //@ts-ignore
      else if (scroll && event.target.scrollTop < NAVIGATION) setScroll(false)
      //@ts-ignore
      else if (!scrollAtAboutMe && event.target.scrollTop >= ABOUT_ME) setScrollAtAboutMe(true)
    }
  }

  return (
    <PoseGroup flipMove={false}>
      {/* Intro Animation */}
      {/* {intro === 'exit' && <AIntro key="Intro" duration={1000} />} */}

      {/* Webseite */}
      {intro === 'enter' && (
        <ASimple key="grommet" delay={0}>
          <Grommet
            id="grommet"
            className="relative"
            theme={theme}
            full
            style={{ background: 'transparent' }}
            onScroll={onScroll}
          >
            {/* Navigation */}
            <Navigation expanded={!scroll} />

            {/* Sections */}
            <Intro />
            <About inView={scrollAtAboutMe} />
            <CV />
            <HireMe />
            <Projects />

            {/* Footer */}
            <Footer key="Footer" height={FOOTER_HEIGHT} />
          </Grommet>
        </ASimple>
      )}
    </PoseGroup>
  )
}

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
