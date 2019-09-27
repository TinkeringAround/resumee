import React, { FC, useState, useEffect } from 'react'
import { Box } from 'grommet'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Atoms
import { AOverlay } from '../../atoms/animations'

// Assets
import aboutMeImage from '../../assets/aboutMeImage.json'
import { PoseGroup } from 'react-pose'

//=========================================================
interface Props {
  inView: boolean
}

//=========================================================
const Right: FC<Props> = ({ inView }) => {
  const [pose, setPose] = useState<'progressing' | 'finished'>('progressing')

  useEffect(() => {
    if (inView && pose === 'progressing') setPose('finished')
  }, [inView])

  return (
    <Box className="absolute" height="90%" width="70%" style={{ top: '10%', right: 0 }}>
      {/* Animation */}
      <PoseGroup>
        {pose === 'progressing' && (
          <AOverlay key="overlay" zIndex={19} duration={0.7 * window.innerWidth} />
        )}
      </PoseGroup>

      {/* Image */}
      <LazyLoadImage
        alt={aboutMeImage.title}
        effect="opacity"
        src={aboutMeImage.url}
        scrollPosition={false}
        visibleByDefault={false}
        width="100%"
        height="100%"
        style={{ objectFit: 'contain' }}
      />
    </Box>
  )
}

export default Right
