import React, { FC, useState } from 'react'
import { Box, ResponsiveContext, Text } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Partials
import Desktop from './desktop'
import Mobile from './mobile'

// Consts
const links = ['About Me', 'Curriculum Vitae', 'Projects']
const hrefs = ['aboutme', 'cv', 'projects']
const labels = ['Goto About Me Section', 'Goto Curriculum Vitae Section', 'Goto Projects Section']

//=========================================================
interface Props {
  expanded: boolean
}

//=========================================================
const Navigation: FC<Props> = ({ expanded }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')

        return (
          <>
            <Box
              className="fixed animated"
              height={expanded ? '100px' : '75px'}
              width="100%"
              background={expanded ? 'transparent' : 'white'}
              direction="row"
              align="center"
              justify="between"
              style={{ zIndex: 10 }}
            >
              <Box margin="0 0 0 2em">
                <Button
                  text={isMobile ? 'TM' : 'Thomas Maier'}
                  color={expanded ? 'dark' : 'gold'}
                  fontSize={isMobile ? (expanded ? '0.9em' : '0.8em') : expanded ? '1em' : '0.8em'}
                  onClick={() => {
                    const welcome = document.getElementById('welcome')
                    if (welcome) welcome.scrollIntoView({ block: 'end', behavior: 'smooth' })
                  }}
                />
              </Box>
              <Box>
                {isMobile ? (
                  <Text
                    margin="0 2em 0 0"
                    weight="bold"
                    color={expanded ? 'dark' : 'gold'}
                    onClick={() => setOpen(true)}
                  >
                    Menu
                  </Text>
                ) : (
                  <Desktop links={links} labels={labels} hrefs={hrefs} />
                )}
              </Box>
            </Box>
            <Mobile
              expanded={expanded}
              open={open}
              close={() => setOpen(false)}
              links={links}
              labels={labels}
              hrefs={hrefs}
            />
          </>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation
