import React, { FC } from 'react'
import { Box, Heading } from 'grommet'

// Atoms
import { email, facebook, linkedIn } from '../../../atoms/icons'

// Consts
const contacts = [
  'mailto:maier.thomas94@gmail.com',
  'https://www.facebook.com/thomas.maier.948',
  'https://www.linkedin.com/in/maier-thomas94'
]
const labels = ['Write an Email to me', 'Check me out on Facebook', 'Check me out on LinkedIn']

//=========================================================
const Contact: FC = () => {
  const wrapper = '40px'
  const icon = '40px'

  return (
    <Box width="100%" direction="row" margin="0 0 2em 0">
      <Box width="30%" justify="center" align="center">
        <Heading level="3" color="black" margin="0">
          Contact
        </Heading>
      </Box>
      <Box height="100%" width="70%" direction="row" align="center" pad="0 1em" wrap>
        <Box
          className="animated scaleWeak"
          width={wrapper}
          height={wrapper}
          margin="0 0.5em"
          justify="center"
          align="center"
        >
          <a
            aria-label={labels[0]}
            href={contacts[0]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg
              className="animated dark goldHover"
              width={icon}
              height={icon}
              viewBox={email.viewport}
            >
              {email.path}
            </svg>
          </a>
        </Box>
        <Box
          className="animated scaleWeak"
          width={wrapper}
          height={wrapper}
          margin="0 0.5em"
          justify="center"
          align="center"
        >
          <a
            aria-label={labels[1]}
            href={contacts[1]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg
              className="animated dark goldHover"
              width={icon}
              height={icon}
              viewBox={facebook.viewport}
            >
              {facebook.path}
            </svg>
          </a>
        </Box>
        <Box
          className="animated scaleWeak"
          width={wrapper}
          height={wrapper}
          margin="0 0.5em"
          justify="center"
          align="center"
        >
          <a
            aria-label={labels[2]}
            href={contacts[2]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg
              className="animated dark goldHover"
              width={icon}
              height={icon}
              viewBox={linkedIn.viewport}
            >
              {linkedIn.path}
            </svg>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
