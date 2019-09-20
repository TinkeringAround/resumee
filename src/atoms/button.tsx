import React, { FC } from 'react'
import { ResponsiveContext } from 'grommet'

//=========================================================
interface Props {
  text: string
  onClick: any
  fontSize?: string
  color?: 'white' | 'dark' | 'gold'
}

//=========================================================
const Button: FC<Props> = ({ children, text, onClick, fontSize = '1.25em', color = 'dark' }) => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      const style = {
        width: '100%',
        fontSize: fontSize,
        padding: '0.5em',
        fontWeight: 900,
        borderStyle: 'solid',
        borderWidth: 3,
        letterSpacing: '0.01em',
        background: 'transparent',
        wordSpacing: '0.25em',
        cursor: 'pointer'
      }

      return (
        <button
          className={'animated noFlickr scaleWeak ' + color + ' ' + (!isMobile ? 'goldHover' : '')}
          style={style}
          onClick={onClick}
        >
          {text.toUpperCase()}
          {children}
        </button>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Button
