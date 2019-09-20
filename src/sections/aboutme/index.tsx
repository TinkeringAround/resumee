import React, { FC } from 'react'
import { Box, Heading, ResponsiveContext } from 'grommet'

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
          justify="center"
          align="center"
          pad={isMobile ? '5em 1em' : '5em 0'}
        >
          <Heading
            level="1"
            margin="0.5em 0"
            size={isMobile ? '2em' : '3em'}
            color="dark"
            textAlign="center"
            style={{
              letterSpacing: '0.01em',
              fontWeight: 600
            }}
          >
            Short facts about me.
          </Heading>
          <Box width="100%" direction="row" margin={isMobile ? '3em 0' : '8em 0 4em 0'} wrap>
            {!isMobile && <Left />}
            <Right />
            {isMobile && <Left />}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default About
