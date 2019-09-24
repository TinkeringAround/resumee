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
          <Box className="polygon" width="100%" background="background">
            <Box
              width={isMobile ? '90%' : isMedium || isMiddle ? '80%' : '60%'}
              margin="0 auto"
              pad={isMobile ? '6em 0' : '12em 0'}
              align="center"
            >
              <Heading
                level="1"
                margin="0.5em 0 0.25em 0"
                size={isMobile ? '2em' : '3em'}
                color="black"
                textAlign="center"
                style={{
                  letterSpacing: '0.01em',
                  fontWeight: 900
                }}
              >
                My Projects.
              </Heading>
              <Text
                color="dark"
                size="1em"
                margin="0 0 1em 0"
                textAlign="center"
                style={{ padding: isMobile ? '0 .5em' : '0' }}
              >
                Where I have <strong>improved my skills.</strong>
              </Text>

              <Box
                width="100%"
                height={
                  heightMultiplicator *
                    window.innerWidth *
                    (isMobile ? 0.9 : isMedium || isMiddle ? 0.8 : 0.6) *
                    0.5 +
                  'px'
                }
                margin="2em 0"
                direction="row"
                wrap
              >
                {projects.map((project: TProject, index: number) => {
                  return (
                    <Box
                      key={'Project-' + index}
                      className="relative animated noFlickr shadow"
                      width={isMobile ? '98%' : '48%'}
                      height={parsedLength > 0 && !isMobile ? '48%' : '98%'}
                      margin="1%"
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
                        className="animated noFlickr scale"
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
