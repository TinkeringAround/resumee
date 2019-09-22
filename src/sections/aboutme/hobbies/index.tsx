import React, { FC } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'

// Consts
import hobbies from '../../../assets/hobbies.json'

//=========================================================
const Hobbies: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      return (
        <Box
          width={isMobile ? '95%' : '100%'}
          direction={isMobile ? 'column' : 'row'}
          margin="0 0 2em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="dark"
            margin={isMobile ? '0 0 0.5em' : isMedium ? '0 0 0 1em' : '0 0 0 2em'}
            size={isMedium ? '1.25em' : isMiddle ? '1.35em' : '1.45em'}
          >
            Hobbies
          </Heading>
          <Box
            height="100%"
            width={isMobile ? '100%' : '75%'}
            direction="row"
            align="center"
            justify={isMobile ? 'start' : 'start'}
            pad={isMobile ? '0' : '0 3em 0 0'}
            wrap
          >
            {hobbies.map((hobby: string, index: number) => (
              <Text
                key={'Hobby-' + index}
                color="gold"
                weight="bold"
                size={isMobile ? '1em' : '1em'}
                style={{ marginRight: index === hobbies.length - 1 ? 0 : '0.25em' }}
              >
                {hobby + (index === hobbies.length - 1 ? '' : ',')}
              </Text>
            ))}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Hobbies