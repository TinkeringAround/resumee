import React, { FC } from 'react'
import { Box, ResponsiveContext, Image } from 'grommet'

// Assets
import keyboard from '../../assets/keyboard.jpg'

//=========================================================
const Right: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')

      return (
        <Box
          className="absolute"
          height="90%"
          width={isMobile ? '95%' : '70%'}
          style={{ top: '10%', right: 0 }}
        >
          <Image width="100%" height="100%" src={keyboard} fit="cover" />
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Right
