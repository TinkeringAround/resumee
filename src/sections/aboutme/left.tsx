import React, { FC } from 'react'
import { Box } from 'grommet'

// Partials
import Skills from './skills/'
import Hobbies from './hobbies/'
import Contact from './contact'

//=========================================================
const Left: FC = () => (
  <Box width="50%" height="100%" pad="0.25em 0 0 0">
    <Box width="100%" justify="center" align="center">
      <Skills />
      <Hobbies />
      <Contact />
    </Box>
  </Box>
)

export default Left
