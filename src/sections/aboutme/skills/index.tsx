import React, { FC } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'

// Types
import { TSkill } from '../../../types/index.js'

// Assets
import skills from '../../../assets/skills.json'

//=========================================================
const Skills: FC = () => (
  <ResponsiveContext.Consumer>
    {size => {
      const borderRadius = 3
      const isMobile = size.includes('small')
      const isMedium = size.includes('medium')
      const isMiddle = size.includes('middle')

      return (
        <Box
          width={isMobile ? '95%' : '100%'}
          direction={isMobile ? 'column' : 'row'}
          margin="0 0 1em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="dark"
            margin={isMobile ? '0 0 0.5em' : isMedium ? '0 0 0 1em' : '0 0 0 2em'}
            size={isMedium ? '1.25em' : isMiddle ? '1.35em' : '1.45em'}
          >
            Skills
          </Heading>
          <Box height="100%" width={isMobile ? '100%' : '75%'} direction="column" align="end">
            {skills.map((skill: TSkill, index: number) => {
              return (
                <Box
                  key={'Skill-' + index}
                  width="100%"
                  direction="row"
                  align="center"
                  margin="0 0 1.5em 0"
                >
                  <Box
                    width={isMobile ? '85%' : '80%'}
                    background="rgba(176, 176, 176, 0.2)"
                    style={{ borderRadius: borderRadius }}
                  >
                    <Box
                      className="darkBackground"
                      width={skill.percentage + '%'}
                      background="gold"
                      pad={isMobile ? '0 0.5em' : '0 1.5em'}
                      style={{ borderRadius: borderRadius }}
                    >
                      <Text
                        color="white"
                        size={isMobile ? '0.7em' : isMedium ? '0.8em' : '0.9em'}
                        style={{
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          padding: '0.25em'
                        }}
                      >
                        {skill.title}
                      </Text>
                    </Box>
                  </Box>
                  <Text
                    color="gold"
                    size={isMobile ? '0.8em' : '0.9em'}
                    style={{ fontWeight: 600, marginLeft: '1em' }}
                  >
                    {skill.percentage + '%'}
                  </Text>
                </Box>
              )
            })}
          </Box>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default Skills