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
          direction="column"
          margin="0 0 2em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="black"
            margin="0 0 0.5em"
            size={isMedium ? '1.15em' : isMiddle ? '1.25em' : '1.35em'}
            style={{ fontWeight: 600 }}
          >
            Hobbies
          </Heading>
          <Box
            height="100%"
            width={isMobile ? '100%' : '85%'}
            direction="row"
            align="center"
            pad={isMobile ? '0' : '0 3em 0 0'}
            wrap
          >
            {hobbies.map((hobby: string, index: number) => (
              <Text
                key={'Hobby-' + index}
                color="dark"
                size={isMobile ? '0.85em' : '1em'}
                style={{
                  marginRight: index === hobbies.length - 1 ? 0 : '0.25em'
                }}
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
