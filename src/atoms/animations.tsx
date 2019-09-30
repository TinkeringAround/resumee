import posed from 'react-pose'
import styled from 'styled-components'

// ===============================================
export const AIntro = posed(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: var(--green);
  z-index: 30;
`)({
  exit: {
    opacity: 0,
    height: 0,
    transition: (props: any) => {
      return {
        duration: props.duration
      }
    }
  },
  enter: {
    opacity: 1,
    height: '100vh',
    transition: { duration: 50 }
  }
})

// ===============================================
// Simple
export const ASimple = posed.div({
  exit: { opacity: 0 },
  enter: { opacity: 1, delay: (props: any) => (props.hasOwnProperty('delay') ? props.delay : 0) }
})

// ===============================================
// Overlay
export const AOverlay = posed(styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${(props: any) => (props.hasOwnProperty('zIndex') ? props.zIndex : 21)};

  height: 100%;

  background: ${(props: any) =>
    props.hasOwnProperty('background') ? props.background : 'var(--blue)'};
`)({
  exit: {
    width: 0,
    transition: (props: any) => {
      return { duration: props.duration }
    }
  },
  enter: { width: '100%', transition: { duration: 50 } }
})

// ===============================================
// Menu
export const AMenu = posed.div({
  exit: {
    x: '100%',
    transition: (props: any) => {
      return {
        duration: props.duration
      }
    }
  },
  enter: {
    x: 0,
    transition: (props: any) => {
      return {
        duration: props.duration
      }
    },
    beforeChildren: true,
    staggerChildren: 100
  }
})

export const AMenuItem = posed.div({
  exit: { opacity: 0, left: '-5%' },
  enter: { opacity: 1, left: 0 }
})
