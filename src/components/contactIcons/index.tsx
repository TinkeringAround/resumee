import React, { FC } from 'react'
import { ResponsiveContext, Box } from 'grommet'

// Types
import { TIcon } from '../../types'

// Atoms
import { email, facebook, linkedIn } from '../../atoms/icons'

// Consts
const icons: Array<TIcon> = [email, facebook, linkedIn]
const contacts = [
  'mailto:maier.thomas94@gmail.com',
  'https://www.facebook.com/thomas.maier.948',
  'https://www.linkedin.com/in/maier-thomas94'
]
const labels = ['Write an Email to me', 'Check me out on Facebook', 'Check me out on LinkedIn']

//=========================================================
interface Props {
  color?: 'white' | 'dark' | 'gold'
  hover?: 'darkHover' | 'goldHover'
  iconSize?: number
}

//=========================================================
const ContactIcons: FC<Props> = ({ color = 'gold', hover = 'darkHover', iconSize = 30 }) => (
  <ResponsiveContext.Consumer>
    {size =>
      icons.map((i: TIcon, index: number) => {
        const iSize = size.includes('small') ? iconSize + 'px' : iconSize + 5 + 'px'

        return (
          <Box
            key={'Contact-Icon-' + index}
            width={iSize}
            height={iSize}
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
                className={'animated ' + color + ' ' + hover}
                xmlns="http://www.w3.org/2000/svg"
                width={iSize}
                height={iSize}
                viewBox={i.viewport}
              >
                {i.path}
              </svg>
            </a>
          </Box>
        )
      })
    }
  </ResponsiveContext.Consumer>
)

export default ContactIcons
