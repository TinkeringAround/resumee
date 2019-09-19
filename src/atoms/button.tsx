import React, { FC } from 'react'

//=========================================================
interface Props {
  text: string
  onClick: any
  size?: string
  inverse?: boolean
}

//=========================================================
const Button: FC<Props> = ({ children, text, onClick, size = '1.25em', inverse = false }) => {
  const style = {
    width: '100%',
    fontSize: size,
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
      className={'animated noFlickr scaleWeak goldHover ' + (inverse ? 'white' : 'dark')}
      style={style}
      onClick={onClick}
    >
      {text.toUpperCase()}
      {children ? children : null}
    </button>
  )
}

export default Button
