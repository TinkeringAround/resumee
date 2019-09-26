import React, { FC } from 'react'
import { Box } from 'grommet'

//=========================================================
interface Props {
  style: any
}

//=========================================================
const Scroller: FC<Props> = ({ style }) => (
  <Box className="absolute" width="100%" style={style} justify="center" align="center">
    <Box
      className="relative"
      height="50px"
      width="5px"
      margin="0 0 20px 0"
      style={{ borderRadius: 3, overflow: 'hidden' }}
    >
      <Box
        className="gradientBackground"
        width="100%"
        height="100%"
        style={{
          animation: 'scrolling 3s cubic-bezier(0.14, 1.12, 0.67, 0.99) 1s infinite',
          borderRadius: 3
        }}
      ></Box>
    </Box>
  </Box>
)

export default Scroller
