import React, { FC, useState } from 'react'
import { Box, ResponsiveContext, Heading } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Partials
import MenuDialog from './menuDialog'

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
              width={isMobile ? '100%' : 'calc(100% - 10px)'}
              background={expanded ? 'transparent' : 'white'}
              direction="row"
              justify="between"
              align="center"
              style={{ zIndex: 30 }}
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
                <Heading level="4" margin="0 2em 0 0" color="blue" style={{ fontWeight: 900 }}>
                  Menu
                </Heading>
              </Box>
            </Box>
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
