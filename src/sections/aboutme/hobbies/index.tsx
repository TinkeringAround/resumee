import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'

// Consts
const hobbies = [
  'Chinese Martial Arts,',
  'Fitness,',
  'Programming,',
  'Technologie,',
  'Family & Friends,',
  'Travelling'
]

//=========================================================
const Hobbies: FC = () => {
  return (
    <Box width="100%" direction="row" margin="0 0 2em 0">
      <Box width="30%" justify="center" align="center">
        <Heading level="3" color="black" margin="0">
          Hobbies
        </Heading>
      </Box>
      <Box height="100%" width="70%" direction="row" align="center" pad="0 1.5em" wrap>
        {hobbies.map((hobby: string, index: number) => (
          <Text
            key={'Hobby-' + index}
            color="dark"
            size="0.9em"
            style={{ fontWeight: 600, marginRight: '0.5em' }}
          >
            {hobby}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

export default Hobbies
