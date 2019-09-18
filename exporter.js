var fs = require('fs')
require('dotenv').config()

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
