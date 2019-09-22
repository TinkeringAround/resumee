import React, { FC } from 'react'
import { Box, Text, Heading, ResponsiveContext } from 'grommet'

// Components
import ContactIcons from '../../components/contactIcons'

//=========================================================
const Footer: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box width="100%" height="400px" background="dark">
          <Box width={isMobile ? '90%' : '60%'} margin="6em auto 2em" justify="center">
            <Heading
              level="2"
              size={isMobile ? '2em' : '3em'}
              color="white"
              margin="0"
              textAlign="center"
              style={{ maxWidth: '100%' }}
            >
              Get In Touch.
            </Heading>
            <Text color="white" textAlign="center" margin="0 0 2em">
              No matter what. Just do it.
            </Text>
          </Box>
          <Box width="60%" margin="0 auto" direction="row" justify="center">
            <ContactIcons color="white" hover="goldHover" iconSize={50} />
          </Box>
          <Box width="60%" margin="4em auto 1em" justify="center">
            <Text size="0.75em" color="white" textAlign="center">
              Made with Love.
            </Text>
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Footer
