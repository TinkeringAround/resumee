import React from 'react'
import { Box } from 'grommet'

//=========================================================
interface Props {}
//=========================================================
const Navigation: React.FC<Props> = () => {
  const listitem = {
    color: 'white',
    display: 'inline',
    fontSize: '1em',
    fontWeight: 600,
    fontFamily: 'Roboto Mono',
    margin: '0 0.75em',
    cursor: 'pointer'
  }

  return (
    <Box
      className="fixed"
      height="100px"
      width="100%"
      background="transparent"
      align="end"
      justify="center"
      style={{ zIndex: 10 }}
    >
      <Box pad="0 2em">
        <nav>
          <ul>
            <li style={listitem}>Welcome</li>
            <li style={listitem}>About Me</li>
            <li style={listitem}>Curriculum Vitae</li>
            <li style={listitem}>Projects</li>
          </ul>
        </nav>
      </Box>
    </Box>
  )
}

export default Navigation
