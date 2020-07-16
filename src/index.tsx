import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'

// Polyfills for IE
import 'core-js'

import './styles/index.css'

import Layout from './components/layout'
import Me from './components/me'
import MyParticles from './components/Particles'
import Introduction from './components/introduction/'

//=========================================================
const App: FC = () => (
  <Layout>
    <Introduction />
    <MyParticles />
    <Me />
  </Layout>
)

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
