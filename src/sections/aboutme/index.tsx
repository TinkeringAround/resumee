import React, { FC } from 'react'
import { Box, Heading } from 'grommet'

// Partials
import Right from './right'
import Left from './left'

//=========================================================
interface Props {}

//=========================================================
const About: FC<Props> = () => {
  return (
    <Box id="aboutme" background="white" justify="center" align="center" pad="5em 0">
      <Heading
        className="mono"
        level="1"
        margin="0.5em 0"
        size="2.5em"
        color="dark"
        textAlign="center"
        style={{
          letterSpacing: '0.01em',
          fontWeight: 600
        }}
      >
        Short facts about me.
      </Heading>
      <Box height="500px" width="100%" direction="column" margin="8em 0 4em 0" wrap>
        <Left />
        <Right />
      </Box>
    </Box>
  )
}

export default About
