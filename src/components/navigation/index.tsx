import React, { FC } from 'react'
import { Box } from 'grommet'

// Atoms
import Button from '../../atoms/button'

// Consts
const links = ['About me', 'Curriculum Vitae', 'Projects']
const hrefs = ['aboutme', 'cv', 'projects']
const labels = ['Goto About Me Section', 'Goto Curriculum Vitae Section', 'Goto Projects Section']

//=========================================================
interface Props {
  expanded: boolean
}

//=========================================================
const Navigation: FC<Props> = ({ expanded }) => {
  const listitem = {
    display: 'inline',
    fontSize: '1em',
    fontWeight: 600,
    fontFamily: 'Roboto Mono',
    margin: '0 0.75em',
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
      style={{ zIndex: 10, boxShadow: expanded ? 'none' : '0px 5px 5px 5px rgba(0, 0, 0, 0.05)' }}
    >
      <Box margin="0 0 0 2em">
        <Button
          text="Thomas Maier"
          inverse={expanded}
          size={expanded ? '1em' : '0.8em'}
          onClick={() => {
            const welcome = document.getElementById('welcome')
            if (welcome) welcome.scrollIntoView({ block: 'end', behavior: 'smooth' })
          }}
        />
      </Box>
      <Box>
        <nav style={{ margin: '0 1em 0 0' }}>
          <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {links.map((link: string, index: number) => (
              <li key={'Link-' + index} className="animated scale" style={listitem}>
                <a
                  className="animated goldHover dark whiteHover"
                  arial-label={labels[index]}
                  style={{ textDecoration: 'none' }}
                  onClick={() => {
                    const goto = document.getElementById(hrefs[index])
                    if (goto) goto.scrollIntoView({ block: 'start', behavior: 'smooth' })
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Box>
    </Box>
  )
}

export default Navigation
