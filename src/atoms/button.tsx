import React, { FC } from 'react'
import { ResponsiveContext } from 'grommet'

// Atoms
import { ArrowRight } from './icons'

//=========================================================
interface Props {
  text: string
  onClick?: any
  fontSize?: string
  uppercase?: boolean
  arrow?: boolean
}

//=========================================================
const Button: FC<Props> = ({
  text,
  onClick = null,
  uppercase = false,
  arrow = false,
  fontSize = '1.25em'
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        background: 'white',
        padding: '0.75em',

        borderStyle: 'solid',
        borderWidth: isMobile ? 3 : 4,

        fontFamily: 'Montserrat',
        fontSize: fontSize,
        fontWeight: 900,
        letterSpacing: '0.01em',

        cursor: 'pointer'
      }

      return (
        <button className="animated blue" style={style} onClick={onClick}>
          {uppercase ? text.toUpperCase() : text}
          {arrow && (
            <svg
              className="icon blue"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox={ArrowRight.viewport}
              style={{ marginLeft: '1em' }}
            >
              {ArrowRight.path}
            </svg>
          )}
        </button>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Button
