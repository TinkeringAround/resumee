import React, { FC, Fragment } from 'react'
import Particles from 'react-particles-js'

import params from './params'

//=========================================================
const MyParticles: FC = () => (
  <Fragment>
    {/* Red */}
    <Particles
      width="100vw"
      height="100vh"
      //@ts-ignore
      params={params(30, 'red')}
      style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
    />

    {/* Blue */}
    <Particles
      width="100vw"
      height="100vh"
      //@ts-ignore
      params={params(40, 'blue')}
      style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}
    />

    {/* Green */}
    <Particles
      width="100vw"
      height="100vh"
      //@ts-ignore
      params={params(15, 'green')}
      style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
    />

    {/* Yellow */}
    <Particles
      width="100vw"
      height="100vh"
      //@ts-ignore
      params={params(15, 'yellow')}
      style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}
    />
  </Fragment>
)

export default MyParticles
