import styled from 'styled-components'
import Typical from 'react-typical'

// Styles
import { colors } from '../../styles/'

//=========================================================
export const SBox = styled.div`
  position: absolute;
  top: 15%;
  left: 7.5%;
  z-index: 30;

  width: 40%;

  display: flex;
  flex-direction: column;
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
  width: 80%;

  margin: 0.25rem 0 0 0.15rem;

  color: ${colors['darkgrey']};
  font-size: 1rem;
  font-family: Muli;
  font-weight: 600;
  line-height: 1.5;

  cursor: default;
`

export const SWrapper = styled.div`
  margin: 0.75rem 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`
