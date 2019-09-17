import React, { FC } from 'react'
import { Box } from 'grommet'

// Partials
import Skills from './skills/'
import Hobbies from './hobbies/'
import Contact from './contact'

//=========================================================
const Left: FC = () => {
  return (
    <Box width="50%" height="100%">
      <Box width="100%" justify="center" align="center">
        <Hobbies />
        <Skills />
        <Contact />
      </Box>
    </Box>
  )
}

export default Left
