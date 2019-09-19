import React, { FC } from 'react'
import { Box, Heading } from 'grommet'

// Types
import { TIcon } from '../../../types'

// Atoms
import { email, facebook, linkedIn } from '../../../atoms/icons'

// Consts
const icons: Array<TIcon> = [email, facebook, linkedIn]
const contacts = [
  'mailto:maier.thomas94@gmail.com',
  'https://www.facebook.com/thomas.maier.948',
  'https://www.linkedin.com/in/maier-thomas94'
]
const labels = ['Write an Email to me', 'Check me out on Facebook', 'Check me out on LinkedIn']

//=========================================================
const Contact: FC = () => {
  const size = '35px'

  return (
    <Box width="100%" direction="row" margin="0 0 1em 0">
      <Box width="30%" align="center">
        <Heading level="3" color="black" margin="0">
          Contact
        </Heading>
      </Box>
      <Box height="100%" width="70%" direction="row" align="center" wrap>
        {icons.map((i: TIcon, index: number) => {
          return (
            <Box
              key={'Contact-Icon-' + index}
              width={size}
              height={size}
              margin="0 0.75em 0 0"
              justify="center"
              align="center"
            >
              <a
                className="center"
                aria-label={labels[index]}
                href={contacts[index]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%', height: '100%' }}
              >
                <svg
                  className="animated dark goldHover"
                  width={size}
                  height={size}
                  viewBox={i.viewport}
                >
                  {i.path}
                </svg>
              </a>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Contact
