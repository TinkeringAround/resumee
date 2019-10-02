import React, { FC, useState } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import { PoseGroup } from 'react-pose'

// Theme
import theme from '../../styles/theme'

// Animations
import { Accordion, ListItem } from './animations'

// Consts
const MIN_HEIGHT = 125
const HEIGHT_MULTIPLICATOR = 25
const HEIGHT_MULTIPLICATOR_MOBILE = 30

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

          fontFamily: 'Muli',
          fontSize: isMobile ? '0.75em' : '0.85em',
          lineHeight: '1.2em'
        }

        return (
          <Accordion
            key="Accordion"
            className="animated shadow"
            height={MIN_HEIGHT}
            expandedHeight={
              MIN_HEIGHT +
              activities.length * (isMobile ? HEIGHT_MULTIPLICATOR_MOBILE : HEIGHT_MULTIPLICATOR)
            }
            width="90%"
            pad={isMobile ? '1em' : '2em'}
            margin="0 auto 2em"
            pose={expanded ? 'expanded' : 'normal'}
            onClick={() => setExpanded(!expanded)}
            style={{ border: expanded ? '2px solid var(--pink)' : '2px solid transparent' }}
          >
            <Box height="100%" width="100%" justify="between" align="end" direction="column">
              {/* Content */}
              <Box className="relative" width="100%" pad={isMobile ? '0' : '0 2em 0 0'}>
                <Heading
                  className="animated"
                  level="3"
                  size={isMobile ? '1em' : '1.25em'}
                  color={expanded ? 'blue' : 'black'}
                  margin="0"
                  style={{ fontWeight: 900 }}
                >
                  {title}
                </Heading>
                <Text size={isMobile ? '0.55em' : '0.7em'} color="dark" margin="0 0 0.75em">
                  {duration}
                </Text>
                <ul style={ul}>
                  <PoseGroup preEnterPose="exit">
                    {expanded &&
                      activities.map((activity: string, index: number) => (
                        <ListItem
                          key={'Activity-' + index}
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

              {/* Link Position */}
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
