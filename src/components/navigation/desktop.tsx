import React from 'react'
import { ResponsiveContext } from 'grommet'

//=========================================================
interface Props {
  links: Array<string>
  labels: Array<string>
  hrefs: Array<string>
}

//=========================================================
const Desktop: React.FC<Props> = ({ links, labels, hrefs }) => (
  <ResponsiveContext.Consumer>
    {size => {
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
        cursor: 'pointer'
      }

      return (
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
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Desktop
