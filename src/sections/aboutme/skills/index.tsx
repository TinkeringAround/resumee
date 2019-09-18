import React, { FC } from 'react'
import { Box, Heading, Text } from 'grommet'

// Consts
const skills = [
  'HTML, CSS & JavaScript',
  'Docker & Kubernetes & AWS',
  'C#, GoLang, Java',
  'Headless CMS',
  'App Development'
]
const percentages = ['95%', '90%', '75%', '80%', '60%']

//=========================================================
const Skills: FC = () => {
  const borderRadius = 3

  return (
    <Box width="100%" direction="row" margin="0 0 1em 0">
      <Box width="30%" justify="center" align="center">
        <Heading level="3" color="black" margin="0">
          Skills
        </Heading>
      </Box>
      <Box height="100%" width="70%" direction="column" align="end">
        {skills.map((skill: string, index: number) => {
          return (
            <Box
              id={'Skill-' + index}
              key={'Skill-' + index}
              width="100%"
              direction="row"
              justify="center"
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
                  width={percentages[index]}
                  background="dark"
                  pad="0 1.5em"
                  style={{ borderRadius: borderRadius }}
                >
                  <Text
                    color="white"
                    size="0.9em"
                    style={{ fontWeight: 600, letterSpacing: '0.1em', padding: '0.25em' }}
                  >
                    {skill}
                  </Text>
                </Box>
              </Box>
              <Text color="gold" size="0.9em" style={{ fontWeight: 600, marginLeft: '1em' }}>
                {percentages[index]}
              </Text>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Skills
