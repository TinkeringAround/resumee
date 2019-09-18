import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Consts
const mailToMe = 'mailto:maier.thomas94@gmail.com'

//=========================================================
const HireMe: FC = () => {
  return (
    <Box width="100%" background="dark" justify="center" align="center" pad="6em 0 8em 0">
      <Heading level="2" color="white">
        I'm currently available for freelance work.
      </Heading>
      <Box width="20%">
        <a
          aria-label={'Write me an Email'}
          href={mailToMe}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button text="" onClick={null} inverse>
            <Box direction="row" justify="around" align="center">
              <Text style={{ wordSpacing: 0 }}>Hire me</Text>
            </Box>
          </Button>
        </a>
      </Box>
    </Box>
  )
}

export default HireMe
