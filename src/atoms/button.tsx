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
  color?: 'white' | 'blue' | 'gradient'
}

//=========================================================
const Button: FC<Props> = ({
  text,
  onClick = null,
  uppercase = false,
  arrow = false,
  fontSize = '1.25em',
  color = 'blue'
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        background: 'transparent',
        padding: '0.75em',

        borderStyle: 'solid',
        borderWidth: isMobile ? 3 : 4,

        fontSize: fontSize,
        fontWeight: 900,
        letterSpacing: '0.01em',

        cursor: 'pointer'
      }

      return (
        <button className={'mont animated ' + color} style={style} onClick={onClick}>
          {uppercase ? text.toUpperCase() : text}
          {arrow && (
            <svg
              className={'icon ' + color}
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
