import React, { FC } from 'react'
import { Box, Text, Heading, ResponsiveContext } from 'grommet'

// Types
import { TCard } from '../../types/'

// Atoms
import { Curlicue } from '../../atoms/icons'

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
          className="relative"
          background="transparent"
          justify="center"
          align="center"
          pad={isMobile ? '5em 0' : '8em 0'}
        >
          <Heading
            level="1"
            margin="0"
            size={isMobile ? '2em' : '3em'}
            color="blue"
            style={{ fontWeight: 900 }}
          >
            Curriculum Vitae.
          </Heading>
          <Text color="dark" size="1em" style={{ padding: isMobile ? '0 .5em' : '0' }}>
            Where I aquired my <strong>developer skills.</strong>
          </Text>
          {isMobile && (
            <Box className="gradientBackground" width="60%" height="2px" margin="1em 0 2em" />
          )}
          <Box
            className="gradient"
            width={isMobile ? '90%' : isMedium ? '80%' : isMiddle ? '60%' : '50%'}
            direction="column"
            margin={isMobile ? '0 auto 4em' : '4em auto'}
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
          <Box
            className="absolute"
            background="white"
            height="100%"
            width="100%"
            style={{ top: 0, left: 0, zIndex: -1 }}
          >
            {!isMobile && (
              <svg
                width="100%"
                height="100%"
                viewBox={Curlicue.viewport}
                style={{
                  fill: 'transparent',
                  strokeWidth: 5,
                  stroke: 'var(--red)'
                }}
              >
                {Curlicue.path}
              </svg>
            )}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default CV
