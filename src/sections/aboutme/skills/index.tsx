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
          direction="column"
          margin="0 0 1em 0"
          justify="between"
        >
          <Heading
            level="3"
            color="black"
            margin="0 0 0.5em"
            size={isMedium ? '1.15em' : isMiddle ? '1.25em' : '1.35em'}
            style={{ fontWeight: 600 }}
          >
            Skills
          </Heading>
          <Box height="100%" width="100%" direction="column" align="end">
            {skills.map((skill: TSkill, index: number) => {
              return (
                <Box
                  key={'Skill-' + index}
                  height="100%"
                  width="100%"
                  direction="row"
                  align="center"
                  margin={isMobile ? '0 0 0.75em' : '0 0 1.25em'}
                >
                  <Box
                    width={isMobile ? '85%' : '80%'}
                    background="rgba(176, 176, 176, 0.2)"
                    style={{ borderRadius: borderRadius }}
                  >
                    <Box
                      className="animated"
                      width={skill.percentage + '%'}
                      background="blue"
                      pad={isMobile ? '0 0.5em' : '0 1.5em'}
                      style={{ borderRadius: borderRadius }}
                    >
                      <Text
                        color="white"
                        size={isMobile ? '0.7em' : isMedium ? '0.8em' : '0.9em'}
                        style={{
                          fontWeight: 600,
                          padding: '0.25em'
                        }}
                      >
                        {skill.title}
                      </Text>
                    </Box>
                  </Box>
                  <Text
                    color="black"
                    size={isMobile ? '0.8em' : '0.9em'}
                    style={{ marginLeft: '1em' }}
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
