import React, { FC } from 'react'
import { Box, Heading, ResponsiveContext } from 'grommet'

// Components
import ContactIcons from '../../../components/contactIcons'

//=========================================================
const Contact: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      return (
        <Box
          width={isMobile ? '95%' : '100%'}
          direction={isMobile ? 'column' : 'row'}
          margin="0 0 2em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="dark"
            margin={isMobile ? '0 0 0.5em' : isMedium ? '0 0 0 1em' : '0 0 0 2em'}
            size={isMedium ? '1.25em' : isMiddle ? '1.35em' : '1.45em'}
          >
            Contact
          </Heading>
          <Box
            height="100%"
            width={isMobile ? '100%' : '75%'}
            direction="row"
            align="center"
            pad={isMobile ? '0' : '0 2em 0 0'}
            wrap
          >
            <ContactIcons />
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Contact
