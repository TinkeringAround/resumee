import React, { FC } from 'react'
import { Box, Heading } from 'grommet'

//=========================================================
const Projects: FC = () => {
  return (
    <Box id="projects" className="polygon" width="100%" background="light">
      <Box width="80%" margin="0 auto" pad="12em 0 0 0">
        <Heading
          className="mono"
          level="1"
          margin="2em 0"
          size="2.5em"
          color="white"
          textAlign="center"
          style={{
            letterSpacing: '0.01em',
            fontWeight: 600
          }}
        >
          My Projects.
        </Heading>

        <Box height={2 * window.innerWidth * 0.8 * 0.48 + 'px'} margin="2em 0" direction="row" wrap>
          <Box
            className="animated scaleWeakest"
            width="48%"
            height="48%"
            background="white"
            margin="1%"
          ></Box>
          <Box
            className="animated scaleWeakest"
            width="48%"
            height="48%"
            background="white"
            margin="1%"
          ></Box>
          <Box
            className="animated scaleWeakest"
            width="48%"
            height="48%"
            background="white"
            margin="1%"
          ></Box>
          <Box
            className="animated scaleWeakest"
            width="48%"
            height="48%"
            background="white"
            margin="1%"
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
