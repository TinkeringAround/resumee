import React, { FC } from 'react'
import styled from 'styled-components'

// Assets
import me from '../assets/me.png'

// Atoms
//=========================================================
const SWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  overflow: hidden;
`

const SImage = styled.img`
  height: 90%;
`

//=========================================================
const Me: FC = () => (
  <SWrapper>
    <SImage src={me}></SImage>
  </SWrapper>
)
export default Me
