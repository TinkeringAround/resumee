import React, { FC } from 'react'

// Components
import Icon from '../icons'
import { SBox, SHeader, SSubHeader, SWrapper } from './components'

//=========================================================
const Introduction: FC = () => (
  <SBox>
    <SHeader steps={[``, 1500, `Fullstack Developer.`, 10000]} loop={Infinity} />
    <SSubHeader>
      I'm constantly trying to improve my technical and social skills to help build awesome software
      for people.
    </SSubHeader>
    <SWrapper>
      <Icon type="github" margin="0 0 0 .1rem" />
      <Icon type="linkedin" margin="0 1rem" />
      <Icon type="facebook" />
    </SWrapper>
  </SBox>
)

export default Introduction
