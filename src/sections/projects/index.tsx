import React, { FC } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Types
import { TProject } from '../../types/index.js'

// Assets
import projects from '../../assets/projects.json'

//=========================================================
const Projects: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      const parsedLength = parseInt(projects.length / 2 + '')
      const heightMultiplicator = isMobile ? projects.length + 1 : parsedLength + 1

      return (
        <Box id="projects" width="100%" background="white">
          <Box width="100%">
            <Box
              width={isMobile ? '90%' : isMedium || isMiddle ? '80%' : '60%'}
              margin="0 auto"
              pad={isMobile ? '3em 0' : '12em 0 8em'}
              align={isMobile ? 'start' : 'center'}
            >
              <Heading
                level="1"
                margin="0"
                size={isMobile ? '1.6em' : '3em'}
                color="black"
                style={{ fontWeight: 900 }}
              >
                My Projects.
              </Heading>
              <Text color="dark" size={isMobile ? '0.8em' : '1em'}>
                Where I have <strong>improved my skills.</strong>
              </Text>
              {isMobile && (
                <Box className="gradientBackground" width="60%" height="3px" margin="0.5em 0 2em" />
              )}
              <Box
                width="100%"
                height={
                  heightMultiplicator *
                    window.innerWidth *
                    (isMobile ? 0.9 : isMedium || isMiddle ? 0.8 : 0.6) *
                    0.5 +
                  'px'
                }
                margin={isMobile ? '' : '4em 0 0'}
                direction="row"
                wrap
              >
                {projects.map((project: TProject, index: number) => {
                  return (
                    <Box
                      key={'Project-' + index}
                      className="relative animated noFlickr shadow"
                      width={isMobile ? '100%' : '48%'}
                      height={parsedLength > 0 && !isMobile ? '48%' : '100%'}
                      margin={isMobile ? (index > 0 ? '1em 0' : '0') : '1%'}
                      style={{ overflow: 'hidden' }}
                    >
                      <Box
                        className="absolute"
                        pad="1em"
                        justify="center"
                        style={{
                          bottom: isMobile ? '1em' : '2em',
                          left: isMobile ? '1em' : '2em',
                          zIndex: 3
                        }}
                      >
                        <Heading
                          level="3"
                          size={isMobile ? '1.25em' : '1.75em'}
                          margin="0"
                          color="white"
                          style={{ fontWeight: 600 }}
                        >
                          {project.title}
                        </Heading>
                        <Text size={isMobile ? '0.75em' : '1em'} color="white">
                          {project.type}
                        </Text>
                        <Text size={isMobile ? '0.5em' : '0.75em'} color="white">
                          {project.date}
                        </Text>
                      </Box>
                      <a
                        className={'animated noFlickr ' + (!isMobile ? 'scale' : '')}
                        aria-label={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', width: '100%', height: '100%' }}
                      >
                        <LazyLoadImage
                          alt={project.title}
                          effect="opacity"
                          src={project.image + `?fm=jpg&fl=progressive&fit=thumb`}
                          scrollPosition={false}
                          visibleByDefault={false}
                          width="100%"
                          height="100%"
                          style={{ objectFit: 'cover' }}
                        />
                      </a>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Projects
