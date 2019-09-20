import React, { FC } from 'react'
import { Box, Text, ResponsiveContext } from 'grommet'

//=========================================================
const Right: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')

      return (
        <Box
          width={isMobile ? '100%' : '50%'}
          height="100%"
          margin={isMobile ? '0 0 6em 0' : '0'}
          pad={isMobile ? '0 0.5em' : isMedium ? '0 3.5em 0 2.5em' : '0 6em 0 2em'}
        >
          <Text
            className="mono"
            color="dark"
            size="1.5em"
            margin="0 0 1em 0"
            textAlign={isMobile ? 'center' : 'start'}
            style={{ letterSpacing: '0.01em', fontWeight: 600 }}
          >
            Hi everybody!
          </Text>
          <Text
            textAlign={isMobile ? 'center' : 'start'}
            color="dark"
            size="1em"
            margin="0 0 1em 0"
            style={{ letterSpacing: '0.01em' }}
          >
            I'm Thomas, 25 years old fullstack developer from Wolfsburg and currently studying media
            computer science.
          </Text>
          <Text
            textAlign={isMobile ? 'center' : 'start'}
            color="dark"
            size="1em"
            margin="0 0 1em 0"
            style={{ letterSpacing: '0.01em' }}
          >
            Still trying to find my place in the world, I'm constantly trying to improve my
            technical and social skills to help building awesome software for people.
          </Text>
          <Text
            textAlign={isMobile ? 'center' : 'start'}
            color="dark"
            size="1em"
            margin="0 0 1em 0"
            style={{ letterSpacing: '0.01em' }}
          >
            If you want to know more about me, please explore this page. I am proud of what I have
            already achieved and curious about what the future will bring for me. Thanks a lot for
            visiting.
          </Text>
          <Text
            textAlign={isMobile ? 'center' : 'start'}
            color="dark"
            size="1.1em"
            margin="0 0 1em 0"
            style={{ letterSpacing: '0.01em' }}
          >
            Kind Regards
          </Text>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Right
