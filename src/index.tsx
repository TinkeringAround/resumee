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
import { AIntro } from './atoms/animations'

// Components
import Navigation from './components/navigation'

// Consts
const NAVIGATION = 75
const TOLERANCE = 10
const FOOTER_HEIGHT = 400
const INTRO_TEXT_TOP = 200

//=========================================================
const App: FC = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const [intro, setIntro] = useState<string>('exit')

  useEffect(() => {
    if (intro === 'exit') setTimeout(() => setIntro('enter'), 500)
  })

  return (
    <Grommet
      id="grommet"
      className="relative"
      theme={theme}
      full
      style={{ background: 'transparent' }}
      onScroll={event => {
        //@ts-ignore
        if (event.target.id === 'grommet') {
          //@ts-ignore
          if (event.target.scrollTop > NAVIGATION + TOLERANCE) setScroll(true)
          //@ts-ignore
          else if (event.target.scrollTop < NAVIGATION - TOLERANCE) setScroll(false)
        }
      }}
    >
      {/* Main */}
      <Box
        className="relative shadow"
        width="100%"
        margin={`0 0 ${FOOTER_HEIGHT}px`}
        style={{ zIndex: 20 }}
      >
        {/* Intro Animation */}
        <AIntro className="gradientBackground" pose={intro} />

        {/* Sections */}
        <Navigation expanded={!scroll} pose={intro} />
        <Intro top={INTRO_TEXT_TOP} />
        <About />
        <HireMe />
        <CV />
        <Projects />
      </Box>

      {/* Footer */}
      <Footer key="Footer" height={FOOTER_HEIGHT} />
    </Grommet>
  )
}

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
