import React, { FC } from 'react'

//=========================================================
interface Props {
  text: string
  onClick: any
  size?: string
  inverse?: boolean
}

//=========================================================
const Button: FC<Props> = ({ text, onClick, size = '1.25em', inverse = false }) => {
  const style = {
    fontSize: size,
    padding: '0.5em',
    fontWeight: 900,
    borderWidth: 3,
    letterSpacing: '0.01em',
    background: 'transparent',
    wordSpacing: '0.25em'
  }

  return (
    <button
      className={'animated scaleWeak goldHover ' + (inverse ? 'white' : 'dark')}
      style={style}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  )
}

export default Button
