import React, { FC, useEffect, useState } from 'react'
import { ResponsiveContext, Box, Text, Heading } from 'grommet'

// Atoms
import { AOverlay } from '../../atoms/animations'

// Partials
import Skills from './skills'
import Hobbies from './hobbies'
import Languages from './languages'
import { PoseGroup } from 'react-pose'

//=========================================================
interface Props {
  inView: boolean
}

//=========================================================
const Left: FC<Props> = ({ inView }) => {
  const [pose, setPose] = useState<'progressing' | 'finished'>('progressing')

  useEffect(() => {
    if (inView && pose === 'progressing') setPose('finished')
  }, [inView])

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')
        const isMedium = size.includes('medium')
        const isMiddle = size.includes('middle')

        return (
          <Box
            className={isMobile ? '' : 'absolute shadow'}
            background="white"
            width={isMobile ? '100%' : isMedium ? '60%' : '50%'}
            margin="0"
            pad={isMobile ? '0' : isMedium ? '2.5em 2.5em' : isMiddle ? '2.5em 3.5em' : '4em 5em'}
            style={isMobile ? {} : { top: 0, left: '5%', zIndex: 21 }}
          >
            {/* Animation */}
            <PoseGroup>
              {pose === 'progressing' && (
                <AOverlay
                  key="overlay"
                  zIndex={19}
                  duration={isMobile ? 1.25 * window.innerWidth : 0.5 * window.innerWidth}
                />
              )}
            </PoseGroup>

            {/* Content */}
            <Heading
              level="1"
              color="black"
              margin="0"
              size={isMobile ? '1.6em' : '2em'}
              style={{ fontWeight: 900 }}
            >
              My typical Tech-Stack
            </Heading>
            <Text color="dark" size={isMobile ? '0.8em' : '1em'}>
              React-Frontends and Nodejs-Backends.
            </Text>
            <Box
              className="gradientBackground"
              width={isMobile ? '60%' : '30%'}
              height="2px"
              margin="1em 0 2em"
            />
            <Skills />
            <Hobbies />
            <Languages />
          </Box>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Left
