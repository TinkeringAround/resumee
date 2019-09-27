import React, { FC, useState } from 'react'
import { Box, ResponsiveContext, Heading } from 'grommet'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Partials
import MenuDialog from './menuDialog'

// Assets
import navigation from '../../assets/navigation.json'

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
        const isMedium = size.includes('medium')

        const logoSize = isMobile ? '40px' : isMedium ? '48px' : '56px'

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
              <Box
                className="animated"
                margin={isMobile ? '0 0 0 1em' : '0 0 0 2em'}
                justify="center"
                align={isMobile ? 'start' : 'center'}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const welcome = document.getElementById('welcome')
                  if (welcome) welcome.scrollIntoView({ block: 'end', behavior: 'smooth' })
                }}
              >
                <LazyLoadImage
                  alt={navigation.title}
                  effect="opacity"
                  src={navigation.url}
                  scrollPosition={false}
                  visibleByDefault
                  width={logoSize}
                  height={logoSize}
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Box className="cursor" onClick={() => setOpen(true)}>
                <Heading
                  level="4"
                  margin={isMobile ? '0 1em 0 0' : '0 2em 0 0'}
                  color="blue"
                  style={{ fontWeight: 900 }}
                >
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
