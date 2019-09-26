import React, { FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Partials
import Right from './right'
import Left from './left'

//=========================================================
interface Props {
  inView: boolean
}

//=========================================================
const About: FC<Props> = ({ inView }) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box id="aboutme" background="white" align="center" pad={isMobile ? '3em 1.5em' : '4em 0'}>
          <Box
            className="relative"
            width="100%"
            height={isMobile ? 'auto' : '1000px'}
            direction="row"
            justify="center"
          >
            <Left inView={inView} />
            {!isMobile && <Right inView={inView} />}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default About
