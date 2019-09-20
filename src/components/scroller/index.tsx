import React, { FC } from 'react'
import { Box } from 'grommet'

//=========================================================
const Scroller: FC = () => (
  <Box
    className="absolute"
    width="100%"
    style={{ bottom: '2em', zIndex: 5 }}
    justify="center"
    align="center"
  >
    <Box
      className="relative"
      height="50px"
      width="3px"
      margin="0 0 20px 0"
      style={{ borderRadius: 3, overflow: 'hidden' }}
    >
      <Box
        background="white"
        width="100%"
        height="100%"
        style={{
          animation: 'scrolling 3s cubic-bezier(0.14, 1.12, 0.67, 0.99) 0s infinite',
          borderRadius: 3
        }}
      ></Box>
    </Box>
  </Box>
)

export default Scroller
