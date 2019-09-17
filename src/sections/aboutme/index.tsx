import React, { FC } from 'react'
import { Box, Text } from 'grommet'

// Partials
import Right from './right'
import Left from './left'

//=========================================================
interface Props {}

//=========================================================
const About: FC<Props> = () => {
  return (
    <Box id="aboutme" background="white" justify="center" align="center" pad="5em 0">
      <Text
        className="mono"
        color="light"
        size="1.25em"
        textAlign="center"
        style={{
          letterSpacing: '0.1em',
          fontWeight: 600
        }}
      >
        Short facts about me.
      </Text>
      <Box height="500px" width="100%" direction="column" margin="8em 0" wrap>
        <Left />
        <Right />
      </Box>
    </Box>
  )
}

export default About
