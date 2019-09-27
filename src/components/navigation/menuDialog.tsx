import React, { FC } from 'react'
import { Portal } from 'react-portal'
import { PoseGroup } from 'react-pose'
import { Box, Text, Heading } from 'grommet'

// Atoms
import { AMenu, AMenuItem, ASimple } from '../../atoms/animations'

// Components
import ContactIcons from '../contactIcons'

// Consts
const links = ['About Me', 'Curriculum Vitae', 'Projects']
const hrefs = ['aboutme', 'cv', 'projects']
const labels = ['Goto About Me Section', 'Goto Curriculum Vitae Section', 'Goto Projects Section']

// Styles
const overlay = {
  display: 'flex',
  left: 0,
  top: 0,
  zIndex: 800,
  width: '100vw',
  height: '100%',
  backgroundColor: 'black',
  maxWidth: '100vw'
}

//=========================================================
interface Props {
  expanded: boolean
  open: boolean
  close: any
  isMobile: boolean
}

//=========================================================
const MenuDialog: FC<Props> = ({ expanded, open, close, isMobile }) => {
  const borderWidth = isMobile ? 40 : 100

  return (
    <Portal>
      <aside>
        <PoseGroup preEnterPose="exit" flipMove={false}>
          {open && (
            <AMenu
              key="Overlay"
              className="fixed noScrolling"
              duration={isMobile ? 1.25 * window.innerWidth : 1000}
              style={overlay}
            >
              <Box className="relative" width={`calc(100% - ${borderWidth}px)`}>
                <Box
                  className="cursor"
                  height={expanded ? '100px' : '75px'}
                  onClick={close}
                  align="end"
                  justify="center"
                >
                  <ASimple
                    key="Header"
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'space-between' : 'flex-end'
                    }}
                  >
                    <Box margin={isMobile ? '0 0 0 2em' : '0'} direction="row">
                      <ContactIcons iconSize={isMobile ? 30 : 35} />
                    </Box>
                    <Heading
                      level="4"
                      color="white"
                      margin={isMobile ? '0 1em' : '0 2em'}
                      style={{ fontWeight: 900 }}
                    >
                      Close
                    </Heading>
                  </ASimple>
                </Box>
                <Box height="50%" width="80%" margin="auto" justify="center">
                  {links.map((link: string, index: number) => (
                    <AMenuItem
                      className="relative cursor mont"
                      key={link}
                      alt={labels[index]}
                      style={{ margin: '0 0 2em' }}
                      onClick={() => {
                        const element = document.getElementById(hrefs[index])
                        if (element) element.scrollIntoView({ block: 'start', behavior: 'smooth' })
                        close()
                      }}
                    >
                      <Text
                        className="mont"
                        size={isMobile ? '2em' : '3em'}
                        weight="bold"
                        color="white"
                      >
                        {link}
                      </Text>
                    </AMenuItem>
                  ))}
                </Box>
              </Box>
              <Box id="border" width={`${borderWidth}px`} height="100%" background="blue" />
            </AMenu>
          )}
        </PoseGroup>
      </aside>
    </Portal>
  )
}

export default MenuDialog
