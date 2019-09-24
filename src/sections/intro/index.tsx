import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'
import Particles from 'react-particles-js'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

// Styles
import '../../../node_modules/react-lazy-load-image-component/src/effects/opacity.css'

// Components
import Scroller from '../../components/scroller'

// Config
import params from './params'
// Assets
// import intro from '../../assets/intro.json'

//=========================================================
interface Props {
  top: number
}

//=========================================================
const Intro: FC<Props> = ({ top }) => (
  <Box
    id="welcome"
    className="relative"
    width="100%"
    height={window.innerHeight + 'px'}
    background="white"
  >
    <Box
      className="absolute"
      width="40%"
      justify="center"
      style={{ top: top, left: '10%', zIndex: 5 }}
    >
      <Heading className="gradient" level="1" margin="0" style={{ fontWeight: 900 }}>
        {"I'm Thomas Maier".toUpperCase()}
      </Heading>
      <Text
        color="dark"
        size="1.25em"
        style={{
          letterSpacing: '0.1em',
          fontWeight: 600
        }}
      >
        Fullstack Developer.
      </Text>
      <Box width="60%">
        <Text
          color="dark"
          size=".8em"
          margin="0.5em 0 0"
          style={{
            letterSpacing: '0.1em',
            fontWeight: 600
          }}
        >
          Still trying to find my place in the world, I'm constantly trying to improve my technical
          and social skills to help building awesome software for people.
        </Text>
      </Box>
    </Box>
    <Scroller />

    {/* Background */}
    <Particles
      width="100%"
      height={window.innerHeight + 'px'}
      params={params}
      style={{ zIndex: 20, top: 0, left: 0 }}
    />
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
export default Intro
