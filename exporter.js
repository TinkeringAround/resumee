var fs = require('fs')
require('dotenv').config()

// ===============================================
const contentful = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API_KEY
})

const pathPrefix = './src/assets/'

// ===============================================

// Logo
contentful
  .getEntries({
    content_type: 'intro',
    include: 2
  })
  .then(results => {
    if (results.hasOwnProperty('items')) {
      const intro = {
        title: results.items[0].fields['title'],
        url: 'https:' + results.items[0].fields['image'].fields['file'].url
      }
      fs.writeFileSync(pathPrefix + 'intro.json', JSON.stringify(intro, null, 2), 'utf-8')
    }
  })
  .catch(error => console.log('Position:', error))

// ===============================================
