import React, { FC } from 'react'
import { Box, Text, Heading, ResponsiveContext, Image } from 'grommet'

// Types
import { TCard } from '../../types/'

// Components
import Card from '../../components/card'

// Assets
import steps from '../../assets/cv.json'
import left from './left.png'
import right from './right.png'
import mobile from './mobile.png'

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
                viewBox="0 0 2500 2500"
                style={{
                  fill: 'transparent',
                  strokeWidth: 5,
                  stroke: 'var(--red)'
                }}
              >
                <path d="M2726.34,2619.96c-159.944,-476.218 -707.154,-1565.98 -1637.21,-785.699c-262.11,219.901 -530.02,457.839 -772.486,403.132c-498.452,-112.465 370.386,-2792.22 -706.592,-1881.3" />
                <path d="M3331.28,392.615c133.805,126.911 -593.175,435.083 -1321.84,455.62c-705.459,19.884 -1307.88,-472.059 -1529.52,-276.521c-503.73,444.416 182.348,2211.87 -537.064,2248.8" />
              </svg>
            )}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default CV
