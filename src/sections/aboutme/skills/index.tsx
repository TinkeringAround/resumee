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
      const isMedium = size.includes('medium')

      return (
        <Box width="100%" direction="row" margin="0 0 1em 0">
          <Box width="30%" align="center">
            <Heading level="3" color="black" margin="0">
              Skills
            </Heading>
          </Box>
          <Box height="100%" width="70%" direction="column" align="end">
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
                    width="80%"
                    background="rgba(176, 176, 176, 0.2)"
                    style={{ borderRadius: borderRadius }}
                  >
                    <Box
                      className="goldBackground"
                      width={skill.percentage + '%'}
                      background="dark"
                      pad="0 1.5em"
                      style={{ borderRadius: borderRadius }}
                    >
                      <Text
                        color="white"
                        size={isMedium ? '0.8em' : '0.9em'}
                        style={{ fontWeight: 600, letterSpacing: '0.1em', padding: '0.25em' }}
                      >
                        {skill.title}
                      </Text>
                    </Box>
                  </Box>
                  <Text color="gold" size="0.9em" style={{ fontWeight: 600, marginLeft: '1em' }}>
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
