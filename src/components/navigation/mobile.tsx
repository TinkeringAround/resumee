import React from 'react'
import { Portal } from 'react-portal'
import posed, { PoseGroup } from 'react-pose'
import { Box, Text } from 'grommet'

// Components
const Overlay = posed.div({
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 150 },
    beforeChildren: true,
    staggerChildren: 50
  }
})

const OverlayItem = posed.div({
  exit: { opacity: 0, left: '-5%' },
  enter: { opacity: 1, left: 0 }
})

//=========================================================
interface Props {
  expanded: boolean
  open: boolean
  close: any
  links: Array<string>
  labels: Array<string>
  hrefs: Array<string>
}

//=========================================================
const Mobile: React.FC<Props> = ({ expanded, open, close, links, labels, hrefs }) => {
  const overlay = {
    left: 0,
    top: 0,
    zIndex: 800,
    width: '100vw',
    height: window.innerHeight,
    backgroundColor: 'white'
  }

  return (
    <Portal>
      <aside>
        <PoseGroup preEnterPose="exit">
          {open && (
            <Overlay key="Overlay" className="fixed" style={overlay}>
              <Box height="100%" width="100%">
                <Box
                  height={expanded ? '100px' : '75px'}
                  onClick={close}
                  align="end"
                  justify="center"
                  background="background"
                >
                  <Text color="dark" weight="bold" margin="0 2em 0 0">
                    Close
                  </Text>
                </Box>
                <Box height="50%" width="80%" margin="auto" justify="center">
                  {links.map((link: string, index: number) => {
                    return (
                      <OverlayItem
                        key={link}
                        alt={labels[index]}
                        className="relative"
                        style={{ margin: '0 0 2em' }}
                        onClick={() => {
                          const element = document.getElementById(hrefs[index])
                          if (element)
                            element.scrollIntoView({ block: 'start', behavior: 'smooth' })
                          close()
                        }}
                      >
                        <Text size="2em" weight="bold" color="dark">
                          {link}
                        </Text>
                      </OverlayItem>
                    )
                  })}
                </Box>
              </Box>
            </Overlay>
          )}
        </PoseGroup>
      </aside>
    </Portal>
  )
}

export default Mobile
