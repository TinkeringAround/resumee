import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './utility/serviceWorker'

// Styles
import './styles/index.css'

// Components
import Layout from './components/layout'
import Me from './components/me'
import MyParticles from './components/Particles'

//=========================================================
const App: FC = () => (
  <Layout>
    {/* Particles */}
    <MyParticles />

    {/* Images */}
    <Me />
  </Layout>
)

//=========================================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
