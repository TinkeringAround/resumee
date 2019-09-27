export type TIntro = {
  title: string
  desktop: string
  mobile: string
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
export type TImage = {
  title: string
  url: string
}

//=========================================================
export type TCard = {
  title: string
  activities: Array<string>
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
