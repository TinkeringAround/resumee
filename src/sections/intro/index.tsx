import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

// Styles
import '../../../node_modules/react-lazy-load-image-component/src/effects/opacity.css'

// Components
import Scroller from '../../components/scroller'

// Assets
// import intro from '../../assets/intro.json'

//=========================================================
const Intro: FC = () => {
  const introTop = 200

  return (
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
            fontWeight: 900
          }}
        >
          Fullstack Developer.
        </Text>
      </Box>
      <Scroller />
      {/* <Box
        className="absolute"
        width={window.innerWidth / 2 + 'px'}
        height="500px"
        style={{ right: window.innerWidth / 4, bottom: 100 }}
      >
        <LazyLoadImage
          alt={intro.title}
          effect="opacity"
          src={me}
          scrollPosition={false}
          visibleByDefault={false}
          width="100%"
          height="100%"
          style={{ objectFit: 'contain' }}
        />
      </Box> */}
    </Box>
  )
}

export default Intro
