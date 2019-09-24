import posed from 'react-pose'
import styled from 'styled-components'

// ===============================================
// Intro
export const AIntro = posed(styled.div`
  width: 100%;
`)({
  exit: {
    height: '100vh',
    transition: { duration: 1000 }
  },
  enter: {
    height: 0,
    transition: { duration: 1500 },
    beforeChildren: true,
    staggerChildren: 100
  }
})

// ===============================================
// Navigation
export const ANavigation = posed(styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};

  background: ${(props: any) => props.background};
  z-index: 30;
`)({
  exit: { opacity: 0 },
  enter: { opacity: 1, delay: (props: any) => (props.hasOwnProperty('delay') ? props.delay : 0) }
})
// ===============================================
export const ASimple = posed.div({
  exit: { opacity: 0 },
  enter: { opacity: 1 }
})

// ===============================================
// Menu
export const AMenu = posed.div({
  exit: {
    x: '100%',
    transition: { duration: 1000 }
  },
  enter: {
    x: 0,
    transition: { duration: 1000 },
    beforeChildren: true,
    staggerChildren: 100
  }
})

export const AMenuItem = posed.div({
  exit: { opacity: 0, left: '-5%' },
  enter: { opacity: 1, left: 0 }
})

// ===============================================
