import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'

//=========================================================
interface Props {
  title: string
  location: string
  url?: string | null
  duration: string
}

//=========================================================
const Card: FC<Props> = ({ title, duration, location, url = null }) => {
  return (
    <Box
      className="animated shadow scaleWeak"
      width="100%"
      direction="row"
      pad="3em"
      margin="1em 0"
    >
      <Box width="70%" pad="0 2em 0 0">
        <Heading level="3" size="1.5em" color="dark" margin="0 0 0.25em 0">
          {title}
        </Heading>
        <Text size="0.8em" color="light">
          {duration}
        </Text>
      </Box>
      <Box width="30%" align="end" justify="end">
        {url && (
          <a
            aria-label={location}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', textAlign: 'end' }}
          >
            <Text
              className="animated mono light goldHover"
              size="0.8em"
              style={{ fontWeight: 600 }}
            >
              {location}
            </Text>
          </a>
        )}
        {!url && (
          <Text
            className="mono"
            size="0.8em"
            color="light"
            textAlign="end"
            style={{ fontWeight: 600 }}
          >
            {location}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default Card
