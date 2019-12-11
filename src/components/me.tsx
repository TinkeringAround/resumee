import React, { FC } from 'react'
import styled from 'styled-components'

// Styles
import { breakPoints } from '../styles/'

// Assets
import me from '../assets/me.png'
import meMobile from '../assets/meMobile.png'

// Hooks
import { useMedia } from '../hooks'

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

const SImage = styled.img`
  height: 90%;

  @media (max-width: ${breakPoints['mobile']}px) {
    height: 80%;
  }
`

//=========================================================
const Me: FC = () => {
  const isMobile = useMedia(breakPoints['mobile'])

  return (
    <SWrapper>
      <SImage src={isMobile ? meMobile : me} />
    </SWrapper>
  )
}

export default Me
