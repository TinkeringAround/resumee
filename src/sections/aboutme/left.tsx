import React, { FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Partials
import Skills from './skills/'
import Hobbies from './hobbies/'
import Contact from './contact'

//=========================================================
const Left: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box width={isMobile ? '100%' : '50%'} height="100%" pad="0.25em 0 0 0">
          <Box width="100%" justify="center" align="center">
            <Skills />
            <Hobbies />
            <Contact />
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Left
