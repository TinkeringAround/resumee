import React, { FC } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'

//=========================================================
interface Props {
  title: string
  location: string
  url: string
  duration: string
}

//=========================================================
const Card: FC<Props> = ({ title, duration, location, url }) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box
          className="animated noFlickr shadow scaleWeakest"
          width="100%"
          direction={isMobile ? 'column' : 'row'}
          pad={isMobile ? '1em' : '3em'}
          margin={isMobile ? '0.5em 0' : '1em 0'}
        >
          <Box width={isMobile ? '100%' : '70%'} pad={isMobile ? '0' : '0 2em 0 0'}>
            <Heading
              className="noFlickr"
              level="3"
              size={isMobile ? '1em' : '1.25em'}
              color="dark"
              margin="0 0 0.25em 0"
            >
              {title}
            </Heading>
            <Text className="noFlickr" size={isMobile ? '0.6em' : '0.8em'} color="light">
              {duration}
            </Text>
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
                  className="animated noFlickr mono dark goldHover"
                  size={isMobile ? '0.65em' : '0.7em'}
                  style={{ fontWeight: 600 }}
                >
                  {location}
                </Text>
              </a>
            )}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Card
