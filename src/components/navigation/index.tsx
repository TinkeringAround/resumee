import React, { FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Consts
const links = ['About Me', 'Curriculum Vitae', 'Projects']
const hrefs = ['aboutme', 'cv', 'projects']
const labels = ['Goto About Me Section', 'Goto Curriculum Vitae Section', 'Goto Projects Section']

//=========================================================
interface Props {
  expanded: boolean
}

//=========================================================
const Navigation: FC<Props> = ({ expanded }) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')

      const listitem = {
        display: 'inline',
        margin: '0 0.75em'
      }

      const button = {
        textDecoration: 'none',
        border: 'none',
        background: 'transparent',
        fontSize: isMedium ? '0.9em' : '1em',
        fontWeight: 600,
        fontFamily: 'Roboto Mono',
        cursor: 'pointer'
      }

      return (
        <Box
          className="fixed animated"
          height={expanded ? '100px' : '75px'}
          width="100%"
          background={expanded ? 'transparent' : 'white'}
          direction="row"
          align="center"
          justify="between"
          style={{
            zIndex: 10,
            boxShadow: expanded ? 'none' : '0px 5px 5px 5px rgba(0, 0, 0, 0.05)'
          }}
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
            {!isMobile && (
              <nav style={{ margin: '0 1em 0 0' }}>
                <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {links.map((link: string, index: number) => (
                    <li key={'Link-' + index} className="animated noFlickr scale" style={listitem}>
                      <button
                        className="animated noFlickr dark goldHover"
                        arial-label={labels[index]}
                        style={button}
                        onClick={() => {
                          const goto = document.getElementById(hrefs[index])
                          if (goto) goto.scrollIntoView({ block: 'start', behavior: 'smooth' })
                        }}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Navigation
