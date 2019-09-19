import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'

// Consts
import hobbies from '../../../assets/hobbies.json'

//=========================================================
const Hobbies: FC = () => {
  return (
    <Box width="100%" direction="row" margin="0 0 2em 0">
      <Box width="30%" align="center">
        <Heading level="3" color="black" margin="0">
          Hobbies
        </Heading>
      </Box>
      <Box height="100%" width="70%" direction="row" align="center" pad="0 2em 0 0" wrap>
        {hobbies.map((hobby: string, index: number) => (
          <Text
            key={'Hobby-' + index}
            color="dark"
            size="0.9em"
            style={{ fontWeight: 600, marginRight: '0.5em' }}
          >
            {hobby + (index === hobbies.length - 1 ? '' : ',')}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

export default Hobbies
