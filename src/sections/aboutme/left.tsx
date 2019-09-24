import React, { FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Partials
import Introduction from './introduction'

//=========================================================
const Left: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box
          className="absolute shadow"
          width={isMobile ? '90%' : '50%'}
          background="white"
          pad={isMobile ? '0' : '5em 6em'}
          style={{ top: '5%', left: '5%', zIndex: 21 }}
        >
          <Introduction />
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Left
