import React, { FC, useState } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'
import { Grommet } from 'grommet'

// Styles
import './styles/fonts.css'
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

// Components
import Navigation from './components/navigation'

// Consts
const NAVIGATION = 150
const TOLERANCE = 10

//=========================================================
const App: FC = () => {
  const [scroll, setScroll] = useState<boolean>(false)

  return (
    <Grommet
      id="grommet"
      theme={theme}
      full
      color="white"
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
      <Navigation expanded={!scroll} />
      <Intro />
      <About />
      <HireMe />
      <CV />
      <Projects />
      <Footer />
    </Grommet>
  )
}

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
