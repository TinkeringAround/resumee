import React, { FC, useState } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

// Theme
import theme from '../../styles/theme'

// Consts
const MIN_HEIGHT = 125
const MIN_HEIGHT_MOBILE = 125
const HEIGHT_MULTIPLICATOR = 25
const HEIGHT_MULTIPLICATOR_MOBILE = 35
const DURATION = 250
const DURATION_MULTIPLICATOR = 50

// Components
const StyledAccordion = styled.div`
  display: flex;
  width: ${(props: any) => props.width};
  background: white;

  flex-direction: column;
  padding: ${(props: any) => props.pad};
  margin: ${(props: any) => props.margin};
  cursor: pointer;
`

const Accordion = posed(StyledAccordion)({
  normal: {
    height: (props: any) => props.height,
    scale: 1,
    transition: {
      duration: 2 * DURATION
    }
  },
  expanded: {
    height: (props: any) => props.expandedHeight,
    scale: 1.025,
    transition: { duration: DURATION }
  }
})

const ListItem = posed.li({
  exit: {
    opacity: 0,
    delay: (props: any) => props.exitMultiplicator * DURATION_MULTIPLICATOR,
    transition: { duration: DURATION }
  },
  enter: {
    opacity: 1,
    delay: (props: any) => props.enterMultiplicator * DURATION_MULTIPLICATOR + DURATION
  }
})

//=========================================================
interface Props {
  title: string
  activities: Array<string>
  location: string
  url: string
  duration: string
}

//=========================================================
const Card: FC<Props> = ({ title, activities, duration, location, url }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')

        // Styles
        const ul = { width: isMobile ? '95%' : '80%', margin: '0.5em 0 1em', padding: 0 }
        const li = {
          display: 'block',
          margin: '0 0 0.5em',
          color: theme.global.colors.dark,
          fontSize: isMobile ? '0.75em' : '0.85em',
          lineHeight: '1.2em'
        }

        // Calculations
        const height = isMobile ? MIN_HEIGHT_MOBILE : MIN_HEIGHT
        const expandedHeight =
          (isMobile ? MIN_HEIGHT_MOBILE : MIN_HEIGHT) +
          activities.length * (isMobile ? HEIGHT_MULTIPLICATOR_MOBILE : HEIGHT_MULTIPLICATOR)

        return (
          <Accordion
            className="animated shadow"
            height={height}
            expandedHeight={expandedHeight}
            width="90%"
            pad={isMobile ? '1em' : '2em'}
            margin="0 auto 1em"
            pose={expanded ? 'expanded' : 'normal'}
            onClick={() => setExpanded(!expanded)}
          >
            <Box height="100%" width="100%" justify="between" align="end" direction="column">
              <Box width="100%" pad={isMobile ? '0' : '0 2em 0 0'}>
                <Heading
                  className="animated gradientHover"
                  level="3"
                  size={isMobile ? '1em' : '1.25em'}
                  color={expanded ? 'blue' : 'black'}
                  margin="0 0 0.25em 0"
                  style={{ fontWeight: 900 }}
                >
                  {title}
                </Heading>
                <Text size={isMobile ? '0.4em' : '0.6em'} color="dark" margin="0 0 0.5em">
                  {duration}
                </Text>
                <ul style={ul}>
                  <PoseGroup preEnterPose="exit">
                    {expanded &&
                      activities.map((activity: string, index: number) => (
                        <ListItem
                          key={'Activity-' + index}
                          className="muli"
                          style={li}
                          enterMultiplicator={index + 1}
                          exitMultiplicator={activities.length - index}
                        >
                          {activity}
                        </ListItem>
                      ))}
                  </PoseGroup>
                </ul>
              </Box>
              <Box
                width={isMobile ? '100%' : '30%'}
                align="end"
                justify="end"
                margin={isMobile ? '1.5em 0 0 0' : '0'}
              >
                {url && (
                  <a
                    aria-label={location}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      textAlign: 'end',
                      paddingLeft: isMobile ? '2em' : '0',
                      lineHeight: isMobile ? '0.75em' : '1em'
                    }}
                  >
                    <Text
                      className="animated noFlickr dark gradientHover"
                      size={isMobile ? '0.7em' : '0.8em'}
                      style={{ fontWeight: 600 }}
                    >
                      {location}
                    </Text>
                  </a>
                )}
              </Box>
            </Box>
          </Accordion>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Card
