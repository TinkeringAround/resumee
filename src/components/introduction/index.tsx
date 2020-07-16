import React, {FC} from 'react'

import {breakPoints} from '../../styles'

import {useBreakpoint} from '../../hooks'

import {SBox, SHeader, SSubHeader, SWrapper} from './components'
import Icon from '../icons'

//=========================================================
const Introduction: FC = () => {
    const isMobile = useBreakpoint(breakPoints['mobile'])

    return (
        <SBox>
            <SHeader
                steps={[``, 1500, `Fullstack Developer.`, isMobile ? 15000 : 10000]}
                loop={Infinity}
            />
            <SSubHeader>
                I'm constantly trying to improve my technical and social skills to help build awesome
                software for people.
            </SSubHeader>
            <SWrapper>
                <Icon type="github" margin="0 1rem 0 .1rem"/>
                <Icon type="dribbble" margin="0 1rem 0 0"/>
                <Icon type="linkedin" margin="0 1rem 0 0"/>
                <Icon type="facebook" />
            </SWrapper>
        </SBox>
    )
}

export default Introduction
