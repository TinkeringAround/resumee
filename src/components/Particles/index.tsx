import React, { FC } from 'react'
import Particles from 'react-particles-js'

// Config
import params from './params'

//=========================================================
const MyParticles: FC = () => (
  <Particles
    width="100%"
    height="100%"
    //@ts-ignore
    params={params(75)}
    style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
  />
)

export default MyParticles
