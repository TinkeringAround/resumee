import React, { FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Partials
import Right from './right'
import Left from './left'

//=========================================================
const About: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box
          id="aboutme"
          background="white"
          align="center"
          pad={isMobile ? '3em 1em 5em' : '4em 0'}
        >
          <Box className="relative" width="100%" height="1000px" direction="row" justify="center">
            <Left />
            <Right />
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default About
