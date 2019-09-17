import React from 'react'
import { Box, Heading, Text } from 'grommet'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Styles
import '../../../node_modules/react-lazy-load-image-component/src/effects/opacity.css'

// Assets
import intro from '../../assets/intro.json'

//=========================================================
interface Props {}

//=========================================================
const Intro: React.FC<Props> = () => {
  const introTop = 200

  return (
    <>
      <Box
        id="welcome"
        className="relative"
        width="100%"
        height={window.innerHeight + 'px'}
        background="background"
      >
        <Box
          className="absolute"
          width="100%"
          style={{ top: introTop, left: 0, zIndex: 5 }}
          justify="center"
          align="center"
        >
          <Heading level="1" color="white" margin="0.25em 0 0.5em 0">
            {"I'm ".toUpperCase()}
            <u>{'Thomas Maier'.toUpperCase()}</u>
          </Heading>
          <Text
            color="dark"
            size="1.25em"
            textAlign="center"
            style={{
              letterSpacing: '0.1em',
              fontWeight: 600
            }}
          >
            Fullstack Developer.
          </Text>
        </Box>
        <Box className="absolute" width="45%" style={{ right: 0, bottom: 0 }}>
          {/* <LazyLoadImage
          alt={intro.title}
          effect="opacity"
          src={intro.url + `?fm=jpg&fl=progressive&fit=thumb`}
          scrollPosition={false}
          visibleByDefault={false}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
        /> */}
        </Box>
      </Box>
    </>
  )
}

export default Intro
