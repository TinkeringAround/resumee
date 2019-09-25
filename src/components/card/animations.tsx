import posed from 'react-pose'
import styled from 'styled-components'

// Consts
const DURATION = 250

//=========================================================
// Styled Components
const StyledAccordion = styled.div`
  display: flex;
  width: ${(props: any) => props.width};
  background: white;

  flex-direction: column;
  padding: ${(props: any) => props.pad};
  margin: ${(props: any) => props.margin};
  cursor: pointer;
`

//=========================================================
export const Accordion = posed(StyledAccordion)({
  normal: {
    height: (props: any) => props.height,
    scale: 1,
    transition: {
      duration: DURATION
    }
  },
  expanded: {
    height: (props: any) => props.expandedHeight,
    scale: 1.025,
    transition: { duration: DURATION }
  }
})

//=========================================================
export const ListItem = posed.li({
  exit: {
    opacity: 0,
    transition: { duration: DURATION }
  },
  enter: {
    opacity: 1,
    delay: 2 * DURATION
  }
})
