import React, { FC } from 'react'
import { Text, ResponsiveContext } from 'grommet'

//=========================================================
const Introduction: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <>
          <Text
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0 0 1em 0"
            style={{ textAlign: isMobile ? 'justify' : 'start' }}
          >
            I'm Thomas, 25 years old, fullstack developer from Wolfsburg.
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
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0 0 1em 0"
            style={{ textAlign: isMobile ? 'justify' : 'start' }}
          >
            If you want to know more about me, please explore this page. Thanks a lot for visiting.
          </Text>
          <Text
            color="dark"
            size={isMobile ? '0.9em' : '1em'}
            margin="0"
            style={{ fontWeight: 600, textAlign: isMobile ? 'justify' : 'start' }}
          >
            Kind Regards
          </Text>
        </>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Introduction
