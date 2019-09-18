import { TIntro, TCard } from '.'

//=========================================================
declare module 'intro.json' {
  const intro: TIntro
  export default intro
}

declare module 'cv.json' {
  const cv: Array<TCard>
  export default cv
}
