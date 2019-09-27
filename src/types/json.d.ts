import { TIntro, TCard, TProject, TSkill, TImage } from '.'

//=========================================================
// Intro
declare module 'intro.json' {
  const intro: TIntro
  export default intro
}

//=========================================================
// Navigation
declare module 'navigation.json' {
  const nav: TImage
  export default nav
}

//=========================================================
// About Me
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

declare module 'aboutMeImage.json' {
  const aboutMeImage: TImage
  export default aboutMeImage
}

//=========================================================
// CV
declare module 'cv.json' {
  const cv: Array<TCard>
  export default cv
}

//=========================================================
// Projects
declare module 'projects.json' {
  const projects: Array<TProject>
  export default projects
}
