export type TIntro = {
  title: string
}

//=========================================================

export type TIcon = {
  viewport: string
  path: JSX.Element
}

//=========================================================

export type TCard = {
  title: string
  duration: string
  location: {
    name: string
    url: string
  }
}
