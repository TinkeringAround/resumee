import React, { FC } from 'react'
import { Box, Text, Heading, ResponsiveContext } from 'grommet'
import Particles from 'react-particles-js'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Styles
import '../../../node_modules/react-lazy-load-image-component/src/effects/opacity.css'

// Components
import Scroller from '../../components/scroller'

// Configs
import params from './params'

// Assets
import intro from '../../assets/intro.json'

// Consts
const TOP_DESKTOP = 250
const TOP_MOBILE = 150

//=========================================================
const Intro: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isPhone = size.includes('xsmall')
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isLarge = size.includes('large')

      return (
        <Box
          id="welcome"
          className="relative"
          width="100%"
          height={window.innerHeight + 'px'}
          background="white"
        >
          <Box
            className="absolute"
            width={isMobile ? '70%' : '40%'}
            justify="center"
            style={{
              top: isMobile || isMedium ? TOP_MOBILE : TOP_DESKTOP,
              left: isMobile ? '5%' : '15%',
              zIndex: 5
            }}
          >
            <Heading
              level="1"
              margin="0"
              color="black"
              size={isLarge ? '1.5em' : '1.25em'}
              style={{
                letterSpacing: '0.1em',
                fontWeight: 600
              }}
            >
              Fullstack Developer.
            </Heading>
            <Box width={isMobile || isMedium ? '70%' : '60%'}>
              <Text
                color="dark"
                size={isMobile ? '.7em' : isLarge ? '1em' : '.8em'}
                margin="0.5em 0 0"
                style={{
                  fontWeight: 600
                }}
              >
                I'm constantly trying to improve my technical and social skills to help building
                awesome software for people.
              </Text>
            </Box>
            <Box
              className="gradientBackground"
              width={isMobile ? '60%' : '30%'}
              height={isMobile ? '2px' : '5px'}
              margin="1em 0 0"
            ></Box>
          </Box>
          <Scroller style={{ bottom: isMobile ? 0 : '2em', zIndex: 5 }} />

          {/* Background */}
          <Particles
            width="100%"
            height={window.innerHeight + 'px'}
            //@ts-ignore
            params={params}
            style={{ zIndex: 20, top: 0, left: 0 }}
          />

          <Box
            className="absolute"
            width={isMobile || isLarge ? '100%' : '80%'}
            height={isLarge ? '100%' : '90%'}
            style={{ right: isMobile ? 0 : isLarge ? 0 : '5%', bottom: isLarge ? 0 : '5%' }}
          >
            <LazyLoadImage
              alt={intro.title}
              effect="opacity"
              src={isPhone ? intro.mobile : intro.desktop}
              scrollPosition={false}
              visibleByDefault={false}
              width="100%"
              height="100%"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)
export default Intro
