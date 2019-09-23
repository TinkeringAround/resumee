import React, { FC } from 'react'
import { Box, Text, ResponsiveContext, Image } from 'grommet'

// Assets
import singing from '../../assets/signing.png'

//=========================================================
const Right: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')

      return (
        <Box
          width={isMobile ? '90%' : '50%'}
          height="100%"
          margin={isMobile ? '0 auto 6em' : '0'}
          pad={isMobile ? '0' : isMedium ? '0 3.5em 0 2.5em' : '0 6em 0 2em'}
        >
          <Text
            color="dark"
            size="1.5em"
            margin="0 0 1em 0"
            textAlign="start"
            style={{ fontWeight: isMobile ? 900 : 600 }}
          >
            Hi everybody!
          </Text>
          <Text
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0 0 1em 0"
            style={{ textAlign: isMobile ? 'justify' : 'start' }}
          >
            I'm Thomas, 25 years old fullstack developer from Wolfsburg and currently studying media
            computer science.
          </Text>
          <Text
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0 0 1em 0"
            style={{ textAlign: isMobile ? 'justify' : 'start' }}
          >
            Still trying to find my place in the world, I'm constantly trying to improve my
            technical and social skills to help building awesome software for people.
          </Text>
          <Text
            textAlign={isMobile ? 'center' : 'start'}
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0 0 1em 0"
            style={{ textAlign: isMobile ? 'justify' : 'start' }}
          >
            If you want to know more about me, please explore this page. I am proud of what I have
            already achieved and curious about the future. Thanks a lot for visiting.
          </Text>
          <Text
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0"
            style={{ fontWeight: 600, textAlign: isMobile ? 'justify' : 'start' }}
          >
            Kind Regards,
          </Text>

          <Box width="100%" align={isMedium || isMobile ? 'center' : 'start'} justify="center">
            <Box width={isMobile ? '100%' : '80%'} height={isMobile ? '200px' : '250px'}>
              <Image fit="contain" src={singing} />
            </Box>
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Right
