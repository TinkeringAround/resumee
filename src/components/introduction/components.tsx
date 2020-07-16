import styled from 'styled-components'
import Typical from 'react-typical'


import { colors, breakPoints } from '../../styles/'

//=========================================================
export const SBox = styled.div`
  position: absolute;
  top: 15%;
  left: 7.5%;
  z-index: 30;

  width: 70%;

  display: flex;
  flex-direction: column;

  @media (max-width: ${breakPoints['mobile']}px) {
    top: 5%;
    width: 85%;
  }
`

export const SHeader = styled(Typical)`
  margin: 0;

  font-size: 2.5rem;
  font-family: Montserrat;
  letter-spacing: 0.1rem;
  font-weight: bold;

  color: ${colors['black']};

  cursor: default;
`

export const SSubHeader = styled.span`
  width: 60%;

  margin: 0.25rem 0 0 0.15rem;

  color: ${colors['darkgrey']};
  font-size: 1rem;
  font-family: Muli;
  font-weight: 600;
  line-height: 1.5;

  cursor: default;

  @media (max-width: ${breakPoints['mobile']}px) {
    width: 90%;
  }
`

export const SWrapper = styled.div`
  margin: 0.75rem 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`
