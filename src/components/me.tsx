import React, { FC } from 'react'
import styled from 'styled-components'
import LazyHero from 'react-lazy-hero'

// Styles
import { breakPoints } from '../styles/'

// Assets
import desktop from '../assets/desktop.png'
import mobile from '../assets/mobile.png'

// Hooks
import { useBreakpoint } from '../hooks'

//=========================================================
const SWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  overflow: hidden;

  @media (max-width: ${breakPoints['mobile']}px) {
    align-items: flex-end;
  }
`

const SImage = styled(LazyHero)`
  height: 90%;
  width: 95%;

  div {
    background-size: contain;
    background-position: right;
  }

  @media (max-width: ${breakPoints['mobile']}px) {
    height: 80%;
  }
`

//=========================================================
const Me: FC = () => {
  const isMobile = useBreakpoint(breakPoints['mobile'])

  return (
    <SWrapper>
      <SImage imageSrc={isMobile ? mobile : desktop} transitionDuration={1000} opacity={0} />
    </SWrapper>
  )
}

export default Me
