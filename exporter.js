var fs = require('fs')
require('dotenv').config()

// Shuffle
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ===============================================
const contentful = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API_KEY
})

const pathPrefix = './src/assets/'

// ===============================================

// Intro
contentful
  .getEntries({
    content_type: 'intro',
    include: 2
  })
  .then(results => {
    if (results.hasOwnProperty('items')) {
      const intro = {
        title: results.items[0].fields['title']
      }
      fs.writeFileSync(pathPrefix + 'intro.json', JSON.stringify(intro, null, 2), 'utf-8')
    }
  })
  .catch(error => console.log('Intro:', error))

// ===============================================

// Skills
contentful
  .getEntries({
    content_type: 'aboutMe',
    include: 2
  })
  .then(results => {
    if (results.hasOwnProperty('items')) {
      const skills = results.items[0].fields['skills'].map(skill => {
        return {
          title: skill.fields['title'],
          percentage: skill.fields['percentage']
        }
      })

      const hobbies = results.items[0].fields['hobbies']

      fs.writeFileSync(
        pathPrefix + 'skills.json',
        JSON.stringify(shuffle(skills), null, 2),
        'utf-8'
      )

      fs.writeFileSync(
        pathPrefix + 'hobbies.json',
        JSON.stringify(shuffle(hobbies), null, 2),
        'utf-8'
      )
    }
  })
  .catch(error => console.log('Skills & Hobbies:', error))

// ===============================================

// Curriculum Vitae
contentful
  .getEntries({
    content_type: 'cv',
    include: 2
  })
  .then(results => {
    if (results.hasOwnProperty('items')) {
      const cards = results.items[0].fields['cards'].map(step => {
        return {
          title: step.fields['title'],
          activities: step.fields['activities'].split('\n'),
          location: {
            name: step.fields['location'],
            url: step.fields['url']
          },
          duration: step.fields['duration']
        }
      })
      fs.writeFileSync(pathPrefix + 'cv.json', JSON.stringify(cards, null, 2), 'utf-8')
    }
  })
  .catch(error => console.log('CV:', error))

// ===============================================

// Projects
contentful
  .getEntries({
    content_type: 'project',
    include: 2
  })
  .then(results => {
    if (results.hasOwnProperty('items')) {
      const projects = results.items.map(project => {
        return {
          title: project.fields['title'],
          type: project.fields['type'],
          url: project.fields['url'],
          date: project.fields['date'],
          image: 'https:' + project.fields['image'].fields['file'].url
        }
      })
      fs.writeFileSync(pathPrefix + 'projects.json', JSON.stringify(projects, null, 2), 'utf-8')
    }
  })
  .catch(error => console.log('Projects:', error))
