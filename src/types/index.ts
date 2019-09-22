export type TIntro = {
  title: string
}
//=========================================================

export type TSkill = {
  title: string
  percentage: number
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

//=========================================================
export type TProject = {
  title: string
  type: string
  url: string
  date: string
  image: string
}