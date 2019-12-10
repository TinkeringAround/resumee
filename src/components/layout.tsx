import React, { FC } from 'react'
import styled from 'styled-components'

// Styles
import { colors } from '../styles/styles'

// Assets
import noiseBackground from '../assets/noise.png'

// Atoms
//=========================================================
const SLayout = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;

  background: ${colors['lightgrey']};

  background-image: url(${noiseBackground});
  background-position: 50%;
`

//=========================================================
const Layout: FC = ({ children }) => <SLayout>{children}</SLayout>

export default Layout
