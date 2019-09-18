import React, { FC } from 'react'
import { Box, Text } from 'grommet'

//=========================================================
const Right: FC = () => (
  <Box width="50%" height="100%" background="white" pad="0 4em">
    <Text
      className="mono"
      color="dark"
      size="1.25em"
      margin="0 0 1em 0"
      style={{ letterSpacing: '0.01em', fontWeight: 600 }}
    >
      Hi everybody!
    </Text>
    <Text
      className="mono"
      color="dark"
      size="0.9em"
      margin="0 0 1em 0"
      style={{ letterSpacing: '0.01em' }}
    >
      I'm Thomas, 25 years old fullstack developer from Wolfsburg and currently studying media
      computer science.
    </Text>
    <Text
      className="mono"
      color="dark"
      size="0.9em"
      margin="0 0 1em 0"
      style={{ letterSpacing: '0.01em' }}
    >
      Still trying to find my place in the world, I'm constantly trying to improve my technical and
      social skills to help building awesome software for people.
    </Text>
    <Text
      className="mono"
      color="dark"
      size="0.9em"
      margin="0 0 1em 0"
      style={{ letterSpacing: '0.01em' }}
    >
      If you want to know more about me, please explore this page. I am proud of what I have already
      achieved and curious about what the future will bring for me. Thanks a lot for visiting.
    </Text>
    <Text
      className="mono"
      color="dark"
      size="0.9em"
      margin="0 0 1em 0"
      style={{ letterSpacing: '0.01em' }}
    >
      Stay mellow.
      <span role="img" aria-label="thumbs-up">
        👍
      </span>
    </Text>
  </Box>
)

export default Right
