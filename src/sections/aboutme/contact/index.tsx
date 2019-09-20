import React, { FC } from 'react'
import { Box, Heading, ResponsiveContext } from 'grommet'

// Types
import { TIcon } from '../../../types'

// Atoms
import { email, facebook, linkedIn } from '../../../atoms/icons'

// Consts
const icons: Array<TIcon> = [email, facebook, linkedIn]
const contacts = [
  'mailto:maier.thomas94@gmail.com',
  'https://www.facebook.com/thomas.maier.948',
  'https://www.linkedin.com/in/maier-thomas94'
]
const labels = ['Write an Email to me', 'Check me out on Facebook', 'Check me out on LinkedIn']

//=========================================================
const Contact: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const iconSize = isMobile ? '30px' : '35px'

      return (
        <Box
          width="100%"
          direction={isMobile ? 'column' : 'row'}
          margin="0 0 2em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="dark"
            margin={isMobile ? '0 auto 0.5em auto' : isMedium ? '0 0 0 1em' : '0 0 0 2em'}
            size={isMedium ? '1.25em' : '1.5em'}
          >
            Contact
          </Heading>
          <Box
            height="100%"
            width={isMobile ? '100%' : '75%'}
            direction="row"
            align="center"
            justify={isMobile ? 'center' : 'start'}
            pad={isMobile ? '0' : '0 2em 0 0'}
            wrap
          >
            {icons.map((i: TIcon, index: number) => {
              return (
                <Box
                  key={'Contact-Icon-' + index}
                  width={iconSize}
                  height={iconSize}
                  margin={index === icons.length - 1 ? '0' : '0 0.75em 0 0'}
                  justify="center"
                  align="center"
                >
                  <a
                    className="center"
                    aria-label={labels[index]}
                    href={contacts[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <svg
                      className="animated gold darkHover"
                      width={iconSize}
                      height={iconSize}
                      viewBox={i.viewport}
                    >
                      {i.path}
                    </svg>
                  </a>
                </Box>
              )
            })}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Contact
