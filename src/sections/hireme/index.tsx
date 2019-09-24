import React, { FC } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Consts
const mailToMe = 'mailto:maier.thomas94@gmail.com'

//=========================================================
const HireMe: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box width="100%" background="blue" justify="center" align="center" pad="6em 0 8em 0">
          <Heading textAlign="center" level="2" color="white">
            I'm currently <u>available</u> for freelance work.
          </Heading>
          <Box width={isMobile ? '60%' : size.includes('medium') ? '20%' : '15%'}>
            <a
              aria-label={'Write me an Email'}
              href={mailToMe}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button text="Hire Me" fontSize="1em" color="white" arrow></Button>
            </a>
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default HireMe
