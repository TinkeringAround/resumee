import React, { FC, useState } from 'react'
import { Box, ResponsiveContext, Heading } from 'grommet'

// Atoms
import { ANavigation } from '../../atoms/animations'
import Button from '../../atoms/button'

// Partials
import MenuDialog from './menuDialog'

//=========================================================
interface Props {
  expanded: boolean
  pose: string
  delay: number
}

//=========================================================
const Navigation: FC<Props> = ({ expanded, pose, delay }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')

        return (
          <>
            <ANavigation
              className="fixed animated"
              pose={pose}
              height={expanded ? '100px' : '75px'}
              width={isMobile ? '100%' : 'calc(100% - 10px)'}
              background={expanded ? 'transparent' : 'white'}
              delay={delay}
            >
              <Box margin={isMobile ? '0 0 0 2em' : '0 0 0 4em'}>
                <Button
                  text="TM"
                  uppercase
                  fontSize={isMobile ? (expanded ? '0.9em' : '0.8em') : expanded ? '1em' : '0.8em'}
                  onClick={() => {
                    const welcome = document.getElementById('welcome')
                    if (welcome) welcome.scrollIntoView({ block: 'end', behavior: 'smooth' })
                  }}
                />
              </Box>
              <Box className="cursor" onClick={() => setOpen(true)}>
                <Heading level="4" margin="0 2em 0 0" color="blue">
                  Menu
                </Heading>
              </Box>
            </ANavigation>
            <MenuDialog
              expanded={expanded}
              open={open}
              close={() => setOpen(false)}
              isMobile={isMobile}
            />
          </>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation
