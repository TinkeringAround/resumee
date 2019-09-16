import React from 'react'
import { Box, Heading } from 'grommet'

//=========================================================
interface Props {}

//=========================================================
const Intro: React.FC<Props> = () => {
  return (
    <Box
      className="relative"
      width="100%"
      height={window.innerHeight + 'px'}
      background="background"
    >
      <Box
        className="absolute"
        width="100%"
        style={{ top: 200, left: 0 }}
        justify="center"
        align="center"
      >
        <Heading level="1" color="white">
          {"I'm Thomas Maier.".toUpperCase()}
        </Heading>
      </Box>
    </Box>
  )
}

export default Intro
