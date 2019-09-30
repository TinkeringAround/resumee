import React, { FC } from 'react'
import { Box } from 'grommet'

// Types
import { TIcon } from '../../types'

// Atoms
import { email, facebook, linkedIn, github } from '../../atoms/icons'

// Consts
const icons: Array<TIcon> = [email, facebook, linkedIn, github]
const contacts = [
  'mailto:maier.thomas94@gmail.com',
  'https://www.facebook.com/thomas.maier.948',
  'https://www.linkedin.com/in/maier-thomas94',
  'https://github.com/TinkeringAround'
]
const labels = [
  'Write an Email to me',
  'Check me out on Facebook',
  'Check me out on LinkedIn',
  'Check me out on GitHub'
]

//=========================================================
interface Props {
  iconSize?: number
}

//=========================================================
const ContactIcons: FC<Props> = ({ iconSize = 30 }) => (
  <>
    {icons.map((i: TIcon, index: number) => {
      const iSize = iconSize + 'px'

      return (
        <Box
          key={'Contact-Icon-' + index}
          width={iSize}
          height={iSize}
          margin={index === icons.length - 1 ? '0' : '0 0.75em 0 0'}
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
              className="animated white"
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
    })}
  </>
)

export default ContactIcons
