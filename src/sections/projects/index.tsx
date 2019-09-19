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
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      const parsedLength = parseInt(projects.length / 2 + '')
      const heightMultiplicator = parsedLength + 1

      return (
        <Box id="projects" className="polygon" width="100%" background="background">
          <Box
            width={isMedium || isMiddle ? '80%' : '60%'}
            margin="0 auto"
            pad="12em 0 0 0"
            align="center"
          >
            <Heading
              className="mono"
              level="1"
              margin="0.5em 0 0.25em 0"
              size="2.5em"
              color="dark"
              textAlign="center"
              style={{
                letterSpacing: '0.01em',
                fontWeight: 600
              }}
            >
              My Projects.
            </Heading>
            <Text
              color="light"
              size="1em"
              margin="0 0 1em 0"
              textAlign="center"
              style={{
                letterSpacing: '0.1em',
                fontWeight: 600
              }}
            >
              Where I have already proven my skills.
            </Text>

            <Box
              width="100%"
              height={
                heightMultiplicator * window.innerWidth * (isMedium || isMiddle ? 0.8 : 0.6) * 0.5 +
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
                    className="relative animated noFlickr shadow scaleWeakest"
                    width="48%"
                    height={parsedLength > 0 ? '48%' : '98%'}
                    background="white"
                    margin="1%"
                    pad="1em"
                  >
                    <Box
                      className="absolute"
                      pad="1em"
                      justify="center"
                      style={{ bottom: '2em', left: '2em', zIndex: 2 }}
                    >
                      <Heading
                        className="mono noFlickr"
                        level="3"
                        size="1.5em"
                        margin="0"
                        color="white"
                        style={{ fontWeight: 600 }}
                      >
                        {project.title}
                      </Heading>
                      <Text className="noFlickr" size="1em" color="white">
                        {project.type}
                      </Text>
                      <Text className="noFlickr" size="0.75em" color="white">
                        {project.date}
                      </Text>
                    </Box>
                    <a
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
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Projects
