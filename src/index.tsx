import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'
import { Grommet } from 'grommet'

// Styles
import './styles/index.css'
import theme from './styles/theme'

// Sections
import Intro from './sections/intro/'

// Components
import Navigation from './components/navigation'

//=========================================================
const App: FC = () => {
  return (
    <Grommet id="grommet" theme={theme} full>
      <Navigation />
      <Intro />
    </Grommet>
  )
}

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
