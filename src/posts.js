const config = require('./config')
const fm = require('front-matter')
const marked = require('marked')
const fs = require('fs')

//createPost(), uses front-matter to take the content of the file and give us an object...
const createPost = postPath => {
    const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}`, 'utf8')
    const content  = fm(data)
    content.body = marked(content.body)
    content.path = postPath
    return content
}

module.exports = createPost