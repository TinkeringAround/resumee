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
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      return (
        <Box id="cv" background="white" justify="center" align="center" pad="8em 0">
          <Heading
            className="mono"
            level="1"
            margin="0.5em 0 0.25em 0"
            size="2.5em"
            color="dark"
            textAlign="center"
            style={{
              letterSpacing: '0.01em',
              fontWeight: 600
            }}
          >
            Curriculum Vitae.
          </Heading>
          <Text
            color="light"
            size="1em"
            textAlign="center"
            style={{
              letterSpacing: '0.1em',
              fontWeight: 600
            }}
          >
            Where I aquired my developer skills.
          </Text>
          <Box
            width={isMedium ? '80%' : isMiddle ? '70%' : '60%'}
            direction="column"
            margin="4em auto 4em auto"
            wrap
          >
            {steps.map((step: TCard, index: number) => (
              <Card
                key={'Card-' + index}
                title={step.title}
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
