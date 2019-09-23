import { TIntro, TCard, TProject, TSkill } from '.'

//=========================================================
declare module 'intro.json' {
  const intro: TIntro
  export default intro
}

declare module 'skills.json' {
  const skills: Array<TSkill>
  export default skills
}

declare module 'hobbies.json' {
  const hobbies: Array<string>
  export default hobbies
}

declare module 'languages.json' {
  const languages: Array<TSkill>
  export default languages
}

declare module 'cv.json' {
  const cv: Array<TCard>
  export default cv
}

declare module 'projects.json' {
  const projects: Array<TProject>
  export default projects
}
