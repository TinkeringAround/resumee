import React, { FC } from 'react'
import { Box, Text, Heading, ResponsiveContext } from 'grommet'

// Types
import { TCard } from '../../types/'

// Components
import Card from '../../components/card'

// Assets
import steps from '../../assets/cv.json'

//=========================================================
const CV: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      return (
        <Box
          id="cv"
          background="white"
          justify="center"
          align="center"
          pad={isMobile ? '5em 0' : '8em 0'}
        >
          <Heading
            level="1"
            margin="0.5em 0 0.25em 0"
            size={isMobile ? '2em' : '3em'}
            color="black"
            textAlign="center"
            style={{
              letterSpacing: '0.01em',
              fontWeight: 900
            }}
          >
            Curriculum Vitae.
          </Heading>
          <Text
            color="dark"
            size="1em"
            textAlign="center"
            style={{ padding: isMobile ? '0 .5em' : '0' }}
          >
            Where I aquired my <strong>developer skills.</strong>
          </Text>
          <Box
            width={isMobile ? '90%' : isMedium ? '80%' : isMiddle ? '60%' : '50%'}
            direction="column"
            margin="4em auto 4em auto"
            wrap
          >
            {steps.map((step: TCard, index: number) => (
              <Card
                key={'Card-' + index}
                title={step.title}
                activities={step.activities}
                location={step.location.name}
                url={step.location.url}
                duration={step.duration}
              />
            ))}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default CV
